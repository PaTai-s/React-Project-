# PaTai's CookBook 

Created by **Patrick Dacius**, and **Taifinkaba Chowdhury**.

## 🚀 Mission statement

Our application, PaTai's CookBook  is designed for busy professionals and young families seeking quick, delicious, and nutritious meals. It allows users to focus on easy-to-follow recipes and caters to those who want to enjoy flavorful dishes without spending hours in the kitchen.

## API & React Router

This application will use the **Recipe** API. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

- Link to API documentation: ***https://www.themealdb.com/api.php***
- API endpoint #1 - www.themealdb.com/api/json/v1/1/search.php?s={name of meal}
  - Description of endpoint: Search for the meal by meal name. 
  - List of data values used by the endpoint: For each meal, we will retrieve a list of information starting with `id` and `name`
- API endpoint #2 - www.themealdb.com/api/json/v1/1/list.php?i=list
  - Description of endpoint: This will display all of the ingredients for the given meal 
  - List of data values used by the endpoint: for each meal, we will retrieve a list of information regarding the ingredients 
- API endpoint #3 - /images/media/meals/llcbn01574260722.jpg/preview
  - Description of endpoint: We will retrieve the image for each meal. 
  - List of data values used by the endpoint: for each meal, we will retrieve the image for the meal 


## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

* On the `Homepage` page, users can interact with a search bar and 10 default meals. 
* On the `/search` page, users can see a list of ingredients and instructions for the selected meal
* On the `/meals` page, users can ...


## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

* Users will be able to find a recipe by interacting with a `random recipe` button 
* Users will be able to find recipes by filtering based on cuisines 
* Users will be able to see a list of meals based on the first letter typed in the search bar 


## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**
- [ ] Used Vite for this project
- [ ] Used React
- [ ] Made a fetch to get a single, specific resource

**Day 2**
- [ ] HTML/React wireframe
- [ ] display 10 default meals on front page
- [ ] Fetch 3 Api's
- [ ] Used React Router for client side routing
- [ ] Used Context at least once
- [ ] Made a fetch to get multiple resources
- [ ] Made a third fetch for whatever you want
- [ ] There is a main element on each page
- [ ] There is a nav element on each page
- [ ] The nav contains a ul of links
- [ ] At least one h1 element on each page
- [ ] At least one section is used properly on each page

**Day 3**
- [ ] connect all fetch's to html functionality 
- [ ] search bar works
- [ ] make another page for list of meals
- [ ] Heading tag hierarchy is always correct
- [ ] div is never used in place of ul and li
- [ ] Every form input has a proper label
- [ ] Each form is aria labelled properly to make it a landmark
- [ ] Every img has a unique alt (if applicable, get points if no image)
- [ ] All buttons look like buttons, all links look like links
- [ ] Created at least 3 components
- [ ] Have all components in their own files (1 export per file)
- [ ] Handled form submission event properly with React syntax

**Day 4** (MVP due by the end of the day)
- [ ] Ensure everything runs properly
- [ ] Css/ style all web pages
- [ ] At no point did you ever use any vanilla DOM JS methods
- [ ] Rendered an array of items to the screen at least once

**Day 5**
- [ ] make search filter by first letter
- [ ] make filter by location
- [ ] make random button with a randomizer for meals(front page)

**Day 6**
- [ ] more css, look mindful, look demure
- [ ] ...
- [ ] ...

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:


<img width="705" alt="ReactProjectWireframe" src="https://github.com/user-attachments/assets/2adc5779-f362-4263-a957-4dfbcb2fe798">





