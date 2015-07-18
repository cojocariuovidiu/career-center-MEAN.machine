
using System; 
using System.Xml.Linq; 
using MongoDB.Bson; 
using MongoDB.Driver; 
 
namespace ClassProject
{ 
    class Program 
    { 
        //create connection to mongo server
	MongoServer mongo = MongoServer.Create(); 
        //connect to mongo server
	mongo.Connect(); 
		
	//create database in command line
	//use CIS440_MM
	//create collection in command line
	//db.createCollection("myCollection") OR
	//db.createCollection("myCollection", {capped: true, autoIndexID: true, size: 6142800, max: 10000 })
		
	//create variable for storing database inside
        var db = mongo.GetDatabase("CIS440_MM"); 
 
        //create variables for document
	_id: POST_ID
	title: TITLE_OF_POST, 
	description: POST_DESCRIPTION,
	by: POST_BY,
	url: URL_OF_POST,
	tags: [TAG1, TAG2, TAG3],
	likes: TOTAL_LIKES, 
	comments: 
	[	
		{
			user:'COMMENT_BY',
			message: TEXT,
			dateCreated: DATE_TIME,
			like: LIKES 
		},
		{
			user:'COMMENT_BY',
			message: TEXT,
			dateCreated: DATE_TIME,
			like: LIKES
		}
	]

	//create variables for users
	_id: USER_ID
	firstName: FIRST_NAME,
	lastName: LAST_NAME,
	userName: USER_NAME,
	password: PASSWORD,
	email: EMAIL,
	major: MAJOR_NAME,
	graduation: GRAD_DATE,
	gender: GENDER,
	age: AGE,
	

 
	//disconnect from mongo server
	mongo.Disconnect(); 
    } 
}
