import ButtonCard from "components/ButtonCard";
import NavBar from "components/Navbar";
import ProductCard from "components/ProductCard";
import './styles.css';

const Home = () => {
  return (
  <>
  <NavBar />
<div className="home-container">
 <ProductCard />
 <ButtonCard />
</div>
  </>
  );
};

export default Home;
