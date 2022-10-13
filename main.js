#!/usr/bin/env node 
let inputArr = process.argv.slice(2);
// const { dir } = require("console");
// console.log(inputArr)
// node main.js tree "directoryPath"
let fs = require("fs");
let path = require("path");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");
//  node main.js organize "directoryPath"
// node main.js help
let command = inputArr[0]

let type ={
    media : ["mp4","mkv"],
    archives : ['zip', '7z', 'rar','tar', 'gz', 'ar', 'iso', "xz" ],
    document: ['docx', 'doc', 'pdf', 'xlsx', 'odt','ods', 'odp','odg','odf', 'txt','ps', 'tex'],
    app:['exe', 'dmg', 'pkg', "deb"]
} 


switch (command){
    case "tree":
        treeObj.treeKey(inputArr[1])
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1])
        break;
    case "help":
        helpObj.helpKey()
        break;
    default:
        console.log("Please input right command ?");
        break;
}

// function treeFn(dirPath){
//     // console.log("Tree command implemented for",dirPath);
//     // let destPath;
//     if (dirPath == undefined){
//         //  console.log("Kindly enter the correct path");
     
//         treeHelper(   process.cwd(), " ")
//             return;
//     }else{
//         let doesExist = fs.existSync(dirPath, " ");
//         if(doesExist) {
//           treeHelper(dirPath)
//         }else{
//             console.log("Kindly enter the correct path");
//             return;
//         }
//     }
// }

// function treeHelper(dirPath, indent ){
// //  is file or folder
// let isFile = fs.lstatSync(dirPath).isFile();
// if(isFile == true) {
//     let fileName = path.basename(dirPath);
//     console.log(indent + "|---", fileName)
// }else{
//         let dirName = path.basename(dirPath)
//         console.log(indent + "\--" + dirName)
//         let childrens =  fs.readdirSync(dirPath)
//         for(let i=0; i< childrens.length; i++)
//             let childPath = path.join(dirPath, childrens[i]);
//             treeHelper(childPath, indent + "\t");
//     }
// }

// function organizeFn(dirPath){
//     // console.log("Organize command implemented for",dirPath);
//     // 1. input -> diractory path
//     let destPath;
//     if (dirPath == undefined){
//         //  console.log("Kindly enter the correct path");
//         destPath = process.cwd();   // cwd -- current working directory 
//             return;
//     }else{
//         let doesExist = fs.existSync(dirPath);
//         if(doesExist)
        
//         {
//             // 2. create--> organized files -> directory 
//                 destPath = path.join(dirPath, "organized_files");
//                 if(fs.existSync(destPath)== false){
//                     fs.mkdirSync(destPath);
//                 }
//         }else{
//             console.log("Kindly enter the correct path");
//             return;
//         }
//     }
//     organizeHelper(dirPath, destPath);
// }

// function organizeHelper (src, dest){
//    // 3. identify categories of alll files present in that input diractory->
//     let childNames = fs.readdirSync(src);
//     // console.log(childNames);

//     for(let i=0; i < childNames; i++){
//         let childAddress = path.join(src, childNames[i]);
//         let isFile = fs.lstatSync(childAddress).isFile();
//         if(isFile){
//             // console.log(childNames[i]);
//             let category = getCategory(childNames[i]);
//             console.log(childNames[i],"belongs to -->", category)
//             // 4. copy / cut files to that organized directory inside of any of category folder
//              sendFiles(childAddress, dest, category);
//         }
//     }
// }

// function sendFiles(srcFilePath, dest, category){
// // 
// let categoriesPath = path.join(dest, category);
//     if(fs.existsSync(categoriesPath)== false){
//         fs.mkdirSync(categoriesPath);
//     }
//     let fileName = path.basename(srcFilePath);
//     let destFilePath = path.join(categoriesPath, fileName);
//     fs.copyFileSync(srcFilePath, destFilePath);
//     console.log(fileName, "copid to", category);

// }

// function getCategory(name){
//     let ext = path.extname(name);
//     ext = ext.slice(1);
//     for(let type in types){
//         let cTypeArray = type[type];
//         for(let i=0; i< cTypeArray.length; i++){
//             if(ext == cTypeArray[i]){
//                 return type;
//             }
//         }
//     }
//     return "others";
// }

// //  Help fn
// function helpFn(){
//     console.log(`
//         List of all commands :
//             node main.js tree "directoryPath"
//             node main.js organize "directoryPath"
//             node main.js help`);
// }

// module.exports = {
//     helpkey : helpFn
// }