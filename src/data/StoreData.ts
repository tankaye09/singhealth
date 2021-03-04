export interface Data {
  key: string,
  name: string,
  location: string,
  terms: string,
  expiry: string,
}

export const getData = (username: string): Data[] => {
  return [
    {
      key: '1',
      name: 'Kopitiam',
      location: '#01-04',
      terms: '[Enter Terms Here]',
      expiry: '31/03/22',
    },
    {
      key: '2',
      name: '1983',
      location: '#B1-01',
      terms: '[Enter Terms Here]',
      expiry: '04/08/21',
    },
    {
      key: '3',
      name: 'Subway',
      location: '#B1-10',
      terms: '[Enter Terms Here]',
      expiry: '06/02/23',
    },
    {
      key: '4',
      name: '168 Florist',
      location: '#02-40',
      terms: '[Enter Terms Here]',
      expiry: '08/04/21',
    },
  ];
};
