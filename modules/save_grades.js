const {writeFile}=require("fs").promises;
const path=require("path");
const filepath=path.join(__dirname,"../data/grades.json");
 async function saveGrades(grades) {
    try{
       const data=writeFile(filepath,JSON.stringify(grades,null,2));
       return data;
    }catch(err){
        console.log(`Error${err.message}`);
    }
 }

 module.exports=saveGrades;