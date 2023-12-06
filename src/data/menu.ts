import Imgsample from "../assets/sample.png";

const sample = new Image();

export function getBase64FromImage(image: any) {
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;

  const context = canvas.getContext("2d");
  if (context) {
    context.drawImage(image, 0, 0, image.width, image.height);
    return canvas.toDataURL("image/png").split(",")[1];
  } else {
    console.error("Unable to get 2D context.");
    return "";
  }
}

// Set the source of the image
sample.src = Imgsample;
const base64String = getBase64FromImage(sample);

const menu = [
  {
    img: sample.src,
    name: "치킨",
    category: "메인",
    price: 20000,
  },
  {
    img: sample.src,
    name: "피자",
    category: "메인",
    price: 20000,
  },
  {
    img: sample.src,
    name: "피클",
    category: "추가",
    price: 0,
  },
  {
    img: sample.src,
    name: "콜라",
    category: "음료",
    price: 2000,
  },
  {
    img: sample.src,
    name: "치킨",
    category: "메인",
    price: 20000,
  },
  {
    img: sample.src,
    name: "피자",
    category: "메인",
    price: 20000,
  },
  {
    img: sample.src,
    name: "피클",
    category: "추가",
    price: 0,
  },
  {
    img: sample.src,
    name: "콜라",
    category: "음료",
    price: 2000,
  },
  { img: sample.src, name: "국밥", category: "메인", price: 1000 },
  { img: sample.src, name: "짜글이", category: "메인", price: 3000 },
  { img: sample.src, name: "칼국수", category: "메인", price: 5000 },
  { img: sample.src, name: "비빔밥", category: "메인", price: 10000 },
];

export default menu;
