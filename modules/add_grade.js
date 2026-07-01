const readGrades=require("../modules/read_grades");
const saveGrades=require("../modules/save_grades");
async function addGrades(name, subject, grade) {
    if(!name||!subject||!grade){
        console.log("Invaild! Add the data");
        return;
    }
    try{
        const data=await readGrades();
        let newgrade={id:data[data.length-1].id + 1,name,subject,grade};
        data.push(newgrade);
        await saveGrades(data);
        console.log("Added successfully");
    }catch(err){
        console.log(`Error`);
    }

}
module.exports=addGrades;