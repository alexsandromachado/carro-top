/* eslint-disable no-unreachable */
import { ReactComponent as MainImage } from "assets/images/car-img-red.svg";

import "./styles.css";

const CatalogCard = () => {
  return (
    <div className="basic-card main-card">
      <div className="img-card">
        <MainImage />
      </div>
      <div className="content-card">
        <h1>Audi Supra TT</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
      </div>
      <button type="button" className="btn btn-primary">
        COMPRAR
      </button>
    </div>
  );
};
export default CatalogCard;
