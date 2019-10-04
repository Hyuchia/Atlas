import Country from '../../Country';

import territories from './territories';

/**
 * Create the Country object that will be exported
 *
 * @type {Country}
 */
const mexico = new Country ({
	name: 'Mexico',
	abbreviation: 'MX',
	territories: territories
});

export default mexico;