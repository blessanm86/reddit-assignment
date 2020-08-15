import formatDistanceStrict from "date-fns/formatDistanceStrict";

export function formatNumberToK(number) {
  if (number < 1000) {
    return number;
  }
  return `${(number / 1000).toFixed(1)}k`;
}

export function convertCommentsToTree(comments) {
  const commentsMap = comments.reduce((acc, comment) => {
    comment.children = [];
    acc[comment.id] = comment;
    return acc;
  }, {});

  let tree = [];

  for (let comment of comments) {
    if (comment.parent_id) {
      //only consider children that that have a parent in the map.
      //If parent doesnt exist, it means it was deleted so the children can be ignored.
      if (commentsMap[comment.parent_id]) {
        commentsMap[comment.parent_id].children.push(comment);
      }
    } else {
      tree.push(comment);
    }
  }

  return tree;
}

export function getTimeDifferenceFromNowInWords(timestamp) {
  return formatDistanceStrict(new Date(timestamp), new Date());
}

export function convertStringToHtml(str) {
  const parser = new DOMParser();
  return parser.parseFromString(str, "text/html").body.childNodes[0].nodeValue;
}
