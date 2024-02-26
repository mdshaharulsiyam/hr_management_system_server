//imports
const GenarateToken = require("../../utils/GenarateToken");

// genarate and set cookie
const CookieToken = async (req, res) => {
    try {
        // get user data form response
        const userData = req.body;
        if (!userData?.useremail) {
            return res.send({ succes: false, msg: 'user email not found' })
        }
        //genarate tocken
        const token = GenarateToken(userData)
        //set token 
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        }).send({ succes: true, msg: 'jwt tocken genareted' })
    } catch (error) {
        res.send({ succes: false, msg: 'unable to genareted jwt tocken' })
    }
}
const ClearCookie = async(req,res)=>{
      //clear  token 
    res.clearCookie('tocken', { maxAge: 0 })
    .send({ succes: true })
}
module.exports = {CookieToken,ClearCookie}