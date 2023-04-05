# SEI Project 2 - Weekend Away

For my second project with General Assembly, I built a web application using ReactJS and a third party public API of my choice. 

![React-Restaurant-App](https://user-images.githubusercontent.com/114579141/215033817-d04d38b2-3e39-4c78-9e2b-dda2b010a9e6.png)

Weekend Away is a website that allows the user to browse a list of UK restaurants by city. Providing details of the restaurant, including name and address. A user can also add restaurants to the list.

# Demo

 - The site was deployed using GitHub Pages and is available [here](https://sml-40.github.io/React-List-App/)
 
## Getting Started/Code Installation

To access and run the code for this project, follow these steps:

 - Download or clone the project repository from GitHub. You can do this by clicking on the green "Code" button and selecting "Download ZIP" to download a zipped version of the code, or by copying the repository URL and running git clone in your terminal.
 - Once you have the code downloaded or cloned, open the project folder in your code editor of choice.
 - Open the index.html file in your web browser to view the project.

## Timeframe
5 days - solo project

## Technologies Used
 - React
 - Fetch
 - Bootstrap
 - CSS
 - Postman
 - Wyre Data API

## Brief
Select a Project Idea of your own. But the user must be able to:
 - Add a new item to a list.
 - Mark the item as complete/favourite/(watch, read, listen) later/flag/etc.
 - Edit an item from a list.
 - Remove an item from a list.
 - Clear/delete all items.
 - Clear/delete only marked items.
 - Fetch data from at least one 3rd party API using Axios or fetch.
 - Make frequent Git commits with descriptive messages, explaining your commit.

## Planning
### Wireframe
I signed up for a free 30-day trial for the Balsamiq wireframing tool.  I wanted to create a user-friendly page with a simple search box at the top and an area underneath to list the results. I also planned to use icons to allow the user to save restaurants into their favourites page. 

![Weekend Away Wireframe](https://user-images.githubusercontent.com/114579141/215038089-61ad81ea-1d07-4243-8186-41dc985cc73c.png)

## API
I searched the web looking for a clean, easy-to-use api, one that would be rich with data and reliable. Wyre Data API appeared to fit the bill, with hundreds of UK restaurants listed.
### Pseudocode
To structure my React app, I created a notes.txt file where I planned out the components, props, and state. 
 - The main container component is App.js, which includes the Search component and the ListContainer component for displaying items. 
 - The ListContainer component renders the ListItems components based on the props passed down from the App.js level. 
 - The App.js level also manages the search functionality by passing down the search value as state to the ListContainer component, which then filters the list of restaurants accordingly. 
 - Finally, the Search component allows the user to input their search query, which is also managed at the App.js level.
 
![Project2 Notes](https://user-images.githubusercontent.com/114579141/230228726-217b2e44-0acd-43cd-9818-6f464df80399.png)

## Build Process

 - I began by creating a .env file for the API key and adding that to git ignore.
 - I then created a components folder based on my planning and pseudocoding.

I styled the search form with React Bootstrap, which prompted the user to enter the city they are looking to search:

<img width="602" alt="User Search Form" src="https://user-images.githubusercontent.com/114579141/230229688-7cdcc6cf-aad8-441e-ba61-a9b8b611fa66.png">

Using the city that the user has typed in, the fetch process is then run to get the data from the API:

<img width="614" alt="API call" src="https://user-images.githubusercontent.com/114579141/230230090-60cebdd8-9d31-471d-8134-f942dc0c9f31.png">

Again, using React Bootstrap, I then created a table for the mapped data output:

<img width="632" alt="React Bootstrap Table" src="https://user-images.githubusercontent.com/114579141/230230205-b4cd2503-8b17-47e8-a2bc-ac1b28e38d6b.png">

I also created functionality to allow the user to add a restaurant to the list:

![Screenshot 2023-04-06 at 00 08 38](https://user-images.githubusercontent.com/114579141/230231341-213eeb88-bafe-4c9a-b52e-b62ee4594f04.png)

## Challenges

Within the timeframe, I could not fix the remove button for the restaurants returned from the API. Each restaurant has an ID, and I included the id in the functionality, I was unable to determine why the id was not matching up with the restaurant. I plan to revisit and do more testing, possibly through Postman and researching other test methods, in order to get to the root of the issue.

<img width="482" alt="Restaurant Id" src="https://user-images.githubusercontent.com/114579141/230231541-2aa1a0dc-4a39-4752-b520-6951eb723f2b.png">

## Wins

 - I am proud to have met the MVP for my first React project.
 - Using Postman helped me to better understand the structure of the API and how to properly manipulate the data to achieve my desired functionality.
 - Gaining experience with styling and layout design using Bootstrap.
 - The creation of the table was incredibly satisfying to build as it was one of the bigger challenges that I faced when rendering the API information into a clear and concise table format.

## Key Learnings
 - I would like to practise with other API's, particularly ones that return more information to work with, for example, images.
 - Using Postman to test API requests to ensure that the data was properly retrieved before integrating it into my React app.
 - This was my first time working with React and understanding the difference between props and state and how to use them appropriately in React components.
 - I gained experience with state management and learned how to update state using the setState() method.
 - This was also my first time working with Bootstrap. The Bootstrap documentation helped to guide me on the use of Bootstrap classes for styling the elements and components. 
 - I also learned how to incorporate Bootstrap components into React components.
 
## Bugs
 - At present, the loading message only appears at the start, I will revisit so that the message appears while waiting for search results.
 - I will add functionality to deactivate the 'Add Restaurant' button until after the user has completed their search.
 - The user input should clear after they have pressed search.
 - As mentioned in challenges, I would like to remove individual restaurants from the API search, when pressed it removes them all because of the restaurant.id issue.

## Future Updates
 - At present, I have added a favourite button next to listed restaurants. I would like to add functionality so that it updates the ‘favourite list’ at the top of the page.
 - When the user clicks on their ‘favourite list’ I would like for them to be able to view the list of their favourite restaurants.
 - I would also like to add Bootstraps image carousel for a more visually appealing user interface.
