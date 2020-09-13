// Connect to weather API
$(document).ready(function () {
    $("#searchCity").on("click", function(event){
        event.preventDefault();
        console.log("CLICK")
        var city = $("#userCity").val();
        var apiKey = "6ce841efb6b07e3f98309460d1f79c3c";
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey,
            method: "GET"
            }).then(function (weatherData) {
            var lat = weatherData.coord.lat;
            console.log(lat);
            var lon = weatherData.coord.lon;
            console.log(lon);

            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly&appid=" + apiKey,
                method: "GET"
                }).then(function (response) {
                console.log(response)
                var currentDate = response.current.dt;
                console.log(currentDate);
                var todaysDate = "";
                var humidity = response.current.humidity;
                console.log(humidity);
                var windSpeed = response.current.wind_speed;
                console.log(windSpeed)
                var uvIndex = response.current.uvi;
                console.log(uvIndex)
                var icon = response.current.weather[0].icon;
                console.log(icon)
                var temp = response.current.temp
                console.log(temp)


                function convert() {

                // Unixtimestamp https://makitweb.com/convert-unix-timestamp-to-date-time-with-javascript/
                var unixtimestamp = currentDate
                // Months array
                var months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                // Convert timestamp to milliseconds
                var date = new Date(unixtimestamp * 1000);
                // Year
                var year = date.getFullYear();
                // Month
                var month = months_arr[date.getMonth()];
                // Day
                var day = date.getDate();
                // Display date time in MM-dd-yyyy h:m:s format
                var todaysDate = "(" + month + '/' + day + '/' + year + ")";
                console.log(todaysDate);

                }
                convert();
                console.log(todaysDate);
                var tempF = ((temp - 273.15) * 1.80 + 32).toFixed(2);

                $("#cityChoice").text(city)
                $("#date").text(todaysDate)
                $("#icon").text(icon)
                $("#temperature").text("Current Temperature: " + tempF)
                $("#humidity").text("Humidity: " + humidity + "%")
                $("#windSpeed").text("Wind Speed: " + windSpeed + "MPH")
                $("#uvIndex").text("UV Index " + uvIndex)

                

            });
        });
    });
});

               