import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from './store';
import {formActions, FormState} from './formSlice';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

/**
 * Hook to get the current step and dispatch actions to update it
 */
export const useStepsStore = () => {
	const step = useAppSelector((state) => state.form.step);
	const dispatch = useAppDispatch();
	const confirmed = useAppSelector((state) => state.form.confirmed);

	const goBack = () => dispatch(formActions.goBack());
	const goNext = () => dispatch(formActions.goNext());

	return {step, confirmed, goBack, goNext};
};

/**
 * Hook to get the form state and dispatch actions to update it on step 1
 */
export const useInfoStore = () => {
	const name = useAppSelector((state) => state.form.name);
	const email = useAppSelector((state) => state.form.email);
	const phone = useAppSelector((state) => state.form.phone);

	const nameError = useAppSelector((state) => state.form.nameError);
	const emailError = useAppSelector((state) => state.form.emailError);
	const phoneError = useAppSelector((state) => state.form.phoneError);

	const dispatch = useAppDispatch();
	const updateName = (name: FormState['name']) => dispatch(formActions.updateName(name));
	const updateEmail = (email: FormState['email']) => dispatch(formActions.updateEmail(email));
	const updatePhone = (phone: FormState['phone']) => dispatch(formActions.updatePhone(phone));

	return {
		name,
		email,
		phone,
		nameError,
		emailError,
		phoneError,
		updateName,
		updateEmail,
		updatePhone,
	};
};

/**
 * Hook to get the form state and dispatch actions to update it on step 2
 */
export const usePlanStore = () => {
	const plan = useAppSelector((state) => state.form.plan);
	const frecuency = useAppSelector((state) => state.form.frecuency);

	const dispatch = useAppDispatch();
	const updatePlan = (plan: FormState['plan']) => dispatch(formActions.updatePlan(plan));

	const updateFrecuency = (frecuency: FormState['frecuency']) =>
		dispatch(formActions.updateFrecuency(frecuency));

	return {plan, frecuency, updatePlan, updateFrecuency};
};

/**
 * Hook to get the form state and dispatch actions to update it on step 3
 */
export const useAddOnsStore = () => {
	const frecuency = useAppSelector((state) => state.form.frecuency);
	const addOns = useAppSelector((state) => state.form.addOns);

	const dispatch = useAppDispatch();
	const updateAddOn = (addOn: AddOn) => dispatch(formActions.updateAddOne(addOn));

	return {frecuency, addOns, updateAddOn};
};

/**
 * Hook to get the form state on step 4
 */
export const useSummaryStore = () => {
	const plan = useAppSelector((state) => state.form.plan);
	const frecuency = useAppSelector((state) => state.form.frecuency);
	const addOns = useAppSelector((state) => state.form.addOns);
	const confirmed = useAppSelector((state) => state.form.confirmed);

	const dispatch = useAppDispatch();
	const goBackToPlan = () => dispatch(formActions.goBackToPlan());

	return {plan, frecuency, addOns, confirmed, goBackToPlan};
};
