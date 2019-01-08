class CalcController{

    constructor(){

        this._displayCalc = "0";
        this._currentdate;
        this.initialize();
    }

    initialize(){

        let displayCalcEL = document.querySelector("#display");
        let dateEL = document.querySelector("#data");
        let timeEL = document.querySelector("#hora");

        displayCalcEL.innerHTML = "23456";
        dateEL.innerHTML = "02/05/2018";
        timeEL.innerHTML = "00:00";

    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor; 
    }

    get currentdate(){
        return this._currentdate;
    }

    set currentdate(valor){
        this._displayCalc = valor; 
    }
}