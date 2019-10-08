import Country from '../../Country';

import territories from './territories';

/**
 * Create the Country object that will be exported
 *
 * @type {Country}
 */
const united_states = new Country ({
	name: 'United States',
	official_name: 'United States of America',
	capital: 'Washington D.C.',
	abbreviation: 'US',
	flag: '🇺🇸',
	territories: territories
});

export default united_states;