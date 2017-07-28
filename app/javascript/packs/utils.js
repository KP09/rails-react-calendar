import moment from 'moment';

function formatDate(date) {
  return moment(date).format('MMMM DD YYYY, h:mm a');
}

export default formatDate;
