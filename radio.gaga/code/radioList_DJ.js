module.exports.function = function radioList_DJ(input_dj) {
  const dummyData = require("./data/radios.js");
  const console = require('console');
  const fail = require('fail');

  console.log("DJ:" + input_dj);

  let result = [];

  for(let i = 0; i < dummyData.length; i++){
    if(dummyData[i].dj == input_dj){
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
