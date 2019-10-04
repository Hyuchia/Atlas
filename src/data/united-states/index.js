import Country from '../../Country';

import territories from './territories';

/**
 * Create the Country object that will be exported
 *
 * @type {Country}
 */
const united_states = new Country ({
	name: 'United States',
	abbreviation: 'US',
	territories: territories
});

export default united_states;