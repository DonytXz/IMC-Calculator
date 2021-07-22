import InfraPeso from "../assets/img/infrapeso.png";
import Normal from "../assets/img/normal.png";
import SobrePeso from "../assets/img/sobrepeso.png";
import Obesidad from "../assets/img/obesidad.png";
import ObesidadMor from "../assets/img/obesidadMor.png";

export let data = [
  {
    imgPath: InfraPeso,
    imc: 0,
    imcTop: 18.5,
    displayedImc: "< 18.5",
    title: "Infrapeso",
    color: "deep-blue"
  },
  {
    imgPath: Normal,
    imc: 18.5,
    imcTop: 24.9,
    displayedImc: "18.5 - 24.9",
    title: "Normal",
    color: "blue"
  },
  {
    imgPath: SobrePeso,
    imc: 25,
    imcTop: 29.9,
    displayedImc: "25 - 29.9",
    title: "Sobre Peso",
    color: "orange"
  },
  {
    imgPath: Obesidad,
    imc: 30,
    imcTop: 34.5,
    displayedImc: "30 - 34.9",
    title: "Obesidad",
    color: "deep-orange"
  },
  {
    imgPath: ObesidadMor,
    imc: 35,
    imcTop: 50,
    displayedImc: "> 35",
    title: "Obesidad Morbida",
    color: "dark-red"
  },
];

// export default data;
