// Exporting a higher-order function that wraps an asynchronous function
module.exports = (theFunc) => (req, res, next) => {
  
    Promise.resolve(theFunc(req, res, next)).catch(next);
};
 