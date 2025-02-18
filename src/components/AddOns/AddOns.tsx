import {ADD_ONS_LIST} from '../../constants/add-ons';
import {useAddOnsStore} from '../../store/useFormStore';
import './AddOns.scss';

// Assets
import Checkmark from '../../assets/checkmark.svg';

export default function AddOns() {
	const {frecuency, addOns, updateAddOn} = useAddOnsStore();

	return (
		<fieldset className='add-ons'>
			{ADD_ONS_LIST.map(({id, name, description, price}) => (
				<label
					key={id}
					className={`add-on-card ${addOns[id] ? 'add-on-card--checked' : ''}`}>
					<input
						type='checkbox'
						id={id}
						checked={addOns[id]}
						onChange={() => updateAddOn(id)}
						className='hidden'
					/>

					<div className='add-on-card__checkmark' aria-hidden='true'>
						{addOns[id] && <img src={Checkmark} alt={`Selected add-on: ${name}`} />}
					</div>

					<p className='add-on-card__name'>{name}</p>
					<p className='add-on-card__description'>{description}</p>

					<p className='add-on-card__price'>
						+${price[frecuency]}/{frecuency === 'monthly' ? 'mo' : 'yr'}
					</p>
				</label>
			))}
		</fieldset>
	);
}
