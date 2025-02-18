import {PLANS_LIST} from '../../constants/plans';
import {usePlanStore} from '../../store/useFormStore';
import './Step2.scss';

export default function Step2() {
	const {plan, frecuency, updatePlan, updateFrecuency} = usePlanStore();

	return (
		<div className='step-2'>
			<ul className='step-2__plans'>
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
				className={`step-2__frecuency step-2__frecuency--${frecuency}`}
				onClick={() => updateFrecuency(frecuency === 'monthly' ? 'yearly' : 'monthly')}>
				<p className='frecuency-monthly'>Monthly</p>
				<div className='switch' />
				<p className='frecuency-yearly'>Yearly</p>
			</button>
		</div>
	);
}
