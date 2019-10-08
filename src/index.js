// Load babel Polyfill
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { countries } from './data';

class Atlas {

	/**
	 * List of countries on the Atlas
	 *
	 * @type Array<Country>
	 */
	static countries = countries;

	/**
	 * Get a country by its name
	 *
	 * @param {string} name - The name of the country you want to retrieve
	 *
	 * @returns {Country}
	 */
	static country (name) {
		return this.countries.find(c => c.name.toLowerCase() === name.toLowerCase());
	}

	/**
	 * Remove a country by its name
	 *
	 * @param {string} name - The name of the country you want to remove
	 *
	 * @returns {void}
	 */
	static removeCountry (name) {
		this.countries = this.countries.filter (c => c.name.toLowerCase() !== name.toLowerCase());
	}
}

export * from './Country';
export * from './Territory';

export default Atlas;