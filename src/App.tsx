import {useState} from 'react';
import {STEPS} from './constants/steps';
import './styles/index.scss';

// Components
import Sidebar from './components/Sidebar/Sidebar';
import Step1 from './components/Step1/Step1';
import Step2 from './components/Step2/Step2';
import Step3 from './components/Step3/Step3';
import Step4 from './components/Step4/Step4';

function App() {
	const [step, setStep] = useState<Step>(4);

	return (
		<main className='container'>
			<Sidebar />
			<section className='content'>
				<h1 className='content__title'>{STEPS[step - 1].title}</h1>
				<p className='content__description'>{STEPS[step - 1].description}</p>
				{step == 1 && <Step1 />}
				{step == 2 && <Step2 />}
				{step == 3 && <Step3 />}
				{step == 4 && <Step4 />}
				<div className='content__navigation'>
					<button className='go-back'>Go Back</button>
					<button className='next-step'>Next Step</button>
				</div>
			</section>
		</main>
	);
}

export default App;
