import {useStepsStore} from '../../store/useFormStore';
import './Navigation.scss';

export default function Navigation() {
	const {step, goBack, goNext} = useStepsStore();

	return (
		<nav className='navigation'>
			{step !== 'your-info' && (
				<button className='go-back' onClick={goBack}>
					Go Back
				</button>
			)}
			<button className='next-step' onClick={goNext}>
				{step === 'summary' ? 'Confirm' : 'Next Step'}
			</button>
		</nav>
	);
}
