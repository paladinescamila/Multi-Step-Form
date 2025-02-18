import {ADD_ONS_LIST} from '../../constants/add-ons';
import {useAddOnsStore} from '../../store/useFormStore';
import './AddOns.scss';

// Assets
import Checkmark from '../../assets/checkmark.svg';

export default function AddOns() {
	const {frecuency, addOns, updateAddOn} = useAddOnsStore();

	return (
		<form className='add-ons'>
			{ADD_ONS_LIST.map(({id, name, description, price}) => (
				<label
					htmlFor={id}
					key={id}
					className={`add-one-card ${addOns[id] ? 'add-one-card--checked' : ''}`}>
					<input
						type='checkbox'
						id={id}
						checked={addOns[id]}
						style={{display: 'none'}}
						onChange={() => updateAddOn(id)}
					/>
					<div className='add-one-card__checkmark'>
						{addOns[id] && <img src={Checkmark} alt={`checkmar-${id}`} />}
					</div>
					<p className='add-one-card__name'>{name}</p>
					<p className='add-one-card__description'>{description}</p>
					<p className='add-one-card__price'>
						+${price['monthly']}/{frecuency === 'monthly' ? 'mo' : 'yr'}
					</p>
				</label>
			))}
		</form>
	);
}
