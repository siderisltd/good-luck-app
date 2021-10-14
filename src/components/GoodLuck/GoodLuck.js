import React from 'react';
import { useParams } from "react-router";

export default function GoodLuck() {
  let { language } = useParams();

  language = language || "bg";
  window.location.href = `https://qphotography.eu/${language}/services/good-luck?t=p1ckd1yl7L5ck4m3`;

  return <h1></h1>;
}