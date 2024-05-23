import moment from 'moment';

export const filterFairs = (fairs, filter) => {
  let filteredFairs;

  if (filter === "upcoming") {
    filteredFairs = fairs.filter(
      ({ node }) => moment(node.frontmatter.startDate).isAfter(moment())
    );
  }

  if (filter === "past") {
    filteredFairs = fairs.filter(
      ({ node }) => moment(node.frontmatter.startDate).isBefore(moment())
    );
  }

  return filteredFairs.sort(
    (a, b) => moment(b.node.frontmatter.startDate) - moment(a.node.frontmatter.startDate)
  );
};
