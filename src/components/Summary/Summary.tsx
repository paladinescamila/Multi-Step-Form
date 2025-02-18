import {useMemo} from 'react';
import {getSummary} from '../../utils/getSummary';
import {useSummaryStore} from '../../store/useFormStore';
import './Summary.scss';

// Assets
import Confirmed from '../../assets/confirmed.svg';

export default function Summary() {
	const {plan, frecuency, addOns, confirmed, goBackToPlan} = useSummaryStore();
	const summary = useMemo(() => getSummary(plan, frecuency, addOns), [plan, frecuency, addOns]);

	if (confirmed) {
		return (
			<section className='confirmed' aria-labelledby='confirmed-title'>
				<img src={Confirmed} alt='Subscription confirmed' className='confirmed__icon' />
				<h1 id='confirmed-title' className='confirmed__title'>
					Thank you!
				</h1>
				<p className='confirmed__description'>
					Thanks for confirming your subscription! We hope you have fun using our
					platform. If you ever need support, please feel free to email us at
					<a href='mailto:support@loremgaming.com'> support@loremgaming.com</a>.
				</p>
			</section>
		);
	}

	return (
		<section className='summary' aria-labelledby='summary-title'>
			<div className='summary__details'>
				<div className='summary-plan'>
					<p className='summary-plan__name'>
						<span>{summary.plan}</span>
						<button type='button' onClick={goBackToPlan}>
							Change
						</button>
					</p>
					<p className='summary-plan__price'>{summary.price}</p>
				</div>

				{summary.addOns.length > 0 && (
					<ul className='summary-add-ons'>
						{summary.addOns.map(({name, price}) => (
							<li key={`summary-add-on-${name}`} className='summary-add-on'>
								<p className='summary-add-on__name'>{name}</p>
								<p className='summary-add-on__price'>+{price}</p>
							</li>
						))}
					</ul>
				)}
			</div>
			<div className='summary__total'>
				<p className='summary__total-label'>{summary.total.name}</p>
				<p className='summary__total-price'>+{summary.total.price}</p>
			</div>
		</section>
	);
}
