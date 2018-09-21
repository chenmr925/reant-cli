#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const fs = require("fs");
const path = require("path");
const copyFiles = require("./utils").copyFiles;

program
    .version('1.0.2')
    .description('create a react project with react-router rudex and ant design');

function appCreatedInfo(folder){
    console.log(chalk.green("Create "+ folder +" Success!"));
    console.log("Next to do:");
    console.log("  cd "+ folder);
    console.log("  npm install");
    console.log("  npm start");
    console.log(chalk.green("Enjoy it!"));
}

program
    .command('create <path>')
    .description('create a react project with react-router rudex and ant design')
    .action(function(folder) {
        if(!fs.existsSync(folder)) fs.mkdirSync(folder);
        copyFiles("../template", folder);
        appCreatedInfo(folder);
    });

program.parse(process.argv);

process.exit(1);
