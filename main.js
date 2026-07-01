// Student Grades Manager
const readGrades=require("./modules/read_grades");
const saveGrades=require("./modules/save_grades");
const addGrades=require("./modules/add_grade");
const deleteGrades=require("./modules/delete_grade");
const updateGrades=require("./modules/update_grade");
async function main(){
console.log(await readGrades());
await addGrades("Ali","Math",90);
console.log(await readGrades());
await deleteGrades(3);
console.log(await readGrades());
await updateGrades(4,89);
console.log(await readGrades());
}
main();
