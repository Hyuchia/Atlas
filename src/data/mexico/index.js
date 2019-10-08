import Country from '../../Country';

import territories from './territories';

/**
 * Create the Country object that will be exported
 *
 * @type {Country}
 */
const mexico = new Country ({
	name: 'Mexico',
	official_name: 'United Mexican States',
	capital: 'Mexico City',
	abbreviation: 'MX',
	flag: '🇲🇽',
	territories: territories
});

export default mexico;