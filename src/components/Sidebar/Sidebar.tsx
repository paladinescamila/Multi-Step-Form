import {STEPS_LIST} from '../../constants/steps';
import {useStepsStore} from '../../store/useFormStore';
import './Sidebar.scss';

// Assets
import DesktopBG from './assets/desktop-bg.svg';
// import MobileBG from './assets/mobile-bg.svg'

export default function Sidebar() {
	const {step} = useStepsStore();

	return (
		<ul className='sidebar'>
			<img src={DesktopBG} alt='Sidebar background' className='sidebar__background' />
			{STEPS_LIST.map(({id, name}, index) => (
				<li
					key={`step-${id}`}
					className={`sidebar-step ${step === id ? 'sidebar-step--active' : ''}`}>
					<p className='sidebar-step__number'>{index + 1}</p>
					<p className='sidebar-step__step'>Step {index + 1}</p>
					<p className='sidebar-step__name'>{name}</p>
				</li>
			))}
		</ul>
	);
}
