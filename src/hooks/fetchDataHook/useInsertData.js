import Cookies from "js-cookie";
import baseUrl from "./baseUrl";

export const useInsertData = async (url, params) => {

  const config = {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'allow_headers': ['Content-Type', 'Authorization', 'language', 'api_password'],
      'Accept-Language': '*',
      'language': localStorage.getItem("i18nextLng"),
      'Authorization': `Bearer ${Cookies.get("api_token")}`,
    }
  }

  const res = await baseUrl.post(url, params, config);
  console.log("useInsertData-url: :", url)
  console.log("useInsertData-config: :", config)
  console.log("useInsertData-data: :", params)
  console.log("useInsertData-res: :", res)
  return res;
}

// ---------------------------------------------------------------------------------------
export const useInsertDataWithBody = async (url, params) => {

  const config = {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'allow_headers': ['Content-Type', 'Authorization', 'language', 'api_password'],
      'Accept-Language': '*',
      // 'language': localStorage.getItem("i18nextLng"),
      language: localStorage.getItem("i18nextLng"),
      'Authorization': `Bearer ${Cookies.get("api_token")}`,
    },
    params: params
  }

  const res = await baseUrl.post(url, params, config);
  console.log("*****useInsertDataWithBody-res:", res)
  return res;
}

