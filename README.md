# Weather-Dashboard
Week 8 Challenge

3 API requests.
The first is to get the lat and long, the second is to take information from that API request and insert it into a second!
So imagine the first instruction was simply to put London into the query and then to extract the latitude and longitude data. You could probably manage that. Just.
The second query would need to be nested within the function that contains the lat and long data so that those pieces of data are accessible.
The second query would need to have some sort of concatenation to include the lat and long information.
Michal pointed out that we would actually need a third query, as the second one would be for the one day forecast, and the third one would be for the 5 day forecast.

If you need a break, read the blog on API keys. Anthony sent this.
As you get to each new section, break it down further.
Bear in mind that if you inspect the html, it's not as empty as it looks, I think the structure may possibly be there already. Use this to your advantage.


FREQUENT TESTS, FREQUENT COMMITS!
Work out a way of capturing the user input from the input box, using things like .val().trim() (check that, you didn't look it up!)
Using example code from previous API exercises, create the correct URL for an API request such that when you type in London, you will get something returned that enables you (actually you to start with, the computer later!) to look up its lat and long.
Using Ajax, and the correct first URL for API call 1, set up a function that will execute the call and return something.
Interrogate what is returned, see if you can find the lat and long and console log them.
Save the lat and longs as variables.
Using those variables, and concatenation, create your URL that will use these to allow the user to only enter the city name and the code does the work for them.
Run the API call for one day data, see what that returns, just simple return for now, you can make it do more stuff later.
Interrogate what is returned, look for where to find the data we need, which is the city name, the date, an icon representation of weather conditions (Anthony is sending a link in Slack which will help us work out where to find them from the data response), the temperature, the humidity, the wind speed.
(You'll need to break this down further, but...) Do what we've done many times this week and work out how best to display this data, e.g. create a div, add text content, append it somewhere. You could test this knowing you have to change it later into a proper display, or you could try to make it look like the example as you go along. Do whatever works best and is testable.
Work out a way of also taking the userinput and it becoming a button below. We did something VERY similar earlier in the week with entering the name of a film into an input box then it became a button we could click on later.
It will need to be a clickable button but this may not necessarily be the best point in the task to tackle that.
Work out a way of storing those buttons (previous searches) into local storage. You managed this really successfully in Week 7 challenge so go there as a starting point.
Work out a way that clicking on those buttons will run the function again.
Do a little more work on the main function, so that when called it clears what was there and updates with the new search / city / userinput.
Within the same original click event, create another function that will make an API call to retrieve 5 days of weather data.
Break down the function for 5 days of data as you did for the one day of data:
See what that returns, just simple return for now, you can make it do more stuff later.
Interrogate what is returned, look for where to find the data we need, which is the date, an icon, the temperature and the humidity.
(You'll need to break this down further, but...) Do what we've done many times this week and work out how best to display this data for each of the next 4 or 5 days (4? - check the picture of what it's supposed to end up looking like), e.g. create a div, add text content, append it somewhere.
 
Should you create more empty html first or would that be added in as you're going through JavaScript? Think about that before launching into anything.

MY NOTES FINISH HERE

Server APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities. 

The base URL for your API calls should look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`.

**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

## User Story

```text
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

* Create a weather dashboard with form inputs.
  * When a user searches for a city they are presented with current and future conditions for that city and that city is added to the search history
  * When a user views the current weather conditions for that city they are presented with:
    * The city name
    * The date
    * An icon representation of weather conditions
    * The temperature
    * The humidity
    * The wind speed
  * When a user view future weather conditions for that city they are presented with a 5-day forecast that displays:
    * The date
    * An icon representation of weather conditions
    * The temperature
    * The humidity
  * When a user click on a city in the search history they are again presented with current and future conditions for that city

## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for London.](./assets/10-server-side-apis-challenge-demo.png)

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses the OpenWeather API to retrieve weather data.

  * Uses `localStorage` to store persistent data.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a readme describing the project.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
