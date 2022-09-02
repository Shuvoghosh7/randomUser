const { loadUser } = require("../jsonData/JsonData");

module.exports.getRandomUser = (req, res, next) => {
    const newData=loadUser();
    const result=newData[Math.floor(Math.random()*newData.length)]
    res.send(result)
  };
  module.exports.getAllUser=(req, res, next)=>{
     const {limit} = req.query;
    console.log(limit);
    res.json(loadUser().slice(0, limit));
  }

