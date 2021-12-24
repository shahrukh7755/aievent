import jwt from 'jsonwebtoken';

const generateToken =(id)=>{
   return jwt.sign({ id }, process.env.JWT_SECRET||"sdfgsdfg343",{
        expiresIn:'10d'
    });
}

export default generateToken;