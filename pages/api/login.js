import jwt from "jsonwebtoken";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import nookies from 'nookies';

export default function handler(req, res) {
  const { username, password } = req.body;
  const { method } = req;

  if (!username || !password) {
    return res.json({ status: 422, error: "Username and Password empty" });
  }

  switch (method) {
    case 'POST':
      if (username === 'admin' && password === 'password') {
        const token = jwt.sign({ id: 1, username: username }, process.env.JWT_SECRET );
        setCookie('cookieUsername', username, { req, res, maxAge: 60 * 60 * 24 });
        setCookie('cookieToken', token, { req, res, maxAge: 60 * 60 * 24 });
        // nookies.set(null, 'cookieUsername', username, {})
        // nookies.set(null, 'cookieToken', token, {})
        res.status(200).json({ status: 200, token });
      } else {
        return res.json({ status: 422, error: "Username and Password not match" });
      }
      break;
  }
}
