import GoogleMap from '../../components/googleMap';
import { getAttachments, getFlat } from '../../services/immoscout';

function FlatNotFound() {
  return <div>Not Found</div>;
}

function ServerError({ message }) {
  return <div>{message}</div>;
}

function RenderText({ identifier, text }) {
  return (
    text && (
      <>
        {text.split('\n').map((paragraph, i) => {
          const bulletPoint = paragraph.match(/^\s*-(.*)$/);
          if (bulletPoint) {
            return (
              <ul key={`paragraph-${identifier}-${i}`} className="list-disc">
                <li className="ml-3">{bulletPoint[1]}</li>
              </ul>
            );
          } else {
            return (
              <p
                key={`paragraph-${identifier}-${i}`}
                className="pt-2 min-h-[1rem]"
              >
                {paragraph}
              </p>
            );
          }
        })}
      </>
    )
  );
}

export default function Flat({ id, flatData, attachments, error }) {
  if (error) {
    switch (error.statusCode) {
      case 404:
        return <FlatNotFound />;
      default:
        return (
          <ServerError
            message={
              JSON.parse(error.data)['common.messages'][0].message.message
            }
          />
        );
        break;
    }
  }
  return (
    <>
      <header className="mx-auto max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:m-5 sm:shadow-xl sm:rounded-xl sm:overflow-hidden">
          <img
            src={attachments.filter((att) => att.titlePicture)[0].imageUrl}
            className="w-full sm:w-2/5 max-h-[50vh] object-cover"
          />
          <div className="w-full sm:w-3/5 sm:dark:bg-gray-900 flex flex-col items-center justify-center px-5 py-2 gap-2">
            <h6 className="text-red-800 text-md lg:text-xl font-bold w-full">
              {flatData.address}
            </h6>
            <h3 className="text-xl lg:text-2xl font-bold w-full">
              {flatData.title}
            </h3>
            <a
              href={`https://www.immobilienscout24.de/expose/${id}`}
              className="flex items-center gap-2 border py-1 px-2 rounded-md bg-gray-50 dark:text-gray-800 self-start"
            >
              <img src="/logos/immoScout.png" width="30" />
              Auf ImmoScout24 ansehen
            </a>
          </div>
        </div>
      </header>
      <main className="mt-5 px-5 mx-auto max-w-4xl">
        <RenderText identifier="description" text={flatData.description} />
        {flatData.furnishingNote && (
          <>
            <h3 className="text-red-800 text-xl lg:text-2xl font-bold w-full mt-5">
              Einrichtung
            </h3>
            <RenderText
              identifier="furnishing"
              text={flatData.furnishingNote}
            />
          </>
        )}
        <h3 className="text-red-800 text-xl lg:text-2xl font-bold w-full mt-5">
          Lage
        </h3>
        <RenderText identifier="location" text={flatData.locationNote} />
        {flatData.coordinates && (
          <div className="w-full h-72 mt-3">
            <GoogleMap
              marker={{
                lat: flatData.coordinates.latitude,
                lng: flatData.coordinates.longitude,
              }}
            />
          </div>
        )}
        <h3 className="text-red-800 text-xl lg:text-2xl font-bold w-full mt-5">
          Sonstiges
        </h3>
        <RenderText identifier="other" text={flatData.otherNote} />
      </main>
      <div className="px-5 flex gap-3 overflow-x-scroll mt-5">
        {attachments
          .filter((att) => !att.titlePicture)
          .map((attachment) => {
            return (
              <div key={`flat-attachment-${attachment.id}`} className="h-60">
                {attachment.type == 'common:Picture' ? (
                  <img
                    src={attachment.imageUrl}
                    className="w-auto h-full max-w-none rounded-md shadow-md"
                  />
                ) : (
                  <iframe
                    src={attachment.imageUrl}
                    className="w-auto h-full max-w-none rounded-md shadow-md"
                  />
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;

  try {
    return {
      props: {
        id,
        flatData: JSON.parse(JSON.stringify(await getFlat(id))),
        attachments: JSON.parse(JSON.stringify(await getAttachments(id))),
      },
    };
  } catch (error) {
    return { props: { error } };
  }
}
