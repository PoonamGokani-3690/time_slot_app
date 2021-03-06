#Time Slot Tracker App

	- Web application for time slot tracking
	- Application is responsive using Twitter Bootstrap for that.
	- Using Angular Directive for implementing validation
	- Implement actual REST endpoints using NodeJS Express Framework that stores the information in MongoDB. 

#Running the app

First, make sure to have installed following:


	1.	Node Version (v4.4.4 Link: https://nodejs.org/en/download/)
	
	2.	MongoDB (v3.2 Link: https://www.mongodb.com/) and add it to your path of environment variables. (For Ex: C:\Program Files\MongoDB\Server\3.0\bin)

Clone this repo to a local directory and run npm install to install dependencies:

	 git clone https://github.com/PoonamGokani-3690/time_slot_app.git
	 cd time_slot_app/nodeApi
	 npm install

Execute following commands on your command prompt or you can create batch files for all commands:


1. Used To start mongodb and specify path where you want to store data:

	mongod.exe --dbpath "path where you want to store mongodb data" 

2. Restore the dump of mongodb data ( create database, collection and document for timeslot database)

	mongorestore -d timeslotTracker /dir: path of timeSlotTracker Dir of above repository

3. To start node server move to dir where server.js file exist and execute following command:

	node server.js

	You will receive following output once server starts:
	
	Connected & Listen to port 8080

4. Execute index.html file and enjoy Time Slot Tracker Application.

#Validation (Invalid Field highlight with red text color)
FirstName : Required Field (only Enter Alphabet, maximum length:30 Digit)

LastName : Required Field (only Enter Alphabet, , maximum length:30 Digit)

Phone Number: Required Field (Only Allow to Enter Digit, minimum and maximum length : 10 Digit as per Indian mobile number)

Right now, application in localhost so should follow some additional steps to resolve CORS error:

	npm install http-server -g
	http-server time_slot_app
	
	Starting up http-server, serving time_slot_app
	Available on:
  	http://192.168.0.18:8080
  	http://127.0.0.1:8080
  	

In server.js file change res.header('Access-Control-Allow-Origin', 'http://192.168.0.18:8080/'); to allow CORS request on localhost


