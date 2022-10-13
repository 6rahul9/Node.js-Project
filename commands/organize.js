function organizeFn(dirPath){
    // console.log("Organize command implemented for",dirPath);
    // 1. input -> diractory path
    let destPath;
    if (dirPath == undefined){
        //  console.log("Kindly enter the correct path");
        destPath = process.cwd();   // cwd -- current working directory 
            return;
    }else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist)
        
        {
            // 2. create--> organized files -> directory 
                destPath = path.join(dirPath, "organized_files");
                if(fs.existsSync(destPath)== false){
                    fs.mkdirSync(destPath);
                }
        }else{
            console.log("Kindly enter the correct path");
            return;
        }
    }
    organizeHelper(dirPath, destPath);
}

function organizeHelper (src, dest){
   // 3. identify categories of alll files present in that input diractory->
    let childNames = fs.readdirSync(src);
    // console.log(childNames);

    for(let i=0; i < childNames.length; i++){
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile){
            // console.log(childNames[i]);
            let category = getCategory(childNames[i]);
            console.log(childNames[i],"belongs to -->", category)
            // 4. copy / cut files to that organized directory inside of any of category folder
             sendFiles(childAddress, dest, category);
        }
    }
}

function sendFiles(srcFilePath, dest, category){
// 
let categoryPath = path.join(dest, category);
    if(fs.existsSync(categoryPath)== false){
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, "copid to", category);

}

function getCategory(name){
    let ext = path.extname(name);
    ext = ext.slice(1);
    for(let type in types){
        let cTypeArray = type[type];
        for(let i=0; i< cTypeArray.length; i++){
            if(ext == cTypeArray[i]){
                return type;
            }
        }
    }
    return "others";
}

module.exports = {
    organizeKey : organizeFn
}