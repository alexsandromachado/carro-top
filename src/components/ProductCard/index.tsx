import { ReactComponent as MainImage } from 'assets/images/car-img.svg';
import "./styles.css";

const ProductCard = () => {
  return (
    <>
      <div className="main-container">
        <div className="image-container">
            <MainImage />
        </div>
        <div className="text-container">
          <h1>O carro perfeito para você</h1>
          <p>
            conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
