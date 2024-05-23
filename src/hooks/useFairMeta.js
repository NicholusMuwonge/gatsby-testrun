import moment from 'moment';

export const useFairMeta = (frontmatter) => {
  const { startDate, endDate, location, boothNumber } = frontmatter;

  const fairLocation = `Booth ${boothNumber} at ${location}`;
  const date = `${moment(startDate).format('MMMM D, YYYY')} - ${moment(endDate).format('MMMM D, YYYY')}`;

  return { fairLocation, date };
};
