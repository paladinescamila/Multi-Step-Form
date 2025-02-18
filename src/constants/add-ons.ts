export const ADD_ONS: {[key in AddOn]: Omit<AddOnData, 'id'>} = {
	'online-service': {
		name: 'Online service',
		description: 'Access to multiplayer games',
		price: {monthly: 1, yearly: 10},
	},
	'larger-storage': {
		name: 'Larger storage',
		description: 'Extra 1TB of cloud save',
		price: {monthly: 2, yearly: 20},
	},
	'customizable-profile': {
		name: 'Customizable Profile',
		description: 'Custom theme on your profile',
		price: {monthly: 2, yearly: 20},
	},
};

export const ADD_ONS_LIST: AddOnData[] = Object.entries(ADD_ONS).map(
	([id, data]) => ({id, ...data} as AddOnData)
);
