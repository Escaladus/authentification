import axios from "axios";
import { SECURED_INFORMATION } from "../protect/secure_data";

const API_KEY = SECURED_INFORMATION.YOUR_OWN_API_KEY;
const URL = SECURED_INFORMATION.YOUR_OWN_LINK;

async function createUser(email, password) {
  const response = await axios.post(URL + API_KEY, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
}
