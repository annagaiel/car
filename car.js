function Car(make, model, year){
  this.make  = make;
  this.model = model;
  this.year  = year;
  this.sayProperties = function(){
    alert(this.make + ' ' + this.model + ' ' + this.year);
  }
}

taxi = new Car('Toyota', 'RAV4', 2000);
taxi.sayProperties();
suv = new Car('Ford', 'Expedition', 2016);
suv.sayProperties();
