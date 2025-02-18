import {STEPS} from '../../constants/steps';
import './Sidebar.scss';

// Assets
import DesktopBG from './assets/desktop-bg.svg';
// import MobileBG from './assets/mobile-bg.svg'

export default function Sidebar() {
	const step: 1 | 2 | 3 | 4 = 1;

	return (
		<ul className='sidebar'>
			<img src={DesktopBG} alt='Sidebar background' className='sidebar__background' />
			{STEPS.map(({name}, index) => (
				<li
					key={`step-${index + 1}`}
					className={`sidebar-step ${step === index + 1 ? 'sidebar-step--active' : ''}`}>
					<p className='sidebar-step__number'>{index + 1}</p>
					<p className='sidebar-step__step'>Step {index + 1}</p>
					<p className='sidebar-step__name'>{name}</p>
				</li>
			))}
		</ul>
	);
}
