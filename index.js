class Country {
  constructor(name, population, capital, language, currency) {
    this.name = name;
    this.population = population;
    this.capital = capital;
    this.language = language;
    this.currency = currency;
  }
}

class World {
  constructor(name, planets, population, temperature, wind, climate, weather, countries, day, seasons) {
    this.name = name;
    this.planets = planets;
    this.population = population;
    this.temperature = temperature;
    this.wind = wind;
    this.climate = climate;
    this.weather = weather;
    this.countries = countries.map(countryData => new Country(...countryData));
    this.day = day;
    this.seasons = seasons;
  }

  nextSecond() {
    // Emulate changes for the next second
    console.log("Time is passing in " + this.name + ", " + this.planets);
    this.nextMinute();
  }

  nextMinute() {
    // Emulate changes for the next minute
    console.log("One minute has passed in " + this.name);
    this.nextHour();
  }

  nextHour() {
    // Emulate changes for the next hour
    console.log("One hour has passed in " + this.name);
    this.nextDay();
  }

  nextDay() {
    // Emulate changes for the next day
    console.log("One day has passed in " + this.name);
  }
}

// example:
const countriesData = [
  ["Nigeria", 200000000, "Abuja", "English", "NGN"],
  ["America", 20000000, "Washington", "English", "USD"],
  // Add more countries as needed
];

const earth = new World("Earth", "Solar System", 7700000000, 15, 10, "Temperate", "Clear", countriesData, "24 hours", ["Spring", "Summer", "Autumn", "Winter"]);
earth.nextSecond();
