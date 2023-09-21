const python = require('python-shell')
module.exports.runPython = async function (code) {
  if (code === undefined || code === null) {
    console.log("Undefined code");
    return;
  }else{
    return python.PythonShell.runString(code, null).then(messages=>{
      if(messages.length ==0){
        return('An error has occured')
      }
      else{return messages;}
    });
  }
  
};