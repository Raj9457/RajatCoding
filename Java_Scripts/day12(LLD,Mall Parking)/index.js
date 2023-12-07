class Vehicle{
    constructor(t,r){
        this.type=t;
        this.registration=r;
    }
}

class Car extends Vehicle{
    constructor(regno){
        super("Car",regno);
    }
}

class Bike extends Vehicle{
    constructor(regno){
        super("Bike",regno);
    }
}

class Truck extends Vehicle{
    constructor(regno){
        super("Truck",regno);
    }
}

class Slot {
    constructor(slot,type){
        this.slot=slot;
        this.type=type;
        this.isBooked=false;
    }
}

class ParkingSpot {
    constructor(floorNumber){
        this.floorNumber=floorNumber;
        this.parkingSpot=[];

        for(let i=0;i<3;i++){
            if(i==0){
                this.parkingSpot.push(new Slot(i,"Bike"))
            }
            else if(i==1){
                this.parkingSpot.push(new Slot(i,"Car"));
            }
            else{
                this.parkingSpot.push(new Slot(i,"Truck"))
            }
        }
    }
}


class Mall{
    constructor(number){
        this.floors=[];
        this.numberoffloors=number;
        for(let i=0;i<number;i++){
            this.floors.push(new ParkingSpot(i))
        }
    }

    parkVehicle(vehicle){
        let type=vehicle.type;
        let slot=this.findSlot(type);
        //console.log(type,slot)
        if(!slot){
            console.log("All slots full");
            return false;
        }
        slot.foundedSlot.isBooked=true;
        console.log(slot);
    }

    findSlot(vehicletype){
        for(let i=0;i<this.numberoffloors;i++){
            for(let j of this.floors[i].parkingSpot){
                //console.log(j);
                if(j.type==vehicletype&&!j.isBooked){
                    return {floorNumber:i,foundedSlot:j};
                }      
            }
        }
        return false; 
    }
}

let newvehicle=new Car("UP25 AB 0663");
//console.log(newvehicle)

let newMall=new Mall(3);
//console.log(newMall)
newMall.parkVehicle(newvehicle)
newMall.parkVehicle(newvehicle)
newMall.parkVehicle(newvehicle)
newMall.parkVehicle(newvehicle)

