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
		<fieldset className='your-info'>
			<div className='your-info__field'>
				<div className='label-and-error'>
					<label htmlFor='name' className='your-info__label'>
						Name
					</label>
					{nameError && (
						<span id='name-error' className='your-info__error'>
							{nameError}
						</span>
					)}
				</div>
				<input
					type='text'
					id='name'
					value={name}
					onChange={(e) => updateName(e.target.value)}
					className={`your-info__input ${nameError ? 'your-info__input--empty' : ''}`}
					placeholder='e.g. Stephen King'
					aria-invalid={!!nameError}
					aria-describedby={nameError ? 'name-error' : undefined}
					autoComplete='name'
				/>
			</div>
			<div className='your-info__field'>
				<div className='label-and-error'>
					<label htmlFor='email' className='your-info__label'>
						Email Address
					</label>
					{emailError && (
						<span id='email-error' className='your-info__error'>
							{emailError}
						</span>
					)}
				</div>
				<input
					type='email'
					id='email'
					value={email}
					onChange={(e) => updateEmail(e.target.value)}
					className={`your-info__input ${emailError ? 'your-info__input--empty' : ''}`}
					placeholder='e.g. stephenking@lorem.com'
					aria-invalid={!!emailError}
					aria-describedby={emailError ? 'email-error' : undefined}
					autoComplete='email'
				/>
			</div>
			<div className='your-info__field'>
				<div className='label-and-error'>
					<label htmlFor='phone' className='your-info__label'>
						Phone Number
					</label>
					{phoneError && (
						<span id='phone-error' className='your-info__error'>
							{phoneError}
						</span>
					)}
				</div>
				<input
					type='tel'
					id='phone'
					value={phone}
					onChange={(e) => updatePhone(e.target.value)}
					className={`your-info__input ${phoneError ? 'your-info__input--empty' : ''}`}
					placeholder='e.g. +1 234 567 890'
					aria-invalid={!!phoneError}
					aria-describedby={phoneError ? 'phone-error' : undefined}
					autoComplete='tel'
				/>
			</div>
		</fieldset>
	);
}
