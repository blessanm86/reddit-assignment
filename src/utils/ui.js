import formatDistanceStrict from "date-fns/formatDistanceStrict";

export function formatNumberToK(number) {
  if (number < 1000) {
    return `${number}`;
  }

  const result = number / 1000;
  const resultRounded = Math.round(result);

  if (result === resultRounded) {
    return `${result}k`;
  }

  return `${result.toFixed(1)}k`;
}

export function convertCommentsToTree(comments) {
  let nodeCount = 0;

  const commentsMap = comments.reduce((acc, comment) => {
    comment.children = [];
    acc[comment.id] = comment;
    return acc;
  }, {});

  const sortedParentIds = new Set();

  for (let comment of comments) {
    if (comment.parent_id) {
      //only consider children that that have a parent in the map.
      //If parent doesnt exist, it means it was deleted so the children can be ignored.
      if (commentsMap[comment.parent_id]) {
        commentsMap[comment.parent_id].children.push(comment);
      }

      let node = comment;
      while (node.parent_id) {
        node = commentsMap[node.parent_id];
        //means parent was deleted
        if (!node) {
          break;
        }
      }
      if (node) {
        nodeCount++;
        sortedParentIds.add(node.id);
      }
    } else {
      sortedParentIds.add(comment.id);
    }
  }

  const sortedParentIdsArray = Array.from(sortedParentIds);
  nodeCount += sortedParentIdsArray.length;
  return { tree: sortedParentIdsArray.map((id) => commentsMap[id]), nodeCount };
}

export function getTimeDifferenceFromNowInWords(timestamp) {
  return formatDistanceStrict(new Date(timestamp), new Date());
}

export function convertStringToHtml(str) {
  return new DOMParser().parseFromString(str, "text/html").body.childNodes[0]
    .nodeValue;
}

export function pluralize(count, singular, plural) {
  const pluralRules = new Intl.PluralRules("en-US");
  const selection = pluralRules.select(count);

  switch (selection) {
    case "one": {
      return singular;
    }
    default: {
      return plural;
    }
  }
}
