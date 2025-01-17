import moment from 'moment';
// import 'moment/locale/en'
import 'moment-timezone';
moment.locale('en');

export const convertedLocalDate = (
   data: string,
   hours = false,
   tz: number = 0
) => {
   if (hours) {
      return moment(data).tz(String(tz)).format('HH:mm');
   }
   return moment(data).format('ddd, DD MMM ');
};
