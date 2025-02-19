const mongoose = require("mongoose");
const Chat  = require("./models/chat.js");

main().then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});

async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats = [
    {
      from: "Raj",
      to: "Dev",
      msg: "send me notes for the exam",
      created_at: new Date(),
    },
    {
        from: "Rohit",
        to: "Mohit",
        msg: "teah me Js callbacks",
        created_at: new Date(),
    },
    {
        from: "Amit",
        to: "Sumit",
        msg: "all the best!",
        created_at: new Date(),
    },
    {
        from: "anita",
        to: "ramesh",
        msg: "bring me some fruits",
        created_at: new Date(),
    },
    {
        from: "tony",
        to: "peter",
        msg: "Lets go for this",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);
