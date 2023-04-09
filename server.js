const express = require("express");
const mongoose = require("mongoose")
const Schema = mongoose.Schema
require("dotenv").config()
const app = express();
app.use(express)
const MONGO_URI= process.env.MONGO_URI
const PORT = process.env.PORT || 5000

mongoose.connect(MONGO_URI ,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log("DATABASE IS CONNECTED")})
.catch((err)=>{console.log(err)})

app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON ${PORT}`)
})


//create schema

const personSchema = new Schema({
name:{
type: "string",
required:true
},

age: {
    type: Number
}
,
favoriteFoods:{
    type:["string"]
}

},{ timestamps: true })

const Person = mongoose.model("Person", personSchema);

//create and save


// const personData= new Person({
//     name: 'khouloud',
//     age:24,
//     favoriteFoods:['lablebi','pizza','lasagne']
// })
// async function savePerson(){
//     try {
//         const data= await PersonData.save()
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
// }
//  //savePerson() ;



//Create Many Records with model.create()
// async function createPersons (){
//     try {
//         const data = await Person.create([
//             {name: 'hamadi', age:29 , favoriteFoods:['tastira','couscous','chawarma']},
//             {name: 'seif', age:30 , favoriteFoods:['canneloni','mloukhiya','chawarma']},
//             {name: 'haroun', age:27 , favoriteFoods:['suchi','pizza','ma9rouna']}
//         ])
//     } catch (err) {
//         console.log(err)
//     }
// }
// createPersons();



// Use model.find() to Search Your Database


// async function findPerson(){
//     try {
//         const data= await Person.find()
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
// }
// findPerson();

// Use model.findOne() to Return a Single Matching Document from Your Database
// async function findOnePerson(){
//          try {
//         const data= await Person.findOne()
//                console.log(data)
//            } catch (err) {
//                console.log(err)
//            }
//     }
// findOnePerson();

//Use model.findById() to Search Your Database By _id

// async function findById(){
//          try {
//         const data= await Person.findById({_id:'6432120e9b4b0f68b72ed9df'})
//                console.log(data)
//            } catch (err) {
//                console.log(err)
//            }
//     }
//     findById();




// let idPe= "6432120e9b4b0f68b72ed9df"
// Person.findByIdAndUpdate({_id:idPe}, {$push:{favoriteFoods:"hamburger"}}, async(err, res) => {
//     if (err) throw err
//     await res.save()
//     console.log(res);
//     }
//   );
// let idPe = "6432120e9b4b0f68b72ed9df";
// async function main() {
//     // Code that uses await here
//     try {
//       const updatedPerson = await Person.findByIdAndUpdate(idPe, {$push: {favoriteFoods: "hamburger"}}, {new: true});
//       console.log(updatedPerson);
//     } catch (err) {
//       console.error(err);
//     }
//   }
  
//   main();

// // find the document to update
// async function main(){


//     try {
//         const person = await Person.findOne({ name: 'Mona' });
//         Person.age = 26;
//         const updatedPerson = await person.save();
//         console.log(updatedPerson);
//       } catch (err) {
//         console.error(err);
//       }
// }
// main()
//   //Delete One Document Using model.findByIdAndRemove
//   let id ="62126721ad24d21edd1b696a"
// personModel.findByIdAndRemove(
//   {_id:id},
//   (err,data)=>{
// if (err)throw err
// console.log(data)
// })
// //MongoDB and Mongoose - Delete Many Documents with model.remove()
// personModel.deleteMany({name:"dhafer el abidine"},(err,res)=>{
//     if (err)throw err
//     .done()
//     console.log(res)
//   })
//   //Chain Search Query Helpers to Narrow Search Results
//   personModel.find({favoriteFoods:"kosksi"})
// .sort({name : "afe"})
// .limit(2)
// .select("-age")
// .exec((err, data) => {
//   if(err)
//    throw (err);
// }
//  console.log(data));