import Jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token) {
      return res.status(403).send("Access Denied");
    }
    token = req.headers.authorization.split("")[1];

    const verified = Jwt.verify(token, "12345");
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const TestMiddleware = async (req, res, next) => {
  console.log("This is test middleware");
  next();
};

export default verifyToken;
