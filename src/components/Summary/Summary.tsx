import {useMemo} from 'react';
import {getSummary} from '../../utils/getSummary';
import {useSummaryStore} from '../../store/useFormStore';
import './Summary.scss';

// Assets
import Confirmed from '../../assets/confirmed.svg';

export default function Summary() {
	// const {planName, planPrice, frecuencyName, frecuencyText, addOnsData, total} = useGetSummary();
	const {plan, frecuency, addOns, confirmed} = useSummaryStore();

	const summary = useMemo(() => getSummary(plan, frecuency, addOns), [plan, frecuency, addOns]);

	if (confirmed) {
		return (
			<div className='confirmed'>
				<img src={Confirmed} alt='Confirmed' className='confirmed__icon' />
				<h1 className='confirmed__title'>Thank you!</h1>
				<p className='confirmed__description'>
					Thanks for confirming your subscription! We hope you have fun using our
					platform. If you ever need support, please feel free to email us at
					support@loremgaming.com.
				</p>
			</div>
		);
	}

	return (
		<div className='summary'>
			<div className='summary__details'>
				<div className='summary-plan'>
					<p className='summary-plan__name'>
						<span>{summary.plan}</span>
						<span>Change</span>
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
				<p>{summary.total.name}</p>
				<p>+{summary.total.price}</p>
			</div>
		</div>
	);
}
