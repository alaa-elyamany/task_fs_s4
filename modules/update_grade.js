const readGrades=require("../modules/read_grades");
const saveGrades=require("../modules/save_grades");
async function updateGrades(id,grade){
    if(!id||!grade){
         console.log("Invaild!");
        return;
    }
    try{
        const grades=await readGrades();
         const index=grades.findIndex((i)=>{
            return i.id===id;
        })
        grades[index].grade=grade;
        await saveGrades(grades);
        console.log("updated Grades");
        
    }catch(err){
         console.log(`Error${err.message}`);
    }
}
module.exports=updateGrades;