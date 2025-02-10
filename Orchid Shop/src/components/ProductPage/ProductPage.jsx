import { useParams } from "react-router-dom";
import PopOut from "../PopOut/PopOut";

import orch1 from '../../assets/images/png/orch1.png';
import orch2 from '../../assets/images/png/orch2.png';
import orch3 from '../../assets/images/png/orch3.png';
import orch5 from '../../assets/images/png/orch5.png';

const products = {
  "0": { name: "Laptop", price: "$1000" },
  "1": { name: "Phone", price: "$500" },
};

const infos = [
  {
    name: "Purple Orchid",
    description:
      "An exotic and elegant addition to your home, this orchid boasts stunning purple blooms with intricate detailing.",
    price: "25.99",
    care: {
      watering: "Water once a week, allowing soil to dry slightly.",
      sunlight: "Prefers bright, indirect sunlight.",
      temperature: "Thrives in temperatures between 65°F and 75°F.",
      tips: "Fertilize every two weeks during the growing season."
    },
    image: orch5,
  },
  {
    name: "White Orchid",
    description:
      "A classic and timeless beauty, this white orchid brings a touch of elegance and purity to any space.",
    price: "30.99",
    care: {
      watering: "Water once a week, allowing soil to dry slightly.",
      sunlight: "Prefers bright, indirect sunlight.",
      temperature: "Thrives in temperatures between 65°F and 75°F.",
      tips: "Fertilize every two weeks during the growing season."
    },
    image: orch1,
  },
  {
    name: "Pink Orchid",
    description:
      "Delicate and charming, this pink orchid adds a soft and romantic touch to your home decor.",
    price: "28.99",
    care: {
      watering: "Water once a week, allowing soil to dry slightly.",
      sunlight: "Prefers bright, indirect sunlight.",
      temperature: "Thrives in temperatures between 65°F and 75°F.",
      tips: "Fertilize every two weeks during the growing season."
    },
    image: orch2,

  },
  {
    name: "Yellow Orchid",
    description:
      "Bright and cheerful, this yellow orchid brings a burst of sunshine and happiness to any room.",
    price: "27.99",
    care: {
      watering: "Water once a week, allowing soil to dry slightly.",
      sunlight: "Prefers bright, indirect sunlight.",
      temperature: "Thrives in temperatures between 65°F and 75°F.",
      tips: "Fertilize every two weeks during the growing season."
    },
    image: orch3,
  },
]

const ProductPage = () => {
  const { id } = useParams();
 
  return (
    <>
    <p>it works</p>
    <PopOut care={infos[id].care} name={infos[id].name} description={infos[id].description} price={infos[id].price} image={infos[id].image}></PopOut>
    </>
  );
};

export default ProductPage;
