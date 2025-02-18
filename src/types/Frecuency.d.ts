type Frecuency = 'monthly' | 'yearly';

type PriceByFrecuency = {[key in Frecuency]: number};
