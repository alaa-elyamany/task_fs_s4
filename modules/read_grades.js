const {readFile}=require("fs").promises;
const { log } = require("console");
const path=require("path");
const filepath=path.join(__dirname,"../data/grades.json");
 async function readGrades() {
    try{
       const data=await readFile(filepath,"utf-8");
       const grades=JSON.parse(data);
       return grades;
    }catch(err){
        console.log(`Error${err}`);
    }
 }

 module.exports=readGrades;