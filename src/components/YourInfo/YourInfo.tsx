import {useInfoStore} from '../../store/useFormStore';
import './YourInfo.scss';

export default function YourInfo() {
	const {name, email, phone, updateName, updateEmail, updatePhone} = useInfoStore();

	return (
		<form className='your-info'>
			<label htmlFor='name' className='your-info__label'>
				Name
			</label>
			<input
				type='text'
				id='name'
				value={name}
				onChange={(e) => updateName(e.target.value)}
				className='your-info__input'
				placeholder='e.g. Stephen King'
			/>
			<label htmlFor='email' className='your-info__label'>
				Email Address
			</label>
			<input
				type='text'
				id='email'
				value={email}
				onChange={(e) => updateEmail(e.target.value)}
				className='your-info__input'
				placeholder='e.g. stephenking@lorem.com'
			/>
			<label htmlFor='phone' className='your-info__label'>
				Phone Number
			</label>
			<input
				type='text'
				id='phone'
				value={phone}
				onChange={(e) => updatePhone(e.target.value)}
				className='your-info__input'
				placeholder='e.g. +1 234 567 890'
			/>
		</form>
	);
}
