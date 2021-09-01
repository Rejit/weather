# Single Weather CLI 

![image](https://user-images.githubusercontent.com/12840963/131598430-6dc33dcd-8b98-4716-b3cd-fdf0aa122466.png)


The porpouse of this project it's to get a csv file with today's weather in a specific city with the information from the public site [Open Weather Map](https://openweathermap.org/ "Open Weather Map's Homepage").

You can use it easily! just type

`node index.js`

In the project folder with the optional params

    `-u` units (`-u imperial`, `-u imp`, `-u i`, imperial units for example, metric for default)
    `-c` city (`-c mexico`, `-c washington`, for example, dallas for default)


`node index.js -u i -c mexico`

This creates a `.csv` file in `files` directory with the name:

    `${cityThatYouRequested} ${currentDate} weather.csv`, 'Mexico 2020_12_8 weather.csv' for example.

Generates an output like this one:

    Metric	        Value
    City	        Mexico
    Temperature	    25
    Units	        C
    Precipitation   FALSE
