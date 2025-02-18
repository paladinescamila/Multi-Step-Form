import {PLANS} from '../constants/plans';
import {ADD_ONS} from '../constants/add-ons';
import {useSummaryStore} from '../store/useFormStore';

export const useGetSummary = () => {
	const {plan, frecuency, addOns} = useSummaryStore();

	const planName = PLANS[plan].name;
	const planPrice = PLANS[plan].price[frecuency];
	const frecuencyName = frecuency === 'monthly' ? 'Monthly' : 'Yearly';
	const frecuencyText = frecuency === 'monthly' ? 'month' : 'year';

	const priceFormat = (price: number) => `$${price}/${frecuency === 'monthly' ? 'mo' : 'yr'}`;

	let total: number = planPrice;

	const addOnsData: {name: string; price: string}[] = [];

	for (const addOn in addOns) {
		if (addOns[addOn as AddOn]) {
			const addOnData = ADD_ONS[addOn as AddOn];
			addOnsData.push({name: addOnData.name, price: priceFormat(addOnData.price[frecuency])});
			total += addOnData.price[frecuency];
		}
	}

	return {
		planName,
		planPrice: priceFormat(planPrice),
		frecuencyName,
		frecuencyText,
		addOnsData,
		total: priceFormat(total),
	};
};
