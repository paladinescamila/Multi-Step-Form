import {useState} from 'react';
import {ADD_ONS} from '../../constants/add-ons';
import './Step3.scss';

// Assets
import Checkmark from '../../assets/checkmark.svg';

export default function Step3() {
	const [addOns, setAddOns] = useState<AddOn[]>([]);

	return (
		<form className='step-3'>
			{ADD_ONS.map(({id, title, description, price}) => (
				<label
					htmlFor={id}
					key={id}
					className={`add-one-card ${
						addOns.includes(id) ? 'add-one-card--checked' : ''
					}`}>
					<input
						type='checkbox'
						id={id}
						checked={addOns.includes(id)}
						style={{display: 'none'}}
						onChange={({target}) =>
							setAddOns(
								target.checked
									? [...addOns, id]
									: addOns.filter((addOn) => addOn !== id)
							)
						}
					/>
					<div className='add-one-card__checkmark'>
						{addOns.includes(id) && <img src={Checkmark} alt={`checkmar-${id}`} />}
					</div>
					<p className='add-one-card__title'>{title}</p>
					<p className='add-one-card__description'>{description}</p>
					<p className='add-one-card__price'>+${price['monthly']}/mo</p>
				</label>
			))}
		</form>
	);
}
