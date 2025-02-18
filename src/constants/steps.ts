export const STEPS: {[key in Step]: Omit<StepData, 'id'>} = {
	'your-info': {
		name: 'Your info',
		title: 'Personal info',
		description: 'Please provide your name, email address, and phone number.',
	},
	'select-plan': {
		name: 'Select plan',
		title: 'Select your plan',
		description: 'You have the option of monthly or yearly billing.',
	},
	'add-ons': {
		name: 'Add-ons',
		title: 'Pick add-ons',
		description: 'Add-ons help enhance your gaming experience.',
	},
	summary: {
		name: 'Summary',
		title: 'Finishing up',
		description: ' Double-check everything looks OK before confirming.',
	},
};

export const STEPS_LIST: StepData[] = Object.entries(STEPS).map(
	([id, data]) => ({id, ...data} as StepData)
);
