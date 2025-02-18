/**
 * Error message for empty required fields.
 */
export const EMPTY_ERROR = 'This field is required';

/**
 * Error message for invalid email format.
 */
export const EMAIL_ERROR = 'Invalid email';

/**
 * Error message for invalid phone number format.
 */
export const PHONE_ERROR = 'Invalid phone';

/**
 * Validates that the name is not empty.
 * @param name - The name to validate.
 * @returns An error message if the name is empty, otherwise an empty string.
 */
export const validateName = (name: string) => (name.trim() === '' ? EMPTY_ERROR : '');

/**
 * Validates the format of an email address.
 * @param email - The email address to validate.
 * @returns An error message if the field is empty or the format is invalid, otherwise an empty string.
 */
export const validateEmail = (email: string) =>
	email.trim() === ''
		? EMPTY_ERROR
		: !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)
		? EMAIL_ERROR
		: '';

/**
 * Validates the format of a phone number.
 * Allows spaces and the "+" sign.
 * @param phone - The phone number to validate.
 * @returns An error message if the field is empty or the format is invalid, otherwise an empty string.
 */
export const validatePhone = (phone: string) =>
	phone.trim() === '' ? EMPTY_ERROR : !/^\+?\d[\d\s]*$/.test(phone) ? PHONE_ERROR : '';
