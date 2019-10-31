module.exports.function = function radioList_Start(input_start) {
  const dummyData = require("./data/radios.js");
  const console = require('console');
  const fail = require('fail');

  console.log("startTime:" + input_start);

  let result = [];

  for(let i = 0; i < dummyData.length; i++){
    var start = dummyData[i].startTime.substr(0, 2) * 1;
    var end = dummyData[i].endTime.substr(0, 2) * 1;
    if(input_start >= start && input_start < end){
      result.push(dummyData[i]);
    }
  }

  if(result.length == 0){
    console.log("결과가 없음");
    throw fail.checkedError("No Result", "NoResult");
  }

  console.log(result);

  return result;
}
