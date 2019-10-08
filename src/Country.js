import Territory from './Territory';

export default class Country {

	constructor ({ name, official_name = '', capital = '', flag = '', abbreviation = '', territories = [] }) {
		this.name = name;
		this.official_name = official_name;
		this.capital = capital;
		this.flag = flag;

		this.abbreviation = abbreviation;
		this.territories = territories;

	}

	addTerritory (...props) {
		const key = props.name.replace (' ', '_').toLowerCase ();
		this.territories[key] = new Territory (...props);
	}

	removeTerritory (name) {
		const key = name.replace (' ', '_').toLowerCase ();
		delete this.territories[key];
	}

	territory (name) {
		return this.territories.find (t => t.name.toLowerCase () === name.toLowerCase());
	}

	toString () {
		return this.name;
	}
}