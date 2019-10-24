// 참조 (https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula)


module.exports.function = function getRadioInfo (title, self) {
  const dummyData = require("./data/radios.js");
  const console = require('console');
  
  // console.log(near);
  // console.log(point);
  console.log(self);
  
  let result = [];
  
  if(title != undefined){ //이름을 찾을 수 없을 때 
    let distance = 0;
    
    for(let i = 0; i < dummyData.length; i++){
      distance = getDistance(point.point.latitude, point.point.longitude,
                             dummyData[i].point.point.latitude, dummyData[i].point.point.longitude);      
      
      if(distance < 2){
        if(self.nameInfo != undefined){
          if(self.nameInfo.nickName){
            dummyData[i].username = self.nameInfo.nickName;
          }else{
            dummyData[i].username = self.nameInfo.structuredName;
          }  
        }else{
          dummyData[i].username = '사용자';
        }
              
        dummyData[i].flag = true;
        result.push(dummyData[i]);
      }   
    }
   
  }else{    
    for(let i = 0; i < dummyData.length; i++){
      result.push(dummyData[i]);
    }
  }
  
  return result;
}
