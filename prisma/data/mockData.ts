//used in prisma seed to add test data to the database

export const regions = [
  {
    id: 1,
    city: 'Milwaukee',
    state: 'WI',
    zip: '53202',
  }
]

export const restaurants = [
  {
    id:1,
    name: 'Kopps', 
    description:'Kopps is a burger and custard restaurant in Milwaukee, WI',
    flavorOfDayUrl: 'https://www.kopps.com/flavor-of-the-day',
  regionId        :1
  },
  {
    id:2,
    name: 'Leon\'s', 
    description:'Leon\'s is a custard restaurant in Milwaukee, WI',
    flavorOfDayUrl: 'https://www.leonsfrozencustard.us/flavor-of-the-day',
    regionId: 1
  },
  {
    id:3,
    name: 'Culver\'s',
    description:'Culver\'s is a burger and custard restaurant in Milwaukee, WI',
    flavorOfDayUrl: 'https://www.culvers.com/restaurants/milwaukee-wi',
    regionId: 1
  },
  {
    id:4,
    name: 'Gilles',
    description:'Gilles is a burger and custard restaurant in Milwaukee, WI',
    flavorOfDayUrl: 'https://www.gillesfrozencustard.com/flavor-of-the-day',
    regionId: 1
  }
];

export const flavors = [
  {
    id: 1,
    name: 'Chocolate',
    description: 'Chocolate ice cream',
    restaurantId: 1,
  },
  {
    id: 2,
    name: 'Vanilla',
    description: 'Vanilla ice cream',
    restaurantId: 2,
  },
  {
    id: 3,
    name: 'Strawberry',
    description: 'Strawberry ice cream',
    restaurantId: 3,
  },
  {
    id: 4,
    name: 'Mint',
    description: 'Mint ice cream',
    restaurantId: 4,
  },
  {
    id: 5,
    name: 'Pink',
    description: 'Pink ice cream',
    restaurantId: 2,
  },
  {
    id: 6,
    name: 'Banana Split',
    description: 'Banana split ice cream',
    restaurantId: 3,
  },
  {
    id: 7,
    name: 'Chefs Special',
    description: 'Trust the chef ice cream',
    restaurantId: 4,
  },
  {
    id: 8,
    name: 'Guacamole',
    description: 'Guacamole ice cream',
    restaurantId: 1,
  },
  {
    id: 9,
    name: 'Pecan',
    description: 'Pecan ice cream',
    restaurantId: 4,
  },
  {
    id: 10,
    name: 'Peanut Butter',
    description: 'Peanut Butter ice cream',
    restaurantId: 3,
  },
  {
    id: 11,
    name: 'Raspberry',
    description: 'Raspberry ice cream',
    restaurantId: 2,
  },
  {
    id: 12,
    name: 'Cheese',
    description: 'Cheese ice cream',
    restaurantId: 1,
  }
]

export const flavorsOfTheDay = [
  {
    date: new Date('2021-01-01'),
    flavorId: 1,
  },
  {
    date: new Date('2021-01-02'),
    flavorId: 2,
  },
  {
    date: new Date('2021-01-03'),
    flavorId: 3,
  },
  {
    date: new Date('2021-01-04'),
    flavorId: 4,
  },
  {
    date: new Date('2021-01-01'),
    flavorId: 5,
  },
  {
    date: new Date('2021-01-02'),
    flavorId: 6,
  },
  {
    date: new Date('2021-01-03'),
    flavorId: 7,
  },
  {
    date: new Date('2021-01-04'),
    flavorId: 8,
  },
  {
    date: new Date('2021-01-05'),
    flavorId: 9,
  },
  {
    date: new Date('2021-01-06'),
    flavorId: 10,
  },
  {
    date: new Date('2021-01-07'),
    flavorId: 11,
  },
  {
    date: new Date('2021-01-08'),
    flavorId: 12,
  }
]
