# Please note:
Our team learned a lot through this project. It was very challenging for us but we were determined to put forth our best MVP. Ultimately, we decided to spend the weekend refactoring our code to create a more pleasant user experience. We are currently refactoring out AJAX calls (primarily our event listener functions) and ensuring the HTML lends itself to a simple and pleasant user experience. This Project-1 repository will be fully packaged and pushed by Tuesday at 9am. If you'd like to see our more raw take on the project, I'm happy to give you access to our original repository. Thank you for your patience while we iron out the wrinkles.

- TEAM CATCHY

# Links to our process:
## Trello
Links to user stories, deliverables, etc
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
