# SMS-user-interface

user-interface for SMS

## Deployed At

* Client-side User Interface: TO BE ADDED
* Server-side API: http://ec2-18-224-20-187.us-east-2.compute.amazonaws.com:8092/api/swagger-ui.html

# Onboarding

## Where to Start?
*start with the project given to you and work on getting cognito setup and getting the webpage ran as intended
*Once you are able to nagivate through the website you should be able to see many problems that need fixing

## Cognito startup connecting the database
* Cognito is responsible for handling our login. 
* We must go into the java and set the right values.
* first right click a folder and go to the run as tab, then go to run confiurations, a box should pop up that says create manage and run configurations
* In the tabs above you want to change the project and main type to their appropriate values then switch over to the environments tab
* in that box closer to the right you should see an environment tab go the enviroment and enter the valules that should be provided to you by your instructor

## npm installs to get started


* npm install --save ng2- charts
* npm install -- save chart.js
* npm install --save-dev ng2-charts-schematics
* npm install @syncfusion/ej2-angular-calendars --save
* npm install ng-http-loader
* ng generate ng2-charts-schematics:line my-line-chart
* any more missing installs can be solved by doing an npm install and the name of the missing module
* npm install

## navigating the app

* The app starts off on a login screen where we can sign in as one of users The password for these accounts found in the postgres database is Password1! with the capitol "P"
* login as blake.kruppa@revature.com
* You will notice several tabs at the top of the screen. Survey, Manage, Interview, Reports as well as an email display of the current user where we will logout

### Survey
*View all - should see a table with clickable rows that bring up the assign page(where we assign the surveys) and data and status buttons that bring modals displaying the graphs and data.
*assign - Will say no surveys assign in a table if empty if not it will contain a clickable survey that will allow the user to fill out the survey
*Create  - allows us to completely customize a survey (make sure to make it a template so we can reuse that survey)
*Template - shows a list of all the current templates that we can create and ready up to be assigned to users

### Manage
*View all -Shows a table of all the user and there privallages if you are an Admin. Else this shouldnt be there

### Interview
*View all interview - Shows a list of Interviews and who they are assigned to and whether or not they have been completed or not
*Create Interview - Currently broken, But should allow us to create and schedule an interview
*Associate Feedback Form - Allows the associate to display their feed back about how their staging and interviews were handled

### Reports
*24 Hour Notice - Shows a table of the reports and the data that comes with it
*Recieved Job Description - Shows a table of Users who have been given a job
*Associate Interview Count - Shows a table of all the assoicates and how many interviews they have 
*Feedback Requested - Shows a table of where the associate is gone and whether they have filled out their survey

### Current User email
* edit profile - edit the current users profile currently needs optimization
*Logout -  returns us to the login and invalidates the session




## Group Members

* Yindi Zheng (Scrum master)
* Robert Connell (Scrum master)
* Giovanni Gonzalez ( Scrum master)
* Jordan Mobley (Team lead)
* Stephon Montgomery (Team lead)
* Yannier Gomez (Team lead)
* Javier Mexicano
* Xiandra Despacito
* Jordan Ponder
* Colton Stamey
* La'Keyera Harris
* Debbie Biteye
* Kevin Fite
* David Meyers
* Colton Stamey
* Kevin Fite
* Jeremiah Ziaty


## Description

The Survey Service is part of a larger service, the Staging Management Service (SMS). 

## Technologies Used

* Angular 7 for the client side
* Java & Spring Boot for the server side
* PostgreSQL for the database

## See the Code

* https://github.com/sms-trevature/SurveyService
* https://github.com/sms-trevature/InterviewService
* https://github.com/sms-trevature/UserService
* https://github.com/sms-trevature/Gateway-Discovery