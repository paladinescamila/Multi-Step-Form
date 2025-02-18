import {STEPS} from './constants/steps';
import {useStepsStore} from './store/useFormStore';
import './styles/index.scss';

// Components
import Sidebar from './components/Sidebar/Sidebar';
import Step1 from './components/Step1/Step1';
import Step2 from './components/Step2/Step2';
import Step3 from './components/Step3/Step3';
import Step4 from './components/Step4/Step4';
import Navigation from './components/Navigation/Navigation';

function App() {
	const {step, confirmed} = useStepsStore();

	return (
		<main className='container'>
			<Sidebar />
			<section className='content'>
				{!confirmed && (
					<>
						<h1 className='content__title'>{STEPS[step].title}</h1>
						<p className='content__description'>{STEPS[step].description}</p>
					</>
				)}
				{step == 'your-info' && <Step1 />}
				{step == 'select-plan' && <Step2 />}
				{step == 'add-ons' && <Step3 />}
				{step == 'summary' && <Step4 />}
				{!confirmed && <Navigation />}
			</section>
		</main>
	);
}

export default App;
