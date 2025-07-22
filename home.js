// import add from "./node.js"

// const add=require("./node.js")

// console.log(add(5,10));

// const path =require("path")

// console.log(path.basename("myfile.txt"))

// # path:-
const path =require("path")
console.log(path.basename("myfile.txt"))
console.log("Directory name:",__dirname)
console.log("full path:",path.resolve(__dirname,"myfile.txt"))

// #moment:-
const moment=require("moment")
console.log("current date and time:",moment().format("DD-MM-YYYY HH:mm:ss"))

// // #lodash:-
const ls=require("lodash")
console.log("Capitalize:",ls.capitalize("hello world!"))


// file write:-
const fs=require("fs")
fs.writeFile("myfile.txt","hello,mca-z2 class!",(err)=>{
    if(err)throw err;
        console.log("file has been saved!")
})

// #file read:-
fs.readFile("myfile.txt","utf8",(err,data)=>{
    if(err)throw err
    console.log("file content:",data)
})