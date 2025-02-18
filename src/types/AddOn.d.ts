type AddOn = 'online-service' | 'larger-storage' | 'customizable-profile';

type AddOnData = {id: AddOn; name: string; description: string; price: PriceByFrecuency};

type AddOns = {[key in AddOn]: boolean};
