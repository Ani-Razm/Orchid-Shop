import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/searchBar";
import Header2 from "../../components/Header2/Header2";
import ProductList from "../../components/ProductList/ProductList";

import PopOut from "../../components/PopOut/PopOut";
import OffersSection from "../../components/OffersSection/OffersSection";

import styles from './dashboard.module.css';

import orchid1 from '../../assets/images/orch1.jpg';
import orchid2 from '../../assets/images/orch2.jpg';
import orchid3 from '../../assets/images/orch3.jpg';
import orchid4 from '../../assets/images/orch4.jpg';
import orchid5 from '../../assets/images/orch5.jpg';
import orchid6 from '../../assets/images/orch6.jpg';
import orchid8 from '../../assets/images/orch8.jpg';
import orchid9 from '../../assets/images/orch9.jpg';
import orchid10 from '../../assets/images/orch10.jpg';
import orchid11 from '../../assets/images/orch11.jpg';

import orch1 from '../../assets/images/png/orch1.png';
import orch2 from '../../assets/images/png/orch2.png';
import orch3 from '../../assets/images/png/orch3.png';
import orch4 from '../../assets/images/png/orch4.png';
import orch5 from '../../assets/images/png/orch5.png';
import orch6 from '../../assets/images/png/orch6.png';
import orch7 from '../../assets/images/png/orch7.png';
import orch8 from '../../assets/images/png/orch8.png';
import orch9 from '../../assets/images/png/orch9.png';
import orch10 from '../../assets/images/png/orch10.png';

import { useState } from 'react';


const savedProducts = [
  { name: 'Orchid 1', image: orchid1, showPopOut: false },
  { name: 'Orchid 2', image: orchid2 },
  { name: 'Orchid 3', image: orchid3 },
  { name: 'Orchid 4', image: orchid4 },
  { name: 'Orchid 5', image: orchid5 },
];

const favoriteProducts = [
  { name: 'Orchid 1', image: orchid6 },
  { name: 'Orchid 2', image: orchid8 },
  { name: 'Orchid 3', image: orchid9 },
  { name: 'Orchid 4', image: orchid10 },
  { name: 'Orchid 5', image: orchid11 },
];

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

function Dashboard() {
  const [showPopOut, setShowPopOut] = useState(false);
  const toggle = () => {
    setShowPopOut(!showPopOut);
    console.log(showPopOut)
  }
  return (
    <div className={styles.dashboard}>
      <Sidebar></Sidebar>
      <SearchBar></SearchBar>
      <div className={styles.main}>
      <Header2></Header2>
        <div className={styles.saved}>
          <h3>Saved Products</h3>
          <ProductList products={savedProducts} />
        </div>
        <div className={styles.favorites}>
          <h3>featured Products</h3>
          <ProductList products={favoriteProducts} />
        </div>
      </div>
      

      <OffersSection></OffersSection>

      <PopOut
        show={showPopOut}
        care={infos[0].care}
        img={infos[0].image}
        name={infos[0].name}
        description={infos[0].description}
        price={infos[0].price}
        addToCart={() => console.log('Added to cart')}
        onClose={() => {
          console.log('Closed')
          toggle()
        }}
      />


    </div>
  )
}

export default Dashboard