# Hidden-Gems

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

        

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Future Additions](#future additions)
- [License](#license)  
        



## Description

AS A person who loves to explore and avoid crowds, 

I WANT a site that allows me to discover places to explore that are fascinating and not well-known

SO THAT I can plan a great vacation.

Hidden Gems is a site where users can create an account and post different great places to tour or visit on vacation. Users will add a name of the site, location, city, state, country, visitorship, pictures, and a description. The homepage will show the top liked spots in the form of cards that include the title and picture. Users can also like and comment on whatever gem they choose. All locations must have less than 100,000 visitors per year. When the user clicks on the card, it will take the user to that location's page where all the info and comments are. There will also be a dashboard where logged-in users can change profile information, add gems, delete gems, and edit gems.

Once complete, the program should operate so that:

WHEN I check the dependencies,

THEN I see that Node.js and Express.js were used to create a RESTful API.

WHEN I check the views folder,

THEN I find that Handlebars.js was used as the templating engine.

WHEN I check the models and controllers folder,

THEN I can confirm that MySQL and the Sequelize ORM were used for the database.

WHEN I look at the routes, 

THEN I find both GET and POST routes for retrieving and adding new data.

WHEN I want to open the application,

THEN I can do it by visiting the Heroku site and find that there is already data in it.

WHEN I look at the dependencies, 

THEN I find at least one new library, package, or technology that we haven’t discussed being used.

WHEN I interact with the application,

THEN I get the feeling that the application is responsive, interactive, and has a polished UI.

WHEN I check the folder structure,

THEN I see that it meets the MVC paradigm.

WHEN I log onto the site,

THEN I go through some kind of authentication (express-session and cookies).

WHEN I try to get any API keys or sensitive information,

THEN I find they've been protected with environment variables.

WHEN I check the repository,

THEN I see it's clean and meets quality coding standards (file structure, naming conventions, best practices for class/id naming conventions, indentation, quality comments, etc.).

WHEN I look at the README,

THEN I see it is of high quality, including a unique name, description, technologies used, screenshot, and link to deployed application).

<!-- ADD DESCRIPTION OF DEVELOPMENT OF THE PROGRAM -->




## Installation

Links to the repository and the deployed page can be found at [Questions](#questions).

While this project's repository is available on Github, the site it deployed to Heroku. If you clone the repo you must run the command "npm install" on the Terminal/Command Line and download the dependencies, all of which are mentioned in [Credits](#credits).




## Usage

Once the project is cloned and the dependencies downloaded, type "npm start" to run the program. 

A screenshot of the program in action is shown below, logged out and logged in;

<!-- ADD IMAGES -->
![screenshot of Active Site, Logged Out](/images/screenshot-logout.png)
![screenshot of Active Site, Logged In](/images/screenshot-login.png)

<!-- ADD IMAGES, DECIDE WHICH FILES TO Include -->
Screenshots of the ............... files are below: 

![screenshot of ...](/images/screenshot-...-.png)
![screenshot of ...](/images/screenshot-...-.png)
![screenshot of ...](/images/screenshot-...-.png)


## Credits

The coding boot camp Professional README Guide found at https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide was used as a template for this README. The license was picked from [https://choosealicense.com/](https://choosealicense.com/).The WHEN/THEN section of this README was based off the project assignment Acceptance Criteria. Most influence was taken from Just-Tech-News of Modules 13 and 14. Stack Overflow, MDN Web Docs, W3, and Google were critical to our success. Bootstrap, JQuery, MySql, Node.js, Insomnia, NPM, Express.js, express-session, Handlebars, Sequelize, bcrypt, and dotenv were used. Pixabay was used for stock photos. Bootstrap-select-country, created by mojoaxel, was implemented in the Add-Gem form. 

<!-- OTHER CREDITS -->



## Contributing

<!-- HOW TO CONTRIBUTE -->



## Future Additions

<!-- ADD FUTURE ADDITIONS -->



## Tests

<!-- ADD TESTS   -->



## Questions


The github repository to this project is below:

[https://github.com/rbenne30/Hidden-Gems.git](https://github.com/rbenne30/Hidden-Gems.git)


The application is deployed on Heroku. The site is below:

<!-- [SITE](SITE) -->



For any additional questions, I can be reached at the following

Will Duncan: willdunc12@gmail.com
Github: [https://github.com/willjduncan](https://github.com/willjduncan)

<!-- ADD CONTACT INFO -->
Ryanne Bennett: 
Github: 

David Shaw: 
Github: 




## License

[view license link here](https://choosealicense.com/licenses/mit/)

        
MIT License

<!-- Copyright (c) [2022] [willjduncan ADD NAMES] -->

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<!-- OTHER TO-DOs:
double check media queries once everything's hooked up
Double check all handlebars data is correctly hooked up
EDIT GEM:
Add the Delete Gem ability with a modal that pops up and asks "Are you sure you want to delete this gem?" State (make a dropdown of options of states and US Territories, but only if the Country value is the USA. Otherwise, make it a typed-in input)
ADD GEM: 
Activity Type (Again, create a dropdown of the main activity types we plan to have. When you have more time, also provide an Other option, where an additional input box appears for the user to type in a new activity if we don't have it already).
Provide an option for the city name, as well as longitude and Latitude coordinates. Star the ones above, since they're required. Change the font type if not all the required answers are indeed answered and redirect the page to the part of the page that says
"Please make sure to fill out all required * fields"npm seeds
-->