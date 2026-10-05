const OAuth = require('oauth');
const apiToken = process.env.IMMOSCOUT_API_KEY;
const apiSecret = process.env.IMMOSCOUT_API_SECRET;
const accessToken = process.env.IMMOSCOUT_ACCESS_TOKEN;
const accessSecret = process.env.IMMOSCOUT_ACCESS_SECRET;

const oauth = new OAuth.OAuth(
  'https://rest.immobilienscout24.de/restapi/security/oauth/request_token',
  'https://rest.immobilienscout24.de/restapi/security/oauth/access_token',
  apiToken,
  apiSecret,
  '1.0',
  null,
  'HMAC-SHA1',
  null,
  { Accept: 'application/json' }
);

export function getFlats() {
  return new Promise((resolve, reject) => {
    oauth.get(
      'https://rest.immobilienscout24.de/restapi/api/offer/v1.0/user/me/realestate?publishchannel=IS24',
      accessToken,
      accessSecret,
      function (error, data) {
        if (error) {
          reject(error);
          return;
        }
        const json = JSON.parse(data);
        const realEstateElement =
          json['realestates.realEstates']?.realEstateList?.realEstateElement;
        const list = Array.isArray(realEstateElement)
          ? realEstateElement
          : [realEstateElement];
        const formattedList = list.map((elem) => {
          return {
            id: elem['@id'],
            title: elem.title,
            address: `${elem.address.street} ${elem.address.houseNumber}, ${elem.address.postcode} ${elem.address.city}`,
            imageUrl: elem.titlePicture.urls[0].url[0]['@href'].replace(
              /\/ORIG\/.*/,
              ''
            ),
            price: `${elem.price.value} €`,
            area: elem.livingSpace,
            rooms: elem.numberOfRooms,
          };
        });
        resolve(formattedList);
      }
    );
  });
}

export function getFlat(id) {
  return new Promise((resolve, reject) => {
    oauth.get(
      `https://rest.immobilienscout24.de/restapi/api/offer/v1.0/user/me/realestate/${id}?publishchannel=IS24`,
      accessToken,
      accessSecret,
      function (error, data) {
        if (error) {
          reject(error);
          return;
        }
        const json = JSON.parse(data);
        const flat = Object.values(json)[0];
        const flatData = {
          title: flat.title,
          description: flat.descriptionNote,
          address: `${flat.address.street} ${flat.address.houseNumber}, ${flat.address.postcode} ${flat.address.city}`,
          coordinates: flat.address.wgs84Coordinate,
          state: flat.realEstateState,
          furnishingNote: flat.furnishingNote,
          locationNote: flat.locationNote,
          otherNote: flat.otherNote,
          attachments: flat.attachments,
          type: flat.apartmentType,
          floor: flat.floor,
          lift: flat.lift == 'true',
          cellar: flat.cellar == 'YES',
          handicappedAccessible: flat.handicappedAccessible == 'YES',
          parkingSpaces: flat.numberOfParkingSpaces,
          condition: flat.condition,
          lastRefurbishment: flat.lastRefurbishment,
          freeFrom: flat.freeFrom,
          heatingType: flat.heatingType,
          firingTypes: flat.firingTypes,
          numberOfFloors: flat.numberOfFloors,
          numberOfBedRooms: flat.numberOfBedRooms,
          numberOfBathRooms: flat.numberOfBathRooms,
          guestToilet: flat.guestToilet == 'YES',
          parkingSpaceType: flat.parkingSpaceType,
          baseRent: flat.baseRent,
          totalRent: flat.totalRent,
          serviceCharge: flat.serviceCharge,
          deposit: flat.deposit,
          heatingCosts: flat.heatingCosts,
          heatingCostsInServiceCharge: flat.heatingCostsInServiceCharge,
          petsAllowed: flat.petsAllowed,
          parkingSpacePrice: flat.parkingSpacePrice,
          useAsFlatshareRoom: flat.useAsFlatshareRoom,
          livingSpace: flat.livingSpace,
          numberOfRooms: flat.numberOfRooms,
          builtInKitchen: flat.builtInKitchen == 'true',
          balcony: flat.balcony == 'true',
          garden: flat.garden == 'true',
          courtage: flat.courtage,
        };
        resolve(flatData);
      }
    );
  });
}

export function getAttachments(id) {
  return new Promise((resolve, reject) => {
    oauth.get(
      `https://rest.immobilienscout24.de/restapi/api/offer/v1.0/user/me/realestate/${id}/attachment`,
      accessToken,
      accessSecret,
      function (error, data) {
        if (error) {
          console.log(error);
          reject(error);
          return;
        }
        const json = JSON.parse(data);
        const attachments = json['common.attachments'][0]?.attachment;
        const list = Array.isArray(attachments) ? attachments : [attachments];

        const formattedList = list.map((elem) => {
          return {
            id: elem['@id'],
            title: elem.title,
            titlePicture: elem.titlePicture == 'true',
            type: elem['@xsi.type'],
            imageUrl:
              elem.url ||
              elem.urls[0].url[0]['@href'].replace(/\/ORIG\/.*/, ''),
          };
        });
        resolve(formattedList);
      }
    );
  });
}
