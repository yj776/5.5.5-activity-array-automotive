//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


class Car extends VehicleModule{
        constructor(make,model,year,color,mileage){
            this.maximumPassengers = 5;
            this.passenger = 0;
            this.numberOfWheels = 4;
            this.maximumSpeed = 160;
            this.fuel = 10;
            this.scheduleService = false; 
            super(make,model,year,color,mileage)
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
            if(this.fuel<0){
                start = true;
            }
            else{
                start = false;
            }
        }       

        // How come I can't use return? My code turns unreachable...
       
        scheduleService(){
            if(mileage>3000){
                return this.scheduleService = true
            }
        }
       
    }
    

VehicleModule.Vehicle.start()
VehicleModule.Vehicle.loadpassenger()
VehicleModule.Vehicle.stop()
VehicleModule.Vehicle.scheduleService()

console.log(VehicleModule)








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