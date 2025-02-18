import {PLANS_LIST} from '../../constants/plans';
import {usePlanStore} from '../../store/useFormStore';
import './SelectPlan.scss';

export default function SelectPlan() {
	const {plan, frecuency, updatePlan, updateFrecuency} = usePlanStore();

	return (
		<div className='select-plan'>
			<fieldset className='select-plan__fieldset'>
				<ul className='select-plan__plans'>
					{PLANS_LIST.map(({id, name, price, icon}) => (
						<li key={id}>
							<label
								className={`plan-card ${plan === id ? 'plan-card--active' : ''}`}>
								<input
									type='radio'
									name='plan'
									value={id}
									checked={plan === id}
									onChange={() => updatePlan(id)}
									className='hidden'
								/>
								<img
									src={icon}
									alt={`${name} plan icon`}
									className='plan-card__icon'
								/>
								<p className='plan-card__name'>{name}</p>
								<p className='plan-card__price'>
									${price[frecuency]}/{frecuency === 'monthly' ? 'mo' : 'yr'}
								</p>
								{frecuency === 'yearly' && (
									<p className='plan-card__free'>2 months free</p>
								)}
							</label>
						</li>
					))}
				</ul>
			</fieldset>
			<label className={`select-plan__frecuency select-plan__frecuency--${frecuency}`}>
				<input
					type='checkbox'
					checked={frecuency === 'yearly'}
					onChange={() => updateFrecuency(frecuency === 'monthly' ? 'yearly' : 'monthly')}
					className='hidden'
				/>
				<p className='frecuency-monthly'>Monthly</p>
				<div className='switch' />
				<p className='frecuency-yearly'>Yearly</p>
			</label>
		</div>
	);
}
