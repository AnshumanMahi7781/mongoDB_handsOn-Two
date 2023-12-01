const route = require("express").Router();
const { dataBaseName } = require("../config/dbConnection");
const CollectionName = dataBaseName.collection("Employee");


//Q.1 Query the collection "employee" and list all the documents
route.get("/queryOne", async (request, response) => {
    let allEmp = await CollectionName.find().toArray();
    return response.send(allEmp)
 });


//Q.2 Query the collection "employee" and list the employees who are having salary more than 30000
route.get("/queryTwo", async (request, response) => {
    let allEmp = await CollectionName.find({"salary" : {$gt : "30000"}}).toArray();
    return response.send(allEmp)
 });

//Q.3  Query the collection "employee" and list the employees who are having experience more than 2 years.
route.get("/queryThree", async (request, response) => {
    let allEmp = await CollectionName.find({"overallExp" : {$gt : "2"}}).toArray();
    return response.send(allEmp)
 });

//Q.4 Query the collection "employee" and list the employees who are graduated after 2015 and having experience more than 1 year 
route.get("/queryFour", async (request, response) => {
    let allEmp = await  CollectionName.find({"yearGrad" :"2015", "overallExp":{$gt: "1"}}).toArray();
    return response.send(allEmp)
 });


 // Q.5 Query the collection "employee" and update the salary of the employee whose salary is greater than 70000 to 65000.
 route.get("/queryFive", async (request, response) => {
    let allEmp = await  CollectionName.updateMany({"salary" :{$gt : "70000"}}, {$set:{"salary" : "65000"}});
    return response.send(allEmp)
 });


 //Q.6 Delete all the documents from "employee" where last company is Y  
 route.get("/querySix", async (request, response) => {
    let allEmp = await  CollectionName.deleteMany({"lastCompany" : "Y"});
    return response.send(allEmp)
 });


module.exports = route