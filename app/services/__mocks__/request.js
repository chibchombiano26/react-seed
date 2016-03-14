/*global jest*/

var data = [{
  title: "",
  link: "",
  image: ""
}];

export default function request(url) {
  
  var success = new Promise(function(resolve){
    
    setTimeout(function(){
      resolve(data);
    })
    
    jest.runAllTimers();
  })
  
  return success;
  
};
