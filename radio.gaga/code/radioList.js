module.exports.function = function radioList(date, input_start, input_end, input_dj, input_title, input_word) {
  const dummyData = require("./data/radios.js");
  const console = require('console');
  console.log("date:" + date);
  console.log("startTime:" + input_start);
  console.log("endTime:" + input_end);
  console.log("dj:" + input_dj);
  console.log("title:" + input_title);
  console.log("word:" + input_word);

  var dates = require('dates');
  console.log(dates.ZonedDateTime.now().getHour());
  console.log(dates.ZonedDateTime.now().getMinute());

  let result = [];

  if(typeof input_start != "undefined"){
    for(let i = 0; i < dummyData.length; i++){
      if(dummyData[i].startTime.substr(0, 2) == input_start.substr(0, 2)){
        result.push(dummyData[i]);
      }
    }
  }
  else if(typeof input_dj != "undefined"){
    console.log(input_dj);
    for(let i = 0; i < dummyData.length; i++){
      if(dummyData[i].dj == input_dj){
        result.push(dummyData[i]);
      }
    }
  }
  else if(typeof input_title != "undefined"){
    for(let i = 0; i < dummyData.length; i++){
      if((dummyData[i].title).indexof(input_title) != -1){
        result.push(dummyData[i]);
      }
    }
  }
  else if(typeof input_word != "undefined"){
    if(word.indexof("지금") != -1){
     var hour = dates.ZonedDateTime.now().getHour();
      for(let i = 0; i < dummyData.length; i++){
        if(dummyData[i].startTime.substr(0, 2) == hour){
          result.push(dummyData[i]);
        }
      }
    }
    // 전체 출력
    else if(input_word.indexof("목록") != -1){
      for(let i = 0; i < dummyData.length; i++){
        result.push(dummyData[i]);
      }
    }
  }
  // 잘못된 입력일 경우
  else{

  }

  console.log(result);

  return result;
}
