import {useState, useEffect, useMemo} from 'react';

/**
 * Hook to track the window size and determine if the device is mobile.
 *
 * @returns {number} windowWidth - Current window width.
 * @returns {boolean} isMobile - Indicates whether the window width qualifies as a mobile device (≤ 800px).
 */
export const useResponsive = () => {
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

	const isMobile = useMemo(() => windowWidth <= 800, [windowWidth]);

	useEffect(() => {
		const onResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	return {windowWidth, isMobile};
};
