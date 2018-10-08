const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc, file) => {
            return `${acc} ${file} `;
        }, '');
        console.log(filesToString);
    });
};

module.exports.touch = (filePath, fileContents) => {
    fs.writeFile(filePath, fileContents, (err) => {
        if (err) throw err;

        console.log("File was successfully created");
    });
};

module.exports.mkdir = (folderPath) => {
    fs.mkdir(folderPath, (err) => {
        if (err) throw err;

        console.log("Folder was successfully created");
    });
};