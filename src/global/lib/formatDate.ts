import moment from 'moment';
import 'moment/locale/pt-br';

type dateFormat = 'default' | 'extense' | 'withhour';

const formatDate = (date: string, format: dateFormat) => {
  switch (format) {
    case 'extense':
      return moment(date).format('LL');
    case 'withhour':
      return moment(date).format('LLL');
    default:
      return moment(date).format('L')
  }
  
}

export { formatDate }