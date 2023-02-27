const cors = require('cors');

const allowedOrigins = ['http://localhost']; // en este arreglo puedo colocar los dominios que permitire que hagan solicitudes

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      // Si la solicitud proviene de un dominio permitido o si no se proporciona el encabezado Origin
      // por motivos de la tarea se coloco que si no se proporcionaba el encabezado origin
      // permitiera la entrada de cualquier peticion
      callback(null, true);
    } else {
      // De lo contrario, rechazar la solicitud
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Permitir cookies y encabezados de autenticación
  maxAge: 3600, // Cachear las opciones CORS durante 1 hora
  preflightContinue: false, // Rechazar las solicitudes con opciones inválidas
  optionsSuccessStatus: 200 // Establecer el código de estado para las solicitudes OPTIONS exitosas
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
