// Atrapa los errores de los métodos asincronos
module.exports = func => (req, res, next) =>
    Promise.resolve(func(req, res, next))
        .catch(next)
    
