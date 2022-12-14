
const names= ['Alice', 'Bob', 'Eve'];
console.log(['ali',...names]); // ['ali', 'Alice', 'Bob', 'Eve']
//read data from excel file
const xlsx = require('xlsx');
/*const workbook = xlsx.readFile('data.xlsx');
const sheet_name_list = workbook.SheetNames;
const xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(xlData);*/
//write data to excel file
/*const newWB = xlsx.utils.book_new();
const newWS = xlsx.utils.json_to_sheet([
    {id:1,name:"John",surname:"Doe",title:"Mr"},
    {id:2,name:"Jane",surname:"Edo",title:"Mrs"}
    ]);
xlsx.utils.book_append_sheet(newWB, newWS, "Sheet1");
xlsx.writeFile(newWB, 'data.xlsx');*/

//read data from excel file

const workbook = xlsx.readFile('data.xlsx');
const sheet_name_list = workbook.SheetNames;
const xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(xlData);