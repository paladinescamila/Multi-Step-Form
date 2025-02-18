import {useState} from 'react';
import './Step4.scss';

// Assets
import Confirmed from '../../assets/confirmed.svg';

export default function Step4() {
	const [confirmed, setConfirmed] = useState<boolean>(true);

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
					<p className='summary-plan__title'>
						<span>Arcade (Monthly)</span>
						<span>Change</span>
					</p>
					<p className='summary-plan__price'>$9/mo</p>
				</div>
				<ul className='summary-add-ons'>
					<li className='summary-add-on'>
						<p className='summary-add-on__title'>Online service</p>
						<p className='summary-add-on__price'>+$1/mo</p>
					</li>
					<li className='summary-add-on'>
						<p className='summary-add-on__title'>Larger storage</p>
						<p className='summary-add-on__price'>+$2/mo</p>
					</li>
				</ul>
			</div>
			<div className='step-4__total'>
				<p>Total (per month)</p>
				<p>+$12/mo</p>
			</div>
		</div>
	);
}
