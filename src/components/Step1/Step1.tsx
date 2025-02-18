import {useInfoStore} from '../../store/useFormStore';
import './Step1.scss';

export default function Step1() {
	const {name, email, phone, updateName, updateEmail, updatePhone} = useInfoStore();

	return (
		<form className='step-1'>
			<label htmlFor='name' className='step-1__label'>
				Name
			</label>
			<input
				type='text'
				id='name'
				value={name}
				onChange={(e) => updateName(e.target.value)}
				className='step-1__input'
				placeholder='e.g. Stephen King'
			/>
			<label htmlFor='email' className='step-1__label'>
				Email Address
			</label>
			<input
				type='text'
				id='email'
				value={email}
				onChange={(e) => updateEmail(e.target.value)}
				className='step-1__input'
				placeholder='e.g. stephenking@lorem.com'
			/>
			<label htmlFor='phone' className='step-1__label'>
				Phone Number
			</label>
			<input
				type='text'
				id='phone'
				value={phone}
				onChange={(e) => updatePhone(e.target.value)}
				className='step-1__input'
				placeholder='e.g. +1 234 567 890'
			/>
		</form>
	);
}
