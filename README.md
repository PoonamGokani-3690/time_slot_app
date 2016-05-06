#Time Slot Tracker App

Web application for time slot tracking

#Running the app

First, make sure to have installed following:
1.	Node Version ()
2.	MongoDB Version (3.2)
Clone this repo to a local directory and run npm install to install dependencies:
$ git clone git@github.com:sport195/s195-mobile.git
$ cd s195-mobile
$ npm install

Execute following commands on your command prompt or you can create batch files for all commands:


Used To start mongodb and specify path where you want to store data:

mongod.exe --dbpath "path where you want to store mongodb data" 

Restore the dump of mongodb data ( create database, collection and document for timeslot)
mongorestore -d timeslotTracker /dir: path of timeSlotTracker Dir of above repository
To start node server move to dir where server.js file exist and execute following command:

	node server.js

You will receive following output once server starts:
Connected & Listen to port 8080

Execute index.html file and enjoy Time Slot Tracker Application.

Validation
FirstName : Required Field (only Enter Alphabet, maximum length:30 Digit)
LastName : Required Field (only Enter Alphabet, , maximum length:30 Digit)
Phone Number: Required Field (Only Enter Digit, minimum and maximum length : 10 Digit as per Indian mobile number)

Application Bonus Point:
Make the app responsive using Twitter Bootstrap.
Showcase the use of Angular Directive by implementing validation
Implement actual REST endpoints using NodeJS Express Framework that stores the information in MongoDB. 



