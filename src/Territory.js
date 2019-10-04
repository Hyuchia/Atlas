export default class Territory {

	constructor ({ name, abbreviation, type='', capital='', cities=[] }) {
		this.name = name;
		this.abbreviation = abbreviation;
		this.type = type;
		this.capital = capital;
		this.cities = cities;
	}

	toString () {
		return this.name;
	}
}