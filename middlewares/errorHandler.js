// not Found

const notFound  = (req, res, next) => {
    const eror = new Error(`Not Found: ${req.originalUrl}`)
    res.status(404);
    next(error);
};

// Error Handler

const errorHandler = (err, req, res, next) => {
    
}