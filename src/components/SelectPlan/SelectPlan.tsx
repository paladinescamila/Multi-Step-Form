import {PLANS_LIST} from '../../constants/plans';
import {usePlanStore} from '../../store/useFormStore';
import './SelectPlan.scss';

export default function SelectPlan() {
	const {plan, frecuency, updatePlan, updateFrecuency} = usePlanStore();

	return (
		<div className='select-plan'>
			<ul className='select-plan__plans'>
				{PLANS_LIST.map(({id, name, price, icon}) => (
					<li
						key={name}
						className={`plan-card ${plan === id ? 'plan-card--active' : ''}`}
						onClick={() => updatePlan(id)}>
						<img src={icon} alt={name} className='plan-card__icon' />
						<p className='plan-card__name'>{name}</p>
						<p className='plan-card__price'>
							${price[frecuency]}/{frecuency === 'monthly' ? 'mo' : 'yr'}
						</p>
						{frecuency === 'yearly' && <p className='plan-card__free'>2 months free</p>}
					</li>
				))}
			</ul>
			<button
				className={`select-plan__frecuency select-plan__frecuency--${frecuency}`}
				onClick={() => updateFrecuency(frecuency === 'monthly' ? 'yearly' : 'monthly')}>
				<p className='frecuency-monthly'>Monthly</p>
				<div className='switch' />
				<p className='frecuency-yearly'>Yearly</p>
			</button>
		</div>
	);
}
