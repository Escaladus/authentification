import axios from "axios";
import { SECURED_INFORMATION } from "../protect/secure_data";

const API_KEY = SECURED_INFORMATION.YOUR_OWN_API_KEY;
const YOUR_LINK = SECURED_INFORMATION.YOUR_LINK;

async function authenticate(mode, email, password) {
  const url = `${YOUR_LINK}${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log(response.data);
}

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}

export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}

/* 
  
  // createUser...
  const response = await axios.post(URL_SIGN_UP + API_KEY, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  */
