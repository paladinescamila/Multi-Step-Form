import {useInfoStore} from '../../store/useFormStore';
import './YourInfo.scss';

export default function YourInfo() {
	const {
		name,
		email,
		phone,
		nameError,
		emailError,
		phoneError,
		updateName,
		updateEmail,
		updatePhone,
	} = useInfoStore();

	return (
		<form className='your-info'>
			<label htmlFor='name' className='your-info__label'>
				Name
				<span className='required'>{nameError}</span>
			</label>
			<input
				type='text'
				id='name'
				value={name}
				onChange={(e) => updateName(e.target.value)}
				className={`your-info__input ${nameError ? 'your-info__input--empty' : ''}`}
				placeholder='e.g. Stephen King'
			/>
			<label htmlFor='email' className='your-info__label'>
				Email Address
				<span className='required'>{emailError}</span>
			</label>
			<input
				type='email'
				id='email'
				value={email}
				onChange={(e) => updateEmail(e.target.value)}
				className={`your-info__input ${emailError ? 'your-info__input--empty' : ''}`}
				placeholder='e.g. stephenking@lorem.com'
			/>
			<label htmlFor='phone' className='your-info__label'>
				Phone Number
				<span className='required'>{phoneError}</span>
			</label>
			<input
				type='text'
				id='phone'
				value={phone}
				onChange={(e) => updatePhone(e.target.value)}
				className={`your-info__input ${phoneError ? 'your-info__input--empty' : ''}`}
				placeholder='e.g. +1 234 567 890'
			/>
		</form>
	);
}
