const { timeStamp } = require("console");

class plain {
    constructor(_Altitude,_HIS,_ADI){
        this.Altitude=_Altitude;
        this.HIS=_HIS;
        this.ADI=_ADI;
        this.JSONstr;
    }
    showData(){
        console.log('Altitude:' + this.Altitude + ' His:' + this.HIS + ' ADI:' + this.ADI);
    }
    getAltitude(Altitude){
        console.log('Altitude:')
        this.Altitude=Altitude;

    }
     converTojson(){
        var obj={Altitude: this.Altitude,HIS:this.HIS, ADI: this.ADI };
        this.JSONstr= JSON.stringify(obj);
    }
}
module.exports=plain;

//module.exports=function(_name,_engine){
//    this.name=_name;
//    this.engine=_engine;
//    this.showCar=function(){
//        console.log('Make ' + this.name + ' engine: ' + this.engine);
//    }
//}  