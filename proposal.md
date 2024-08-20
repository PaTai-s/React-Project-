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
* On the `/searchedmeal` page, users can see a list of ingredients and instructions for the selected meal
* On the `/meallist` page, users can ...


## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

* Users will be able to find a recipe by interacting with a `random recipe` button 
* Users will be able to find recipes by filtering based on cuisines 
* Users will be able to see a list of meals based on the first letter typed in the search bar 


## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**
- [ ] HTML/React wireframe
- [ ] display 10 default meals on front page
- [ ] Fetch 3 Api's

**Day 2**
- [ ] connect all fetch's to html functionality 
- [ ] search bar works
- [ ] make another page for list of meals

**Day 3** (MVP due by the end of the day)
- [ ] Ensure everything runs properly
- [ ] Css/ style all web pages

**Day 4**
- [ ] make search filter by first letter
- [ ] make filter by location
- [ ] make random button with a randomizer for meals(front page)

**Day 5**
- [ ] more css, look mindful, look demure
- [ ] ...
- [ ] ...

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:


    <img width="676" alt="ReactProjectWireframe" src="https://github.com/user-attachments/assets/e68f4c73-ca60-494c-9a32-01f7a3bd379f">



