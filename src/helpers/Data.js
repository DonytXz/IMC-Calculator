import InfraPeso from "../assets/img/infrapeso.png";
import Normal from "../assets/img/normal.png";
import SobrePeso from "../assets/img/sobrepeso.png";
import Obesidad from "../assets/img/obesidad.png";
import ObesidadMor from "../assets/img/obesidadMor.png";

export let data = [
  {
    imgPath: InfraPeso,
    imc: 18.5,
    displayedImc: "< 18.5",
    title: "Infrapeso",
    color: "deep-blue"
  },
  {
    imgPath: Normal,
    imc: 24.9,
    displayedImc: "18.6 - 24.9",
    title: "Normal",
    color: "blue"
  },
  {
    imgPath: SobrePeso,
    imc: 29.9,
    displayedImc: "25 - 29.9",
    title: "Sobre Peso",
    color: "orange"
  },
  {
    imgPath: Obesidad,
    imc: 34.9,
    displayedImc: "30 - 34.9",
    title: "Obesidad",
    color: "deep-orange"
  },
  {
    imgPath: ObesidadMor,
    imc: 35,
    displayedImc: "> 35",
    title: "Obesidad Morbida",
    color: "dark-red"
  },
];

// export default data;
