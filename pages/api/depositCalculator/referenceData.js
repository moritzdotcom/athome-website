export default async function handler(req, res) {
  const interestRates = [
    {
      validFrom: '2003-01-01',
      ratePercent: '2.195',
    },
    {
      validFrom: '2004-01-01',
      ratePercent: '2.126',
    },
    {
      validFrom: '2005-01-01',
      ratePercent: '2.045',
    },
    {
      validFrom: '2006-01-01',
      ratePercent: '2.079',
    },
    {
      validFrom: '2007-01-01',
      ratePercent: '2.350',
    },
    {
      validFrom: '2008-01-01',
      ratePercent: '2.518',
    },
    {
      validFrom: '2009-01-01',
      ratePercent: '1.817',
    },
    {
      validFrom: '2010-01-01',
      ratePercent: '1.426',
    },
    {
      validFrom: '2011-01-01',
      ratePercent: '1.512',
    },
    {
      validFrom: '2012-01-01',
      ratePercent: '1.319',
    },
    {
      validFrom: '2013-01-01',
      ratePercent: '0.991',
    },
    {
      validFrom: '2014-01-01',
      ratePercent: '0.743',
    },
    {
      validFrom: '2015-01-01',
      ratePercent: '0.461',
    },
    {
      validFrom: '2016-01-01',
      ratePercent: '0.300',
    },
    {
      validFrom: '2017-01-01',
      ratePercent: '0.205',
    },
    {
      validFrom: '2018-01-01',
      ratePercent: '0.155',
    },
    {
      validFrom: '2019-01-01',
      ratePercent: '0.130',
    },
    {
      validFrom: '2020-01-01',
      ratePercent: '0.105',
    },
    {
      validFrom: '2021-01-01',
      ratePercent: '0.085',
    },
    {
      validFrom: '2022-01-01',
      ratePercent: '0.099',
    },
    {
      validFrom: '2023-01-01',
      ratePercent: '0.464',
    },
    {
      validFrom: '2024-01-01',
      ratePercent: '0.741',
    },
    {
      validFrom: '2025-01-01',
      ratePercent: '0.686',
    },
    {
      validFrom: '2026-01-01',
      ratePercent: '0.706',
    },
  ];

  const houses = [
    {
      id: '1',
      address: 'Roßstrasse 9',
    },
    {
      id: '2',
      address: 'Pfalzstrasse 17',
    },
    {
      id: '3',
      address: 'Schloßstrasse 19',
    },
    {
      id: '4',
      address: 'Neanderstrasse 15',
    },
    {
      id: '5',
      address: 'Luisenstrasse 3',
    },
    {
      id: '6',
      address: 'Lindenstrasse 267',
    },
    {
      id: '7',
      address: 'Engerstrasse 3',
    },
    {
      id: '8',
      address: 'Schützenstrasse 20',
    },
    {
      id: '9',
      address: 'Stockkampstrasse 47',
    },
    {
      id: '10',
      address: 'Driburger Strasse 8',
    },
    {
      id: '11',
      address: 'Kölner Landstrasse 261',
    },
    {
      id: '12',
      address: 'Merowingerstrasse 17',
    },
    {
      id: '13',
      address: 'Borsigstrasse 7',
    },
    {
      id: '14',
      address: 'Gerresheimer Landstrasse 152',
    },
    {
      id: '15',
      address: 'Hoppengarten 15',
    },
    {
      id: '16',
      address: 'Hoppengarten 17',
    },
    {
      id: '17',
      address: 'Kölner Strasse 215',
    },
    {
      id: '18',
      address: 'Kölner Strasse 217',
    },
    {
      id: '19',
      address: 'Alte Bachstrasse 25-27',
    },
    {
      id: '22',
      address: 'Grafenberger Allee 235',
    },
    {
      id: '23',
      address: 'Börnestrasse 2',
    },
    {
      id: '24',
      address: 'Angerbenden 31',
    },
    {
      id: '25',
      address: 'Koppelskamp 10',
    },
    {
      id: '26',
      address: 'Koppelskamp 12',
    },
    {
      id: '27',
      address: 'Koppelskamp 14',
    },
    {
      id: '28',
      address: 'Koppelskamp 8-8a',
    },
    {
      id: '29',
      address: 'Bismarckstrasse 109',
    },
    {
      id: '30',
      address: 'Memelstrasse 43',
    },
    {
      id: '31',
      address: 'Angermunder Strasse 30',
    },
    {
      id: '32',
      address: 'Koppelskamp 5',
    },
    {
      id: '33',
      address: 'Koppelskamp 5a',
    },
    {
      id: '34',
      address: 'Koppelskamp 7',
    },
    {
      id: '35',
      address: 'Lintorfer Waldstr. 6',
    },
    {
      id: '36',
      address: 'Lintorfer Waldstr. 8',
    },
    {
      id: '37',
      address: 'Lintorfer Waldstr. 10',
    },
    {
      id: '38',
      address: 'Koloniestr. 205',
    },
    {
      id: '39',
      address: 'Metzer Str. 28',
    },
    {
      id: '40',
      address: 'Metzer Str. 28a',
    },
    {
      id: '41',
      address: 'Spichernstr. 27',
    },
    {
      id: '42',
      address: 'Metzer Str. 17',
    },
    {
      id: '43',
      address: 'Neumühler Str. 35',
    },
    {
      id: '44',
      address: 'Neumühler Str. 37',
    },
    {
      id: '45',
      address: 'Neumühler Str. 39',
    },
    {
      id: '46',
      address: 'Neumühler Str. 41',
    },
    {
      id: '47',
      address: 'Mündelheimer Str. 3-5',
    },
    {
      id: '48',
      address: 'Mendelssohnstr. 3',
    },
    {
      id: '49',
      address: 'Angermunder Straße 69',
    },
    {
      id: '50',
      address: 'Angermunder Straße 71',
    },
    {
      id: '65',
      address: 'Duisburger Landstraße 31',
    },
    {
      id: '66',
      address: 'Wittlaerer Kamp 1',
    },
  ];

  return res
    .setHeader(
      'Cache-Control',
      'public, s-maxage=600, stale-while-revalidate=1200',
    )
    .status(200)
    .json({
      houses,
      interestRates,
      ratesAvailableThrough: '2026-10-31',
      source: {
        label: 'Deutsche Bundesbank - SUD105',
        publishedAt: '2026-10-01',
        url: 'https://www.bundesbank.de/resource/blob/615016/351e847efb8879a6bbe9afdeed61605f/472B63F073F071307366337C94F8C870/s510atspar3-data.pdf',
      },
    });
}
