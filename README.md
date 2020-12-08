# Single Weather CLI 

The porpouse of this project it's to get a csv file with today's weather in a specific city with the information from the public site [Open Weather Map](https://openweathermap.org/ "Open Weather Map's Homepage").

You can use it easy as call

`node index.js`

In the project folder with the optional params

    `-u` units (`-u imperial`, `-u imp`, `-u i`, imperial units for example, metric for default)
    `-c` city (`-c mexico`, `-c washington`, for example, dallas for default)


`node index.js -u i -c mexico`

Retrieving you in a `.csv` file in `files` folder with the name:

    `${cityThatYouRequested} ${currentDate} weather.csv`, 'Mexico 2020_12_8 weather.csv' for example.

With a content like:

    Metric	        Value
    City	        Mexico
    Temperature	    25
    Units	        C
    Precipitation   FALSE
