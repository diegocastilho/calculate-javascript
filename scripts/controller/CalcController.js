class CalcController{

    constructor(){

        this._locale = 'pt-BR';
        this._displayCalcEL = document.querySelector("#display");
        this._dateEL = document.querySelector("#data");
        this._timeEL = document.querySelector("#hora");
        this._currentdate;
        this.initialize();
    }

    initialize(){
        this.setDisplayDateTime();

        setInterval(() =>{
            this.setDisplayDateTime();
            

        }, 1000);

    }

    initButtonsEvents(){

       let buttons = document.querySelectorAll("#buttons > g, #parts > g");
       
    }

    setDisplayDateTime(){
        this.displayDate = this.currentdate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year:"numeric"
        });
        this.displayTime = this.currentdate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEL.innerHTML;
    }

    set displayTime(value){
        return this._timeEL.innerHTML = value;
    }

    get displayDate(){
        this._dateEL.innerHTML;
    }

    set displayDate(value){
        return this._dateEL.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEL.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEL.innerHTML = value; 
    }

    get currentdate(){
        return new Date();
    }

    set currentdate(value){
        this._displayCalc = value; 
    }
}