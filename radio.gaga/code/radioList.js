module.exports.function = function radioList(date, input_start, input_end, input_dj, input_title, input_word) {
  const dummyData = require("./data/radios.js");
  const console = require('console');
  console.log("date:" + date);
  console.log("startTime:" + input_start);
  console.log("endTime:" + input_end);
  console.log("dj:" + input_dj);
  console.log("title:" + input_title);
  console.log("word:" + input_word);

  //console.log(ZonedDateTime.getDateTime());

  let result = [];

  if(typeof input_start != "undefined"){

  }
  else if(typeof input_dj != "undefined"){
    for(let i = 0; i < dummyData.length; i++){
      if((dummyData[i].dj).indexof(input_dj) != -1){
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
    // 전체 출력
    if(input_word.indexof("목록")){
      for(let i = 0; i < dummyData.length; i++){
        result.push(dummyData[i]);
      }
    }
  }

  console.log(result);

  return result;
}
