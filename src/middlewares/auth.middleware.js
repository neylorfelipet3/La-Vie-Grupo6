import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  const { token } = req.headers;

  const secret = "secret";

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ err: err.message });
    }

    req.psicologo = { psicologo_id: decoded.id };

    next();
  });
}
