import {useGetSummary} from '../../utils/useGetSummary';
import {useSummaryStore} from '../../store/useFormStore';
import './Step4.scss';

// Assets
import Confirmed from '../../assets/confirmed.svg';

export default function Step4() {
	const {planName, planPrice, frecuencyName, frecuencyText, addOnsData, total} = useGetSummary();
	const {confirmed} = useSummaryStore();

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
		<div className='step-4'>
			<div className='step-4__summary'>
				<div className='summary-plan'>
					<p className='summary-plan__name'>
						<span>
							{planName} ({frecuencyName})
						</span>
						<span>Change</span>
					</p>
					<p className='summary-plan__price'>{planPrice}</p>
				</div>
				{addOnsData.length > 0 && (
					<ul className='summary-add-ons'>
						{addOnsData.map(({name, price}) => (
							<li key={`summary-add-on-${name}`} className='summary-add-on'>
								<p className='summary-add-on__name'>{name}</p>
								<p className='summary-add-on__price'>+{price}</p>
							</li>
						))}
					</ul>
				)}
			</div>
			<div className='step-4__total'>
				<p>Total (per {frecuencyText})</p>
				<p>+{total}</p>
			</div>
		</div>
	);
}
