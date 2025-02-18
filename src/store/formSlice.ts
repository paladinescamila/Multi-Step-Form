import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {validateName, validateEmail, validatePhone} from '../utils/validations';

export type FormState = {
	step: Step;

	name: string;
	email: string;
	phone: string;
	nameError: string;
	emailError: string;
	phoneError: string;

	plan: Plan;
	frecuency: Frecuency;

	addOns: AddOns;

	confirmed: boolean;
};

const initialState: FormState = {
	step: 'your-info',

	name: '',
	email: '',
	phone: '',
	nameError: '',
	emailError: '',
	phoneError: '',

	plan: 'arcade',
	frecuency: 'monthly',

	addOns: {'online-service': false, 'larger-storage': false, 'customizable-profile': false},

	confirmed: false,
};

export const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		goBack: (state) => {
			if (state.step === 'summary') state.step = 'add-ons';
			else if (state.step === 'add-ons') state.step = 'select-plan';
			else if (state.step === 'select-plan') state.step = 'your-info';
		},

		goNext: (state) => {
			if (state.step === 'your-info') {
				state.nameError = validateName(state.name);
				state.emailError = validateEmail(state.email);
				state.phoneError = validatePhone(state.phone);
				if (state.nameError || state.emailError || state.phoneError) return;
			}

			if (state.step === 'your-info') state.step = 'select-plan';
			else if (state.step === 'select-plan') state.step = 'add-ons';
			else if (state.step === 'add-ons') state.step = 'summary';
			else if (state.step === 'summary') state.confirmed = true;
		},

		goBackToPlan: (state) => {
			state.step = 'select-plan';
		},

		updateName: (state, action: PayloadAction<FormState['name']>) => {
			state.name = action.payload;
			state.nameError = validateName(action.payload);
		},

		updateEmail: (state, action: PayloadAction<FormState['email']>) => {
			state.email = action.payload;
			state.emailError = validateEmail(action.payload);
		},

		updatePhone: (state, action: PayloadAction<FormState['phone']>) => {
			state.phone = action.payload;
			state.phoneError = validatePhone(action.payload);
		},

		updatePlan: (state, action: PayloadAction<FormState['plan']>) => {
			state.plan = action.payload;
		},

		updateFrecuency: (state, action: PayloadAction<FormState['frecuency']>) => {
			state.frecuency = action.payload;
		},

		updateAddOne: (state, action: PayloadAction<AddOn>) => {
			state.addOns[action.payload] = !state.addOns[action.payload];
		},
	},
});

export const formActions = formSlice.actions;
export const formReducer = formSlice.reducer;
