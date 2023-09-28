import img1 from "../../assets/images/img1.webp";
import img2 from "../../assets/images/img2.jpg";

export const data = [
  {
    id: 1,
    img: img1,
    name: "Magdalena Mops",
    stage: "leader",
    shifts: 3,
    preferences: "no M",
  },
  {
    id: 2,
    img: img2,
    name: "Benedykta Kula",
    stage: "Helper",
    shifts: 3,
    preferences: "no W",
  },
  {
    id: 3,

    name: "Barnaba Miotła",
    stage: "Helper",
    shifts: 3,
    preferences: "no W",
  },
];

export const shiftsSystem = [
  "First shift", // only morning
  "Second shift", //only afternoon
  "Third shift", // night
  "Fixed Shift", // all 3 types
  "Rotating Shift", // shift can change during week
  "Split shift", // only 1 and 2
  "On-call shift",
  "Weekday/Weekend shift",
];
