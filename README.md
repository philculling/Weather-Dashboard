# Weather-Dashboard
Week 8 Challenge

If you need a break, read the blog on API keys. Anthony sent this and it's copied below.
As you get to each new section, break it down further.

Things to ask tutor:
When I want to clear, it's clearing #today but not #forecast and I don't understand why as they look the same.
Why is my styling not completely working? Although I used a workaround.

FREQUENT TESTS, FREQUENT COMMITS!
Work out a way that clicking on the history buttons will run the function again.

Add an event listener to the buttons (that are not yet created).
Need an event listener on each - sort of. The way Matthew showed me in last week's OR the way Laura showed the group.
Using this.
Test and commit.
Make that event listener trigger a NEW function (that is almost identical to the first one).
Create a simple function, test and commit.
Copy over the first function, but give it a different name.
Change where it gets its information from; that is previously it was taking it from user input, now it's taking it from the button clicked. Otherwise I think it will be the same.

Check the API documentation in case Michal is right and it needs a separate query for 1 day and forecast. It shouldn't be too hard to change if it does.

Work out a way of storing those buttons (previous searches) into local storage. You managed this really successfully in Week 7 challenge so go there as a starting point.

Screenshot.
Save screenshot to right place in assets.
README, copy and edit from previous.
README add screenshot.

Styling:
Look up how to add a border, as you may have forgotten!
Give the top div a border.
Make the search area more clearly a button.

 
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
