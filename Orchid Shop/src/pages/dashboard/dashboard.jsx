import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/searchBar";
import Header2 from "../../components/Header2/Header2";
import ProductList from "../../components/ProductList/ProductList";

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

const savedProducts = [
  { name: 'Orchid 1', image: orchid1 },
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



function Dashboard() {
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
    </div>
  )
}

export default Dashboard