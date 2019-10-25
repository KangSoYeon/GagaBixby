module.exports.function = function radioList(date, time) {
  const dummyData = require("./data/radios.js");
  const console = require('console');
  console.log(date);
  console.log(time);

  let result = [];
  for(let i = 0; i < dummyData.length; i++){
    result.push(dummyData[i]);
  }

  console.log(result);

  return result;
}
