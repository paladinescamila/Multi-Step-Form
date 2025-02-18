import ArcadeIcon from '../assets/plans/arcade.svg';
import AdvancedIcon from '../assets/plans/advanced.svg';
import ProIcon from '../assets/plans/pro.svg';

export const PLANS: {[key in Plan]: Omit<PlanData, 'id'>} = {
	arcade: {name: 'Arcade', price: {monthly: 9, yearly: 90}, icon: ArcadeIcon},
	advanced: {name: 'Advanced', price: {monthly: 12, yearly: 120}, icon: AdvancedIcon},
	pro: {name: 'Pro', price: {monthly: 15, yearly: 150}, icon: ProIcon},
};

export const PLANS_LIST: PlanData[] = Object.entries(PLANS).map(
	([id, data]) => ({id, ...data} as PlanData)
);
