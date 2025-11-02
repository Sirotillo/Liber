import categoryImg from "../assets/category.svg";
import newProductImg from "../assets/1984.png";
import audioImg from "../assets/audioImg.svg";

const category = [
  {
    id: 1,
    img: categoryImg,
  },
  {
    id: 2,
    img: categoryImg,
  },
  {
    id: 3,
    img: categoryImg,
  },
  {
    id: 4,
    img: categoryImg,
  },
  {
    id: 5,
    img: categoryImg,
  },
  {
    id: 6,
    img: categoryImg,
  },
];

const newProduct = [
  {
    id: 1,
    img: audioImg,
    title: "Hayvonlar fermasi",
    category: "SIYOSAT, SATIRA",
    rating: 4.9,
    coment: 312,
    description:
      "Bu roman inson tabiatidagi hokimiyat istagi va jamiyatdagi adolatsizlik haqida chuqur o‘yga soladi. Yozuvchi hayvonlar orqali siyosiy tizimni tanqid qiladi.",
    author: "Jorj Oruell",
    publisher: "Inson nashriyoti",
    year: 1945,
    price: "58 000",
    audioprice: "49 000",
    onlineprice: "42 000",
  },
  {
    id: 2,
    img: audioImg,
    title: "Sohibqiron Temur",
    category: "TARIX, BIOGRAFIYA",
    rating: 4.6,
    coment: 128,
    description:
      "Asarda buyuk sarkarda Amir Temurning hayoti, harbiy yurishlari va davlat boshqaruvidagi dono siyosati yoritilgan.",
    author: "Abdulla Qodiriy",
    publisher: "Sharq nashriyoti",
    year: 2005,
    price: "69 000",
    audioprice: "59 000",
    onlineprice: "50 000",
  },
  {
    id: 3,
    img: audioImg,
    title: "Alkimyogar",
    category: "PSIXOLOGIYA, MOTIVATSIYA",
    rating: 4.8,
    coment: 210,
    description:
      "Bu roman inson orzulari sari intilish, taqdir va ishonch haqida falsafiy hikoya bo‘lib, hayotga yangi nigoh bilan qarashga undaydi.",
    author: "Paulo Koelyo",
    publisher: "Adabiyot dunyosi",
    year: 1993,
    price: "72 000",
    audioprice: "61 000",
    onlineprice: "53 000",
  },
  {
    id: 4,
    img: audioImg,
    title: "Usta va Margarita",
    category: "FANTASTIKA, DRAMA",
    rating: 4.5,
    coment: 186,
    description:
      "Asarda ezgulik va yovuzlik, muhabbat va xiyonat, hayot va o‘lim mavzulari o‘zaro kesishadi.",
    author: "Mixail Bulgakov",
    publisher: "Badiiy nashriyot",
    year: 1967,
    price: "66 000",
    audioprice: "56 000",
    onlineprice: "47 000",
  },
  {
    id: 5,
    img: audioImg,
    title: "Qorong‘u o‘tov",
    category: "DETEKTIV, TRILLER",
    rating: 4.4,
    coment: 93,
    description:
      "Sirli qotillik, izlanish va haqiqatni topish yo‘lida kurash tasvirlangan hayajonli detektiv roman.",
    author: "Artur Konan Doyl",
    publisher: "Kitob dunyosi",
    year: 1987,
    price: "63 000",
    audioprice: "52 000",
    onlineprice: "43 000",
  },
];

const audioProduct = [
  {
    id: 1,
    img: newProductImg,
    title: "Hayvonlar fermasi",
    category: "SIYOSAT, SATIRA",
    rating: 4.9,
    coment: 312,
    description:
      "Bu roman inson tabiatidagi hokimiyat istagi va jamiyatdagi adolatsizlik haqida chuqur o‘yga soladi. Yozuvchi hayvonlar orqali siyosiy tizimni tanqid qiladi.",
    author: "Jorj Oruell",
    publisher: "Inson nashriyoti",
    year: 1945,
    price: "58 000",
    audioprice: "49 000",
    onlineprice: "42 000",
  },
  {
    id: 2,
    img: newProductImg,
    title: "Yulduzli tunlar",
    category: "TARIX, BIOGRAFIYA",
    rating: 4.8,
    coment: 190,
    description:
      "Mashhur yozuvchi Abdulla Qodiriy hayoti va ijodiga bag‘ishlangan tarixiy asar. Unda o‘zbek millatining o‘tgan asrdagi fojiasi tasvirlanadi.",
    author: "Pirimqul Qodirov",
    publisher: "Sharq nashriyoti",
    year: 1978,
    price: "70 000",
    audioprice: "60 000",
    onlineprice: "50 000",
  },
  {
    id: 3,
    img: newProductImg,
    title: "Ufq",
    category: "DRAMA, TARIXIY",
    rating: 4.6,
    coment: 147,
    description:
      "Asarda insoniylik, sadoqat va ozodlik uchun kurash kabi mavzular o‘z aksini topgan. Qahramonlar orzulari uchun sinovlardan o‘tadilar.",
    author: "Said Ahmad",
    publisher: "G‘afur G‘ulom nashriyoti",
    year: 1982,
    price: "62 000",
    audioprice: "55 000",
    onlineprice: "47 000",
  },
  {
    id: 4,
    img: newProductImg,
    title: "Alkimyogar",
    category: "MOTIVATSIYA, FALSAFA",
    rating: 4.9,
    coment: 502,
    description:
      "Santiago ismli cho‘pon o‘z orzusini topish uchun uzoq sayohatga chiqadi. Bu asar orzu, ishonch va hayot ma’nosi haqida.",
    author: "Paulo Koelo",
    publisher: "Global Books",
    year: 1988,
    price: "75 000",
    audioprice: "65 000",
    onlineprice: "55 000",
  },
  {
    id: 5,
    img: newProductImg,
    title: "Boy ota, kambag‘al ota",
    category: "IQTISOD, MOTIVATSIYA",
    rating: 4.7,
    coment: 428,
    description:
      "Muallif moliyaviy erkinlik, investitsiya va pul bilan to‘g‘ri munosabat haqida o‘z tajribasini baham ko‘radi.",
    author: "Robert Kiyosaki",
    publisher: "Alpha Press",
    year: 1997,
    price: "68 000",
    audioprice: "59 000",
    onlineprice: "48 000",
  },
];

export { category, newProduct, audioProduct };
