import { SITE } from '../config/site';
import { SUBSCRIPTION_DISCOUNT, sizes } from '../config/products';

export const money = (n: number) =>
  '$' + Math.round(n).toLocaleString(SITE.locale) + ' ' + SITE.currency;

export const priceFor = (base: number, sizeIndex: number, subscription: boolean) =>
  base * sizes[sizeIndex].multiplier * (subscription ? 1 - SUBSCRIPTION_DISCOUNT : 1);
