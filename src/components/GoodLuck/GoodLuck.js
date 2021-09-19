
import React from 'react';
import { useParams } from "react-router";

export default function GoodLuck() {
  let { language } = useParams();

  language = language || "bg";
  window.location.href = `https://qphotography.eu/${language}/services/good-luck`;

  return <h1></h1>;
}