const readGrades=require("../modules/read_grades");
const saveGrades=require("../modules/save_grades");
async function deleteGrades(id){
    if(!id){
        console.log("Invaild!");
        return;
    }
    try{
        const grades=await readGrades();
        const index=grades.findIndex((i)=>{
            return i.id===id;
        })
        if(index===-1){
            console.log("Invaild!");
        return;
        }
        grades.splice(index,1);
        await saveGrades(grades);
    }catch(err){
        console.log(`Error${err.message}`);
        
    }
}
module.exports=deleteGrades;