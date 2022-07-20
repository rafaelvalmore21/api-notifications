const response = {
    error: false,
    code: 200,
    message: 'OK',
   };

const getNotifications = async (req, res) => {
    try{
        console.log(res.send("Servicio rest disponible"));
    }catch(error){
        res.status(500);
        res.send(error.message);
    }    
};

const notification = async (req, res) => {
    try{
        console.log("**********Headers************");
        console.log(req.headers);
        console.log("************Body**************");
        console.log(req.body);    
        res.send(response);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};
export const methods={
    getNotifications,
    notification
};