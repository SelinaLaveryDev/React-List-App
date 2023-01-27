# SEI Portfolio 2 - React-List-App

For this project, I built a web application using ReactJS and an API of my choice. 

![React-Restaurant-App](https://user-images.githubusercontent.com/114579141/215033817-d04d38b2-3e39-4c78-9e2b-dda2b010a9e6.png)

Weekend Away is a website that allows the user to browse a list of UK restaurants by city. Providing details of the restaurant, including name and address. A user can choose to add restaurants to the list and will be able to create a list of their favorite restaurants which they can then access on their favorites page.


# Demo

 - The site was deployed using GitHub Pages and is available [here](https://sml-40.github.io/React-List-App/)


# Brief

## General

 - Build a web application from scratch, without a starter codebase. Must be your own work.
 - Use React with create-react-app to build your application.
 - Plan your application using wireframes and user stories.
 - Craft a README.md file that explains your app to the world.
 - Deploy your app online, where the rest of the world can access it.

## Technical

Select a Project Idea of your own. But the user must be able to:

 - Add a new item to a list
 - Mark the item as complete/favorite/(watch, read, listen) later/flag/etc
 - Edit an item from a list
 - Remove an item from a list
 - Clear/delete all items
 - Clear/delete only marked items
 - Fetch data from at least one 3rd party API using Axios or fetch.
 - Make frequent Git commits with descriptive messages, explaining your commit.


## Deployment

 - Your React app must be deployed to GitHub Pages, Surge, or any hosting service. Applications that are not deployed will be considered incomplete.


### Bonus Requirements

 - You should only attempt these bonuses if and only if you've satisfied the base technical requirements for this project.
 

### React Router

 - Use React Router to handle multiple views.


### React Hooks

 - Refactor your React app using hooks


### Another 3rd Party API

 - Incorporate another API in your application


### Stretch Goals

 - Make the app Responsive
 - Save the data to localStorage or an API
 - Use 1 or more 3rd party API's with fetch or Axios.
 - Use 1 or more 3rd party libraries
 - Use a React component library like Ant Design, Bootstrap React, or Material UI
 - Use a CSS library like Bootstrap (tutorial)
 - Add User Sign Up, Sign In, and Sign Out with Firebase and React Authentication (tutorial), alternative tutorial here (can be very challenging).


## Process

 - I searched the web looking for a clean easy to use api, one that would be rich with data and reliable. Wyre Data API fit the bill, with hundreds of UK      restaurants listed.


## Wireframe

 - I used Balsamiq to design roughly what I wanted for my main page layout.

![Weekend Away Wireframe](https://user-images.githubusercontent.com/114579141/215038089-61ad81ea-1d07-4243-8186-41dc985cc73c.png)

The search form styled with React Bootstrap, indicated the user to enter the city they are looking to search

<img width="602" alt="User Search Form" src="https://user-images.githubusercontent.com/114579141/215085945-4158bc16-91c2-4cef-80cf-78901fd44d5c.png">

Using the city that the user has typed in, the fetch process is then run to get the data from the API

<img width="614" alt="API call" src="https://user-images.githubusercontent.com/114579141/215084766-fd5ea7c7-22ce-4d0e-a738-193c6b015642.png">

Again, using React Bootstrap, I then created a table for the mapped data output

<img width="632" alt="React Bootstrap Table" src="https://user-images.githubusercontent.com/114579141/215084476-668654d5-8e84-4823-bf0a-fb49c2fcefba.png">

I then created some functionality to allow the user to add a restaurant to the list

<img width="638" alt="Add New Restaurant" src="https://user-images.githubusercontent.com/114579141/215080710-b18563f2-af1d-48fe-8d53-c67da0956062.png">


## Styling

 - A combination of Bootstrap and CSS.


## Challenges

I could not fix the remove button for the restaurants returned from the API. Each restaurant has an ID, and I included the id in the functionality, I was unable to determine why the id was not matching up with the restaurant

<img width="482" alt="Restaurant Id" src="https://user-images.githubusercontent.com/114579141/215088586-51bd23f5-d7b5-4c63-b1df-6eb9c523f708.png">


## Key Learnings
 - I would like to practice with other API's, particularly ones that return more information to work with
 - Working with props and state
 - Using Bootstrap for the first time

## Bugs

 - The Loading message only appears at the start, should also appear while we wait for search results
 - I would like to add functionality to deactivate the 'Add Restaurant' button until after the user has completed their search
 - User input should clear after they have pressed search
 - Unable to remove individual restaurants from the API search, when pressed it removes them all because of the restaurant.id issue


## Future Features
- Favourite toggle and counter
- Create a favourite list
- Styling using image carousel




