import { formatNumberToK, convertCommentsToTree, pluralize } from "../ui";

describe("formatNumberToK", () => {
  it("Should return number as string if less than 1000", () => {
    expect(formatNumberToK(100)).toBe(`100`);
  });

  it("Should format number without decimal if not floating number", () => {
    expect(formatNumberToK(23000)).toBe(`23k`);
  });

  it("Should format number with 1 fixed decimal if floating", () => {
    expect(formatNumberToK(53400)).toBe(`53.4k`);
  });
});

describe("convertCommentsToTree", () => {
  let comments;

  beforeEach(() => {
    comments = [
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
  });

  it("Should convert an array into tree", () => {
    const tree = [
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

    expect(convertCommentsToTree(comments)).toEqual(tree);
  });

  it("Should ignore child comments if parent comment is deleted when converting to tree", () => {
    //delete second comment in list
    comments.splice(1, 1);

    const tree = [
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

    expect(convertCommentsToTree(comments)).toEqual(tree);
  });

  it("Should respect the sort order when converting to tree", () => {
    comments.sort((a, b) => b.created_utc - a.created_utc);

    const tree = [
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

    expect(convertCommentsToTree(comments)).toEqual(tree);
  });
});

describe("pluralize", () => {
  it("Should return singular value when count is 1", () => {
    expect(pluralize(1, "test", "tests")).toBe(`test`);
  });

  it("Should return plural value when count is more than 1", () => {
    expect(pluralize(12, "test", "tests")).toBe(`tests`);
  });
});
