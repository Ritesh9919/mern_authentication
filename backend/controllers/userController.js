import asyncHandler from "express-async-handler";


export const authUser = asyncHandler(async(req, res)=> {
    return res.json({message:"auth users"})
})
