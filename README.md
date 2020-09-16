Weather App
Introduction:

The weather dashboard is made for travelers and anyone wanting to know what the daily weather is for any location around the world. Users can write in whatever city, State or Country they want and receive a full forecast back with the daily temperature, humidity, wind speed and UV index. They can also see a five day forecast displayed below the current forecast.

To use the weather app users can follow the link here /https://maxgoldstein93.github.io/WeatherDashboard/ or make a clone from my repo on my github account maxgoldstein93.

While creating this application I faced many new challenges. The first was how to create the right format in html and css. To do this I created an aside with a container and used css to move the object where I wanted it to be placed and the width and height to take up the entire screen. The current weather is displayed to the right of the aside also using a container and relative position. And the same goes for the five day forecast using relative position for the container.

Next was taking user inputs and pulling information from an API using an AJAX call. The challenge here was not getting the information but how to display it. I accomplished this by creating divs with id’s in html and used .text(); to display the information. And to learn more about loops I wanted to use a loop to get all the five day forecast information and then placed the information in cards dynamically using Jquery.

Other challenges I faced were scope and creating functions inside of functions. I learned that the ajax function can be closed as soon as the call is made then I can use it again such as in the past search history. Overall, I learned a lot while making the dashboard and like using API’s.. I used some outside code from :

“Convert Unix Timestamp to Date Time with JavaScript.” Makitweb, 18 Feb. 2020, makitweb.com/convert-unix-timestamp-to-date-time-with-javascript/. 

To convert times to a readable date.

![Weather Dashboard](https://user-images.githubusercontent.com/69087369/93281182-9203c900-f799-11ea-8db2-1e5dde7a0c44.gif)


