import jwt from "jsonwebtoken";

<<<<<<< HEAD
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log("Auth header received:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Not Authorized, Login Again",
=======
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Not Authorized",
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
    });
  }

  try {
<<<<<<< HEAD
    // ✅ CORRECT token extraction
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded token:", decoded);

    // userId attach to request
    req.userId = decoded.id;

    next();
  } catch (error) {
    console.log("JWT error:", error);
=======
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;
    next();
  } catch (error) {
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};

export default authMiddleware;