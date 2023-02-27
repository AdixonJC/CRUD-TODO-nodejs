// ! HE agregado este middleware a modo de practica, puede que sea innecesario

exports.validateEntity = (req, res, next) => {

    const ip = req.connection.remoteAddress ||
               req.headers['x-forwarded-for'] ||
               req.headers['x-real-ip'] ||
               req.headers['x-forwarded-host']
    console.log('La solicitud vino de: ', ip); //hecho por cuestiones de practica, estaba provando esto, no es necesario tenerlo

    if(!(req.headers["user-agent"] === 'PostmanRuntime/7.30.0') ) {
        res.status(404).json({
            status: "error",
            message: "this entity has not been auth on this request"
        });
        return;
    } 
    next();
};