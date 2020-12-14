export default class Territory {

	constructor ({ name, abbreviation, type='', capital='', cities=[], timezones = [] }) {
		this.name = name;
		this.abbreviation = abbreviation;
		this.type = type;
		this.capital = capital;
		this.cities = cities;
		this.timezones = timezones;
	}

	toString () {
		return this.name;
	}
}