import {STEPS} from './constants/steps';
import {useStepsStore} from './store/useFormStore';
import './styles/index.scss';

// Components
import Sidebar from './components/Sidebar/Sidebar';
import YourInfo from './components/YourInfo/YourInfo';
import SelectPlan from './components/SelectPlan/SelectPlan';
import AddOns from './components/AddOns/AddOns';
import Summary from './components/Summary/Summary';
import Navigation from './components/Navigation/Navigation';

function App() {
	const {step, confirmed} = useStepsStore();

	return (
		<main className='container'>
			<Sidebar />
			<section className='content'>
				{!confirmed && (
					<header>
						<h1 className='content__title'>{STEPS[step].title}</h1>
						<p className='content__description'>{STEPS[step].description}</p>
					</header>
				)}
				<form>
					{step == 'your-info' && <YourInfo />}
					{step == 'select-plan' && <SelectPlan />}
					{step == 'add-ons' && <AddOns />}
					{step == 'summary' && <Summary />}
				</form>
				{!confirmed && <Navigation />}
			</section>
		</main>
	);
}

export default App;
