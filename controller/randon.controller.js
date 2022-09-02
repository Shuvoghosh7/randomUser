const { loadUser } = require("../jsonData/JsonData");

module.exports.getRandomUser = (req, res, next) => {
    const newData=loadUser();
    const result=newData[Math.floor(Math.random()*newData.length)]
    res.send(result)
  };


