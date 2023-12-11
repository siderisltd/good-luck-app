import React from 'react';
import { useParams } from "react-router";
import axios from 'axios';

export default function GoodLuck() {
  let { language, backgroundId } = useParams();
  let baseAddress = 'https://qphotographyclient.azurewebsites.net';

  if (!language) {
    axios.get('https://ipapi.co/json/').then((response) => {
        let data = response.data;
        language = data?.country_code;
    }).catch((error) => {
        console.log(error);
        language = "en";
    }).finally(() => {
      language = language || "en";
      window.location.href = `${baseAddress}/${language.toLowerCase()}/services/good-luck?t=p1ckd1yl7L5ck4m3&b=${backgroundId}&c=${language}`;
    });
  } else {
    window.location.href = `${baseAddress}/en/services/good-luck?t=p1ckd1yl7L5ck4m3&b=${backgroundId}&c=en`;
  }

  return <h1></h1>;
}