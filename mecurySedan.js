function fakeFunction (){
let ex = 32;
    if (this.fuel > 0) {
        let uh = 3;
        console.log("engine started...!!!");
        ex = 4;
    } 
    
    else {
        console.log("engine cannot start...");
     }

     uh = 2;
}
class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } 
        
        else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }
    accelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this + " has stopped moving");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    stop() {
        this.started = false;
    }

    drive() {
        accelerate();
    }
    brake() {
        decelerate();
    }

//This exports things you want to use from this "module", more info in readme
// module.exports = {
//     Vehicle
// }

    autoPark()
    {

    }

    autoDrive()
    {
      
    }

    typeOfVehicle(wheels) {
        if (this.numberOfWheels == 8 && 8 == wheels) {
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (this.numberOfWheels == 4 && 4 == wheels) {
            console.log(this.model + " " + this.make + " is a CAr");
        } else if (this.numberOfWheels == 2 && 2 == wheels) {
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Unknown type of vehicle");
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////

//this includes the vehicle class as a module
// const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)



//         }
// class Car extends Vehicle{
//     constructor(maximumPassengers, passenger, numberOfWheels, MaximumSpeed, fuel, scheduleServices){
//         maximumPassengers = 5;
//         passenger = 0;
//         numberOfWheels = 4;
//         maximumSpeed = 160;
//         fuel = 10;
//         scheduleService = false; 
//         super(make,model,year,color,mileage)
//     }




    class Car extends Vehicle{
        constructor(make,model,year,color,mileage){
            super(make,model,year,color,mileage)
            this.maximumPassengers = 5;
            this.passenger = 0;
            this.numberOfWheels = 4;
            this.maximumSpeed = 160;
            this.fuel = 10;
            this.scheduleService = false; 
    
        }
        loadPassenger(num){
            if(this.passenger<this.maximumPassenger){
                console.log('enough seats')
            }
            else{
                console.log('not enough seats')
            }
        }

        start(){
            if(this.fuel>0){
                console.log('started = true') 
                return this.started = true;
                
            }
            else{
                console.log('started = false')
                return this.started = false;
            }
        }       

        // How come I can't use return? My code turns unreachable...
       
        scheduleService(){
            if(mileage>3000){
                return this.scheduleService = true
            }
        }
       
    }
    


// Vehicle.loadpassenger()
// Vehicle.stop()
// Vehicle.scheduleService()

let c = new Car();
console.log(c)
c.start()
// console.log(v)









// class Car extends VehicleModule{
//     constructor(maximumPassengers, passenger, numberOfWheels, MaximumSpeed, fuel, scheduleServices){
//         maximumPassengers: 5;
//         passenger: 0;
//         numberOfWheels: 4;
//         maximumSpeed: 160;
//         fuel: 10;
//         scheduleService: false; 
//         super(make,model,year,color,mileage)
//     }

//     loadPassenger(num){
//         if(passenger<maximumPassenger)
//     }

//     start(){
//         if(fuel<0){
//             start == true;
//         }
//     }

//     scheduleService(mileage){
//         if(mileage>3000){
//             let timeForMaintenance == true;
//         }
//     }

    
// }