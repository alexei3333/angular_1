import { IdDto } from '../interfaces/common';
import qs from 'qs';
export const trackByFn = (index: number, item: IdDto) => {
  return item.id;
};

export const objectToQuery = (data: object): string => {
  if (!data) {
    return '';
  }
  return qs.stringify(data, { addQueryPrefix: true, encode: false });
};
