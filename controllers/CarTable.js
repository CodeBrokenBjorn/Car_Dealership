const router = require('../route/carMainRoute');
const utilities = require('../utilities/utility');
const db = require('../models');
const { cars } = require('../models');
const Cars = db.cars; 
// if need to add in future any database <= 

getItemALL = async(req, res) => { 
    //can be an error due to database not matching just be careful me :/

    const cars = await Cars.findAll();
    order:['id'],
    // include:[{
    //     <= add this once user & seller will be create
    // // }]
    res.status(200).json(cars);

    
}

getItemByBrand = async (req, res) => {
    const brand = req.params.value;
    try{
        const cars = await Cars.findAll(
            {where: {CarsBrand: brand}});
            if(cars.length == 0){
                throw new Error("Encounter error: Unable to find world to live. Check your brand" + brand);
            
            }
            res.status(200).json(cars);
        }
        catch(error){
            utilities.formatErrorResponse(res, 400, error.message); 

        }
        
    }

getItemByDesc = async(req, res) => {
    const desc = req.params.value;
    try{
        const cars = await Cars.findAll(
            {where: {Description: desc}});
            if(cars.length == 0){
                throw new Error("Ecounter error: Unable to find Description or any other values");

            }
            res.status(200).json(cars);

    }
    catch(error){
        utilities.formatErrorResponse(res, 400, error.message);

    }
}
getItemByID = async(req, res) => {
    const cars_ID = req.params.id;
    try{
        const cars = await findByPk(id);
        if(cars==null || cats.length ==0) {
            throw new Error('Encountered Error: Unable to find Value ID' +ID);
        } 
        res.status(200).json(cars);

    }
    catch(error){
        utilities.formatErrorResponse(res, 400, error.message); 

    }
}

postItem = async(req, res) => {
    const cars = {
        Car_Desc: req.body.Car_Desc,
        Car_Brand: req.body.Car_Brand,
        Car_ID: req.body.Car_ID
    };
    try{
        if(cars.Car_Desc== null || cars.Car_Brand==null || cars.Car_ID==null){
            throw new error("Missing specific requirements for post");
        }

        await Cars.create(cars);
        res.status(200).json(cars);
    }  

    
    catch(error){

        utilities.formatErrorResponse(res, 400, error.message)

    }
}

deleteItem = async(req, res) => {
   let car_id = req.body.id;
   try{
        const deleted = await cars.destroy({where: { Car_ID: car_id}});
        if(deleted==0 ){
            throw new Error("Error the ID that was used to delete was not found or it's been already nuked");

        }
        res.status(200).send("Book Deleted");


   }
   catch(error){

    utilities.formatErrorResponse(res, 404, error.message); 

   }
}
updateItem = async(req, res ) => {
    const cars = {
        Car_Desc: req.body.Car_Desc,
        Car_Brand: req.body.Car_Brand,
        Car_ID: req.body.Car_ID
    };
    try{
            if(cars.Car_Desc==null || cars.Car_Brand==null || cars.Car_ID==null){
                throw new Error("Missing Essential Components witnin the field");
    
            }
            await Cars.update(cars, {
                where: {
                    Car_ID: cars.Car_ID
                }
            })
            res.status(200).json(cars); 
    }
    catch(error){
        utilities.formatErrorResponse(res, 404, error.message);
    }
}

module.exports = {
    getItemALL, 
    getItemByBrand,
    getItemByDesc, 
    getItemByID,
    postItem,
    deleteItem,
    updateItem
}

