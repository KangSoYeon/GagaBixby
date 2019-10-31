module.exports.function = function radioList_Word(input_word) {
  const dummyData = require("./data/radios.js");
  const console = require('console');
  const fail = require('fail');

  console.log("word:" + input_word);

  var dates = require('dates');

  let result = [];

  var hour = dates.ZonedDateTime.now().getHour();
  
  if(input_word == "지금"){
    for(let i = 0; i < dummyData.length; i++){
      var start = dummyData[i].startTime.substr(0, 2) * 1;
      var end = dummyData[i].endTime.substr(0, 2) * 1;
      if(hour >= start && hour < end){
        result.push(dummyData[i]);
      }
    }
  }
  else if(input_word == "아무거나"){
    let ran = [];

    for(let i = 0; i < dummyData.length; i++){
      var start = dummyData[i].startTime.substr(0, 2) * 1;
      var end = dummyData[i].endTime.substr(0, 2) * 1;
      if(hour >= start && hour < end){
        ran.push(dummyData[i]);
      }
    }

    if(ran.length != 0) result.push(ran[Math.floor(Math.random() * ran.length)]);
  }
  else if(input_word == "목록"){
    for(let i = 0; i < dummyData.length; i++){
      result.push(dummyData[i]);
    }
  }
  // 잘못된 입력일 경우
  else{
    console.log("잘못된 입력");
    throw fail.checkedError("Unknown", "Unknown");
  }

  if(result.length == 0){
    console.log("결과가 없음");
    throw fail.checkedError("No Result", "NoResult");
  }

  console.log(result);

  input_start = null;
  input_dj = null;

  return result;
}
