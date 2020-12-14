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
	territories: territories,
	timezones: [
		{
			name: 'Alaska Time Zone',
			abbreviation: 'AKST',
			iana: 'America/Anchorage',
			utc: -9
		},
		{
			name: 'Central Time Zone',
			abbreviation: 'CST',
			iana: 'America/Chicago',
			utc: -6
		},
		{
			name: 'Eastern Time Zone',
			abbreviation: 'EST',
			iana: 'America/New_York',
			utc: -5
		},
		{
			name: 'Hawaii Time Zone',
			abbreviation: 'HST',
			iana: 'America/Honolulu',
			utc: -10
		},
		{
			name: 'Mountain Time Zone',
			abbreviation: 'MST',
			iana: 'America/Denver',
			utc: -7
		},
		{
			name: 'Pacific Time Zone',
			abbreviation: 'PST',
			iana: 'America/Los_Angeles',
			utc: -8
		}
	]
});

export default united_states;