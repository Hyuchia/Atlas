# Atlas

Atlas is a simple library containing data about countries and their territories. The term territory here refers to any place that holds an equivalence to a state in their respective country, each territory can have additional information of itself, including the list of cities within it.

The data provided by this library has been scraped from different sites and is provided with no guarantees of it being accurate or complete.

Country territories will be added as they are required (gathering all data takes quite some time), but any contributions are welcome!

## Data Sources
Countries: https://github.com/mledoze/countries

## Countries

### United States
The data for the US includes data on 50 States, 1 Federal District and 5 special areas.

For simplicity purposes, cities, towns and villages that are officially incorporated into a state regardless of its population have have been included as cities.

CDPs have been included in Hawaii's data and Townships were not included in Michigan's data.

#### Data Sources
* Wikipedia's List of municipalities for each state
* [Wikipedia's US Time](https://en.wikipedia.org/wiki/Time_in_the_United_States)

## Documentation

### Installation
Atlas is provided as an UMD module that can be installed by adding the files manually to your project or via a package manager.

**Yarn**
```
yarn add @blac-sheep/atlas
```

**NPM**
```
npm install @blac-sheep/atlas
```

**Adding it manually**
```html
<script src="atlas.min.js"></script>
```

### Usage

**NodeJS**
```javascript
const atlas = require ('@blac-sheep/atlas');
```

**ES6**
```javascript
import Atlas as atlas from '@blac-sheep/atlas';
```

**Browser**
```javascript
const atlas = Atlas.default;
```

### Classes

#### Atlas
**Static Properties**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `countries` | `Array<Country>` | List of countries available on the Atlas |

#### Country
**Instance Properties**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `name` | `Array<Country>` | Country's name commonly used |
| `official_name` | `string` | Country's official name |
| `capital` | `string` | Country's capital |
| `flag` | `string` | Country's flag unicode (emoji) |
| `abbreviation` | `string` | Country's 2 letter code |
| `territories` | `Array<Territory>` | List of territories belonging to the country |


#### Territory
**Instance Properties**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `name` | `string` | Territory's name |
| `abbreviation` | `string` | Territory's abbreviation |
| `type` | `string` | Territory's legal status within the country (State, Unincorporated, Unorganized, etc.) |
| `capital` | `string` | Territory's capital city (If applies) |
| `cities`  | `Array<string>` | List of cities (officially incorporated places) in the territory |


## License
Atlas is released under the [GPLv3 license](LICENSE.md).