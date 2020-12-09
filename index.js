const request = require('request');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { argv } = require('yargs');

const getCity = (val) => val ?? 'dallas';
const city = getCity(argv.c);

const getUnits = (val) => (['i', 'imp', 'imperial'].includes(val) ? 'imperial' : 'metric');
const units = getUnits(argv.u);

const apiKey = 'eb5d55680768748d1825439ac8708506';

const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

const today = () => {
  const date = new Date();
  return `${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}`;
};

request(url, (err, response, body) => {
  if (err) {
    console.log('error:', err);
  } else {
    const weather = JSON.parse(body);
    const path = `./files/${weather.name} ${today()} weather.csv`;
    const csvWriter = createCsvWriter({
      path,
      header: [
        { id: 'm', title: 'Metric' },
        { id: 'v', title: 'Value' },
      ],
    });

    csvWriter.writeRecords([
      { m: 'City', v: weather.name },
      { m: 'Temperature', v: weather.main.temp },
      { m: 'Units', v: units === 'imperial' ? 'K' : 'C' },
      { m: 'Precipitation', v: weather.weather[0].main.toLowerCase().includes('rain') ? 'true' : 'false' },
    ]).then(() => {
      console.log(`Please go to ${path}`);
    });
  }
});
