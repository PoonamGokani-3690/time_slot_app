var app   = require('express')();
var http = require('http').Server(app);
var bodyParser = require("body-parser");
var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/timeslotTracker", {native_parser:true});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req,res,next){
  req.db = db;  
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

app.get('/',function(req,res){
	var data = {
		"Data":""
	};
	data["Data"] = "Welcome to Time Slot Tracker Application";
	res.json(data);
});

app.get('/timeslot',function(req,res){
	var data = {
		"Data":""
	};
	var db = req.db;
	db.collection('timeSlotTracker').find().toArray(function (err, items) {	
	if(!!err){
		data["timeSlotDetail"] = "Error fetching data";
		res.json(data);
	}else{
		if(!!items && items.length != 0){
			data["error"] = 0;
			data["timeSlotDetail"] = items;
			res.json(data);
		}else{
			data["error"] = 1;
			data["timeSlotDetail"] = 'No timeSlotDetail Found..';
			res.json(data);
		}
	}
	});
});

app.put('/timeslot',function(req,res){
	var Id = req.body._id;
	var timeslot = req.body.timeSlot;
	var firstname = req.body.firstName;
	var lastname = req.body.lastName;
	var phonenumber = req.body.phoneNumber;
	var isutilize= req.body.isUtilize
	var data = {
		"error":1,
		"timeSlotDetail":""
	};	
	if(!!firstname && !!lastname && !!phonenumber){
		db.collection('timeSlotTracker').update({_id:mongo.helper.toObjectID(Id)}, {$set:{firstName:firstname,lastName:lastname,phoneNumber:phonenumber,isUtilize:isutilize}}, function(err) {
			if(!!err){
				data["timeSlotDetail"] = "Error Updating data";				
			}else{
				data["error"] = 0;
				data["timeSlotDetail"] = "Updated Time Slot Details Successfully";
			}
			res.json(data);
		});
	}else{
		data["timeSlotDetail"] = "Please provide all required data (i.e : Time Slot, First Name, Last Name, Phone Number)";
		res.json(data);
	}
});

http.listen(8080,function(){
	console.log("Connected & Listen to port 8080");
});