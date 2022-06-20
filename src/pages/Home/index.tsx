import ButtonCard from "components/ButtonCard";
import NavBar from "components/Navbar";
import ProductCard from "components/ProductCard";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <ProductCard />
        <Link to="/catalog">
          <ButtonCard />
        </Link>
      </div>
    </>
  );
};

export default Home;
