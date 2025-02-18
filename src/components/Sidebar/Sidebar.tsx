import {STEPS_LIST} from '../../constants/steps';
import {useStepsStore} from '../../store/useFormStore';
import {useResponsive} from '../../utils/useResponsive';
import './Sidebar.scss';

// Assets
import DesktopBG from './assets/desktop-bg.svg';
import MobileBG from './assets/mobile-bg.svg';

export default function Sidebar() {
	const {step} = useStepsStore();
	const {isMobile} = useResponsive();

	return (
		<nav className='sidebar' aria-label='Steps navigation'>
			<img
				src={isMobile ? MobileBG : DesktopBG}
				alt='Sidebar decorative background'
				className='sidebar__background'
				aria-hidden='true'
			/>
			<ol className='sidebar__steps'>
				{STEPS_LIST.map(({id, name}, index) => (
					<li
						key={`step-${id}`}
						className={`sidebar-step ${step === id ? 'sidebar-step--active' : ''}`}
						aria-current={step === id ? 'step' : undefined}>
						<p className='sidebar-step__number'>{index + 1}</p>
						<p className='sidebar-step__step'>Step {index + 1}</p>
						<p className='sidebar-step__name'>{name}</p>
					</li>
				))}
			</ol>
		</nav>
	);
}
