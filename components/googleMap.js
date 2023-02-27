import { useEffect } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';

function Map({ marker }) {
  useEffect(() => {
    const blankMap = new window.google.maps.Map(
      document.getElementById('gmap'),
      {
        zoom: 17,
        center: marker,
      }
    );
    const mark = new window.google.maps.Marker({
      position: marker,
      map: blankMap,
    });
  }, []);

  return <div id="gmap" className="w-full h-full" />;
}

export default function GoogleMap({ marker }) {
  const render = (status) => {
    return <h1>{status}</h1>;
  };

  return (
    <Wrapper apiKey={process.env.GMAPS_API_KEY} render={render}>
      <Map marker={marker} />
    </Wrapper>
  );
}
