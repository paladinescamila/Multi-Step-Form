import './Step1.scss';

export default function Step1() {
	return (
		<form className='step-1'>
			<label htmlFor='name' className='step-1__label'>
				Name
			</label>
			<input
				type='text'
				id='name'
				className='step-1__input'
				placeholder='e.g. Stephen King'
			/>
			<label htmlFor='email' className='step-1__label'>
				Email Address
			</label>
			<input
				type='text'
				id='email'
				className='step-1__input'
				placeholder='e.g. stephenking@lorem.com'
			/>
			<label htmlFor='phone' className='step-1__label'>
				Phone Number
			</label>
			<input
				type='text'
				id='phone'
				className='step-1__input'
				placeholder='e.g. +1 234 567 890'
			/>
		</form>
	);
}
