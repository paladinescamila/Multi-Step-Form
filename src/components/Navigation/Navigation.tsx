import {useStepsStore} from '../../store/useFormStore';
import './Navigation.scss';

export default function Navigation() {
	const {step, goBack, goNext} = useStepsStore();

	return (
		<nav className='navigation' aria-label='Form navigation'>
			{step !== 'your-info' && (
				<button
					type='button'
					className='go-back'
					onClick={goBack}
					aria-label='Go back to the previous step'>
					Go Back
				</button>
			)}
			<button
				type='button'
				className='next-step'
				onClick={goNext}
				aria-label={step === 'summary' ? 'Confirm your selection' : 'Go to the next step'}>
				{step === 'summary' ? 'Confirm' : 'Next Step'}
			</button>
		</nav>
	);
}
