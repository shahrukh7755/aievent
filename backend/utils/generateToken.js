import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "helloWorld", {
    expiresIn: "10d",
  });
};

export default generateToken;
