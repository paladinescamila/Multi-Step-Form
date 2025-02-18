import {PLANS} from '../constants/plans';
import {ADD_ONS} from '../constants/add-ons';

/**
 * Generates a summary of the selected plan and add-ons, including their formatted prices and total cost.
 *
 * @param plan - The selected plan.
 * @param frecuency - The billing frequency.
 * @param addOns - The selected add-ons.
 * @returns An object containing the formatted summary of the plan, add-ons, and total cost.
 */
export const getSummary = (plan: Plan, frecuency: Frecuency, addOns: AddOns) => {
	const priceFormat = (price: number) => `$${price}/${frecuency === 'monthly' ? 'mo' : 'yr'}`;

	const {name, price} = PLANS[plan];
	const addOnsSummary: {name: string; price: string}[] = [];
	let total = price[frecuency];

	for (const addOn in addOns) {
		const {name, price} = ADD_ONS[addOn as AddOn];
		if (!addOns[addOn as AddOn]) continue;
		total += price[frecuency];
		addOnsSummary.push({name, price: priceFormat(price[frecuency])});
	}

	return {
		plan: `${name} (${frecuency === 'monthly' ? 'Monthly' : 'Yearly'})`,
		price: priceFormat(price[frecuency]),
		addOns: addOnsSummary,
		total: {
			name: `Total (per ${frecuency === 'monthly' ? 'month' : 'year'})`,
			price: priceFormat(total),
		},
	};
};
