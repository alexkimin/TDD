import { useState, useEffect } from "react";
import axios from "axios";

const testApiCall = (url: string, cb: any, pender?: any) =>
  axios
    .get(url)
    .then((res: any) => {
      cb(res.data);
      typeof pender === "function" && pender();
    })
    .catch((_: any) => cb("API error!"));
// const testApiCall = (url: string, cb: any, pender?: any) => axios.get(url)
// .then((res: any) => setTimeout(() => {
//   cb(res.data);
//   typeof pender === 'function' && pender();
// }, 500))
// .catch((_: any) => setTimeout(() => cb('API error!'), 2000));

const useFetchData = (url: string): any => {
  const [data, setData] = useState<any>(undefined);

  useEffect(() => {
    testApiCall(url, setData);
    // eslint-disable-next-line
  }, []);

  return { data };
};

export { useFetchData, testApiCall };
