const { json } = require("express");
const { loadUser } = require("../jsonData/JsonData");
const fs = require("fs");

module.exports.getRandomUser = (req, res, next) => {
  const newData = loadUser();
  const result = newData[Math.floor(Math.random() * newData.length)]
  res.send(result)
};
module.exports.getAllUser = (req, res, next) => {
  const { limit } = req.query;
  console.log(limit);
  res.json(loadUser().slice(0, limit));
}

module.exports.saveUser = (req, res) => {
  var data = fs.readFileSync("data.json");
  var myObject = JSON.parse(data);
  let newData = {
    ...req.body,
  };
  myObject.push(newData);
  var newData2 = JSON.stringify(myObject);
  fs.writeFile("data.json", newData2, (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
  });
  res.send(newData2)
};

module.exports.updateUser = (req, res) => {
  var data = fs.readFileSync("data.json");
  var myObject = JSON.parse(data);
  const { id } = req.params;
  const newData = myObject.find(user => user._id == id);
  newData._id=id;
  newData.name=req.body.name;
  res.send(newData)
};

module.exports.deleteUser = (req, res) => {
  var data = fs.readFileSync("data.json");
  var myObject = JSON.parse(data);
  const id = req.params.id
  const result = myObject.filter(tool => tool._id != id)
  var newData2 = JSON.stringify(result);
  fs.writeFile("data.json", newData2, (err) => {
    // Error checking
    if (err) throw err;
    console.log("Delete user Data");
  });
  res.send(newData2)
}