### Please note:
Our team learned a lot through this project. It was very challenging for us but we were determined to put forth our best MVP. Ultimately, we decided to spend the weekend refactoring our code to create a more pleasant user experience. We are currently refactoring out AJAX calls (primarily our event listener functions) and ensuring the HTML lends itself to a simple and pleasant user experience. This Project-1 repository will be fully packaged and pushed by Tuesday at 9am. If you'd like to see our more raw take on the project, I'm happy to give you access to our original repository. Thank you for your patience while we iron out the wrinkles.

- TEAM CATCHY

# Links to our process:
## Trello
https://trello.com/b/p1gQMy5C/project-1-karma-jon-paris

## Balsamiq Wireframes
https://balsamiq.cloud/s3btsem/pw98f1y/rC0A6

## File stucture and Broad-strokes
* Process to set up a backend:
    * Set up file names
        * server.js 
            * starts with the required aspects with requiring the tools needed to spin up server
            * then middleware like app.use or express.static with the public folder name
            * then set up routes like GET, POST, PUT, DELETE routes. Which direct traffic
            * finally- it has to be listening for the requests with api. port number
                * if error, close terminal. 
                * if not working killall 
        * set up nodemon and mongod at the same time. Test in Postmon that the routes are working. there won’t be data but you can console log something
        * Create models
            * two requirements
                * a folder called models
                * a file called index.js that requires mongoose that initiates a mongoose.connect
            * create individual models
                * import mongoose
                * describe the schemas
                * export the mongoose model with by exporting to a variable
        * seed.js - built to help you use hard-coded data to seed the server with data from the database
            * be careful about deleting data with functions. Don’t want to delete user data
        *  Fill out what the routes actually do
            * import the db with the require models statement
                * db.model.find etc
        * Use Ajax calls to consume the data from the local url
            * 









#Project One Readme and Rubric

## DESCRIPTION

It's time to put everything that you've learned in the past month together! For your first project you will build a full stack web application using jQuery and AJAX, Express, Node.js, Mongoose, and MongoDB.

The objective of this project is to:

* Apply the skills you've learned by building a full-stack web application from the ground up.
* Demonstrate mastery of topics covered during this course so far.  
* Build a polished, published website you can share in your portfolio.  

You will be working **with 2-3 partners** for this first project. Show us what you've got!

## CORE REQUIREMENTS
Make sure to do all of the following with your app.

* **Express API** Build an Express Application that has both HTML and JSON endpoints.
* **RESTful Routes** Design your CRUD routes using the [REST](http://restfulrouting.com/mappings/resources) convention.
* **AJAX** Leverage AJAX to fetch JSON data from the backend.
* **jQuery** Use jQuery to add interactivity and render data on the client-side.  
* **Templating** Render the JSON data on the frontend using template strings.  
* **MongoDB** Persist at least two models to a Mongo Database. Use at least one one-to-many or many-to-many relationship between models. You can choose to reference or embed your data.  
* **Git** 50+ commits. Commit early, commit often. Tell a story with your commits. Each message should give a clear idea what you changed. (And don't expose any secret keys/tokens on GitHub!)
* **Code Style** Write professional-looking code. Follow the [Airbnb Javascript Styleguide](https://github.com/airbnb/javascript).
* **Visual Design** Use Flexbox, CSS Grid, Bootstrap, Materialize, Foundation, Skeleton, or another CSS framework to make your front-end snazzy. First impressions matter!
* **Heroku** Deploy your app to Heroku.
* **Documentation** Write a README.md that would make an employer excited to hire you. Screenshots are encouraged. See the [example readme](./example-readme.md) for a suggested structure.

## PLANNING DELIVERABLES

See the [planning deliverables](./planning.md) document for more information on the planning steps you should take.
  * A clearly defined **Minimum Viable Product ([MVP](http://en.wikipedia.org/wiki/Minimum_viable_product)) Scope**. What can you reasonably accomplish in a week?
  * **Wireframes** for _every_ page. These don't have to be pretty; just sketch what the page will include.
  * **User Stories** (divided into sprints) - we recommend [Trello](https://trello.com/) for project tracking.
  * **Database Models and ERD** Make plans for each resource.  List the attributes you'll include in your schemas and what type of data each attribute will be. Draw an [Entity Relationship Diagram](https://www.google.com/search?tbm=isch&q=database%20table%20relationships%20drawing) to illustrate the relationship(s) between models, and note whether you plan to reference or embed related data.
  * A **Feasibility Check** for any bonus feature you'd like to complete.


Once your project has been approved, create a **GitHub Repo** for your project and [add your teaching team as collaborators](https://help.github.com/articles/adding-collaborators-to-a-personal-repository/).

## BONUS IDEAS  
If you want to push yourself and learn something new, optionally consider doing some of the following with your app, but *please talk to an instructor* beforehand:

* **Front-End Data Validation** Validate data on the front-end by handling incorrect form inputs during create/update. For example, when a form is submitted, check that a field has some text in it, or that its value is a number.
* **Back-End Data Validation** Validate data on the back-end using mongoose's [built-in validations](http://mongoosejs.com/docs/validation.html#built-in-validators), or make your own custom validation.
* **More Models or Relationships** Add another model to your project or create a new relationship.
* **External API** Use an external API to integrate rich data into your app.
* **Model Methods** Level up your models by adding a method to one of your schemas.  For example, a person schema with `firstName` and `lastName` can have a `fullName` method (see mongoose docs on [instance methods](http://mongoosejs.com/docs/guide.html#methods) and [static methods](http://mongoosejs.com/docs/guide.html#statics)).
* **Authentication** Enable users to store account information and signup, login, and logout.
* **Sass** Use a CSS pre-compiler to write more imperative CSS.
* **Whatever else inspires you!**

## TIMELINE

> DO NOT START CODING UNTIL YOUR PROJECT IS APPROVED. CONFIRM THAT YOU ARE APPROVED ON THIS SPREADSHEET: [PROJECT APPROVAL SPREADSHEET](https://docs.google.com/spreadsheets/d/1mwRPs_yAO6wy7F4iZQH4PNzoCQo5Vbvhr7REza6_1bU/edit?usp=sharing).


* **Friday, February 15th by 3:00pm** - Present your app plan to your instructors. Before you begin work on your project, the [planning deliverables](./planning.md) must be checked off with an instructor!
* **Thursday, February 21st @ 5pm** - Feature Freeze! Deploy your code to Heroku, and start polishing existing features. Finalize your README.md and prepare for presentations.
* **Friday, February 22nd @ 2:30pm** - Project due and presentations!

## WHAT WE ARE LOOKING FOR

#### Code must be...
* Clean   
  - no unused or commented-out code   
  - proper spacing and indentation  
* Modular and well organized   
  - use the module pattern with `module.exports`  
  - separate large tasks into shorter functions
* Appropriately commented
  - use comments to plan, but remove the unnecessary comments for your professional portfolio
  - prefer a well-named variable or function to a comment

See the [feedback document](./feedback.md) for the criteria on which your project will be evaluated.

## ACCESS TO INSTRUCTORS
We will hold 1:1s throughout the week. We will also do mini lessons on certain topics if we notice that several people are running into the same issues.

## FINAL DELIVERABLES

* Completion of the **core requirements**
* A link to your website **hosted on Heroku**
* A link to your **source code on GitHub**
* A `README.md` file that serves as your **project documentation** (this is important!)
* A **10 minute presentation**, in the company of friends, illustrating:
    - Triumphs
    - Challenges
    - Words of Wisdom
    - And _3_ lines(!) of code you want to share with your classmates, copied into a seperate document.

## Presentation Tips
* Please zoom your browser window to 150%.
* Please set your Text Editor font to at least 20.0 pixels.
* And speak up!

<details><summary><h3>Happy Coding :)</h3></summary>
  <ul>
   <li>Brandon J, Enrique, Isaac</li>
   <li>Amberly, Ronni, Joe</li>
   <li>Tristan, Jason, Alom</li>
   <li>Nassima,  Lou, Matt </li>
   <li>Chike,  Siri, Heggy</li>
   <li>Eunice,  Ghenet, Luke</li>
   <li>Leo, Rhea, Mike</li>
   <li>Christina, Brandon C, Tiffany</li>
   <li>Paris, Jon R, Karma</li>
   <li>Nicolette, JJ, Bryant, Darnell</li>
 </ul>
</details>


<!-- NOTES -->
        <!-- google onSign section -->
        <div class="g-signin2" data-onsuccess="onSignIn">SignIn</div>
        <!-- onclick signout -->
        <a href="#" onclick="signOut();">Sign out</a>
        <!--  -->
