const fs = require("fs")
const path = require("path")

exports.copyFiles = function copyFiles(from, to){
    const fromPath = path.resolve(__dirname, from),
        toPath = path.resolve(process.cwd(), to);
	const files = fs.readdirSync(fromPath);
    for(let i=0;i<files.length;i++){
        const file = files[i],
            fromFilePath = path.resolve(fromPath, file),
            toFilePath = path.resolve(toPath, file);
        const fileStats = fs.statSync(fromFilePath);
        if(fileStats.isDirectory()){
        	fs.mkdirSync(toFilePath);
        	copyFiles(fromFilePath, toFilePath);
        }else{
        	fs.copyFileSync(fromFilePath, toFilePath);
        }
    }
}

exports.writeFiles = function writeFiles(file, data){
    if(typeof data === "object"){
        data = JSON.stringify(data, null, 4);
    }
    fs.writeFileSync(file, data);
}