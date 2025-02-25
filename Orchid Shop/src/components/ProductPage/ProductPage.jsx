import { useParams } from "react-router-dom";
import PopOut from "../PopOut/PopOut";
import Navbar from "../Header/header";

import orch1 from '../../assets/images/png/orch1.png';
import orch2 from '../../assets/images/png/orch2.png';
import orch3 from '../../assets/images/png/orch3.png';
import orch5 from '../../assets/images/png/orch5.png';

const infos = [
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
    image: orch3,
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
    image: orch2,
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
    image: orch1,

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
  const { id } = useParams(); // Extracts the 'id' parameter from the URL
  const productId = Number(id); // converts it to integer

  return (
    <>
      <PopOut
        care={infos[productId].care} 
        name={infos[productId].name} 
        description={infos[productId].description} 
        // Render product details based on the ID
        price={infos[productId].price} 
        image={infos[productId].image} 
      />
    </>
  );
};

export default ProductPage;
