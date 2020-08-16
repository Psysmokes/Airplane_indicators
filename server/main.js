
var readline = require('readline-sync');
const pressAnyKey = require('press-any-key');
var PlainClass= require("./Plain");
var servSend=require("./serv");


do{
var Altitude=readline.question("Altitude:")
}while(Altitude<-1 || Altitude>3001)
do{
var HIS=readline.question("HIS:")
}while(HIS<-1 || HIS>361)
do{
var ADI=readline.question("ADI:")
}while(ADI<-101|| ADI>101)




plain1= new PlainClass(Altitude,HIS,ADI);

//plain1.showData();
var obj={Altitude:Altitude,HIS:HIS, ADI:ADI };
var JSONstr= JSON.stringify(obj);
//console.log(JSONstr);



pressAnyKey()
    .then(()=> {servSend(JSONstr);})










