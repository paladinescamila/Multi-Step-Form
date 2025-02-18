import ArcadeIcon from '../assets/plans/arcade.svg';
import AdvancedIcon from '../assets/plans/advanced.svg';
import ProIcon from '../assets/plans/pro.svg';

export const PLANS: PlanData[] = [
	{name: 'arcade', price: {monthly: 9, yearly: 90}, icon: ArcadeIcon},
	{name: 'advanced', price: {monthly: 12, yearly: 120}, icon: AdvancedIcon},
	{name: 'pro', price: {monthly: 15, yearly: 150}, icon: ProIcon},
];
