export default [
  {
    created_utc: 1570693670,
    body: "Bruh",
    author: "RandomName01",
    id: "t1_f35vz2f",
  },
  {
    created_utc: 1570683149,
    body:
      "97% Disagree it's the most unpopular opinion I've seen here after that guy who wanted to be pregnant",
    author: "shantanu011",
    id: "t1_f35nn9e",
  },
  {
    created_utc: 1570680701,
    body:
      "I'm gonna try this tonight op, and if it's shit I will come for you.\n\nEdit: just got home. Getting in shower now.\n\nEdit 2 electric boogaloo: risky click of the day. \n[No bamboozle](https://imgur.com/a/u1C215L)\n\nEdit 3: you!!!  I declare shenanigans.",
    author: "OceLawless",
    id: "t1_f35kuhk",
  },
  {
    created_utc: 1570697457,
    body:
      "Or the guy who likes sleeping in jeans\n\nEdit: to everyone commenting, I meant the dude liked to get into bed at night with the duvet on with jeans, not just taking a nap",
    author: "ShitOnMyArsehole",
    id: "t1_f35y9gp",
    parent_id: "t1_f35nn9e",
  },
  {
    created_utc: 1570703350,
    body: "Am I pregegnant or am I ok?",
    author: "HansenTakeASeat",
    id: "t1_f361yrc",
    parent_id: "t1_f35nn9e",
  },
];

export const tree = [
  {
    created_utc: 1570693670,
    body: "Bruh",
    author: "RandomName01",
    id: "t1_f35vz2f",
    children: [],
  },
  {
    created_utc: 1570683149,
    body:
      "97% Disagree it's the most unpopular opinion I've seen here after that guy who wanted to be pregnant",
    author: "shantanu011",
    id: "t1_f35nn9e",
    children: [
      {
        created_utc: 1570697457,
        body:
          "Or the guy who likes sleeping in jeans\n\nEdit: to everyone commenting, I meant the dude liked to get into bed at night with the duvet on with jeans, not just taking a nap",
        author: "ShitOnMyArsehole",
        id: "t1_f35y9gp",
        parent_id: "t1_f35nn9e",
        children: [],
      },
      {
        created_utc: 1570703350,
        body: "Am I pregegnant or am I ok?",
        author: "HansenTakeASeat",
        id: "t1_f361yrc",
        parent_id: "t1_f35nn9e",
        children: [],
      },
    ],
  },
  {
    created_utc: 1570680701,
    body:
      "I'm gonna try this tonight op, and if it's shit I will come for you.\n\nEdit: just got home. Getting in shower now.\n\nEdit 2 electric boogaloo: risky click of the day. \n[No bamboozle](https://imgur.com/a/u1C215L)\n\nEdit 3: you!!!  I declare shenanigans.",
    author: "OceLawless",
    id: "t1_f35kuhk",
    children: [],
  },
];

export const treeWithDeletedChildren = [
  {
    created_utc: 1570693670,
    body: "Bruh",
    author: "RandomName01",
    id: "t1_f35vz2f",
    children: [],
  },
  {
    created_utc: 1570680701,
    body:
      "I'm gonna try this tonight op, and if it's shit I will come for you.\n\nEdit: just got home. Getting in shower now.\n\nEdit 2 electric boogaloo: risky click of the day. \n[No bamboozle](https://imgur.com/a/u1C215L)\n\nEdit 3: you!!!  I declare shenanigans.",
    author: "OceLawless",
    id: "t1_f35kuhk",
    children: [],
  },
];

export const treeWithSortedChildren = [
  {
    created_utc: 1570683149,
    body:
      "97% Disagree it's the most unpopular opinion I've seen here after that guy who wanted to be pregnant",
    author: "shantanu011",
    id: "t1_f35nn9e",
    children: [
      {
        created_utc: 1570703350,
        body: "Am I pregegnant or am I ok?",
        author: "HansenTakeASeat",
        id: "t1_f361yrc",
        parent_id: "t1_f35nn9e",
        children: [],
      },
      {
        created_utc: 1570697457,
        body:
          "Or the guy who likes sleeping in jeans\n\nEdit: to everyone commenting, I meant the dude liked to get into bed at night with the duvet on with jeans, not just taking a nap",
        author: "ShitOnMyArsehole",
        id: "t1_f35y9gp",
        parent_id: "t1_f35nn9e",
        children: [],
      },
    ],
  },
  {
    created_utc: 1570693670,
    body: "Bruh",
    author: "RandomName01",
    id: "t1_f35vz2f",
    children: [],
  },
  {
    created_utc: 1570680701,
    body:
      "I'm gonna try this tonight op, and if it's shit I will come for you.\n\nEdit: just got home. Getting in shower now.\n\nEdit 2 electric boogaloo: risky click of the day. \n[No bamboozle](https://imgur.com/a/u1C215L)\n\nEdit 3: you!!!  I declare shenanigans.",
    author: "OceLawless",
    id: "t1_f35kuhk",
    children: [],
  },
];
