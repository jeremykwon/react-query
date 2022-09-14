import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://0.0.0.0:5000",
  headers: { "Cache-Control": "no-cache" },
});

export default async function sendAPI({
  url,
  method = "get",
  options = {},
}) {
  console.log(method)
  try {
    const res = await axios({
      url,
      method,
      ...options,
    });

    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
