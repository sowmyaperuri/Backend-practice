
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err)) //Promise.resolve(value) is a static method called directly on the global Promise class. 
        // You use it to take a regular piece of data (like a string, object, or number) and immediately wrap it inside a fulfilled promise structure.

    }
}


export {asyncHandler}











// const asyncHandler = () => {}
// const asyncHandler = (fn) => () =>  {}
// const asyncHandler = (fn) => async() => {}


// const asyncHandler = (fn) => async(req, res, next) => 
//     {
//         try{
//             await fn(req, res, next)
//         } catch(error){
//             res.status(err.code || 500).json({
//                 success: false,
//                 message: err.message
//             })
//         }
//}

