const router = require('../route/carMainRoute');
const utilities = require('../utilities/utility');
const db = require('../models');
const { cars } = require('../models');
const Cars = db.cars; 

getItemALL = async(req, res) => { 
    //can be an error due to database not matching just be careful me :/

    const cars = await Cars.findAll();
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
            utilities.FormatErrorResponse(res, 400, error.message); 

        

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
        utilities.FormatErrorResponse(res, 400, error.message);

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
        utilities.FormatErrorResponse(res, 400, error.message); 

    }

}
postItem = async(req, res) => {
    const cars = {
        Car_Desc: req.body.description,
        Car_Brand: req.body.brand,
        Car_ID: req.body.ID
    }
    try{
        if(cars.description== null || cars.brand==null || cars.cars_ID==null){
            throw new error("Missing specific requirements for post");
            await cars.create(cars);
            res.status(200).json(cars);
        }
            


    }
    catch(error){

        utilities.FormatErrorResponse(400, error.message)

    }
}

deleteItem = async(req, res) => {
   const ID = req.body.cars_ID;
   try{
        const deleted = await cars.destroy({where: { id : id }});
        if(deleted==0 ){
            throw new Error("Error the ID that was used to delete was not found");

        }
        res.status(res , 404 , error.message);


   }
   catch(error){

    utilities.FormatErrorResponse(res, 404, error.message); 

   }
}
updateItem = async(req, res ) => {
    const ID = req.body.id;
    const cars = {
        Car_Desc: req.body.description,
        Car_Brand: req.body.brand,
        Car_ID: req.body.ID
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

