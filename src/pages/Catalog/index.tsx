import CatalogCard from "components/CatalogCard";
import SearchCard from "components/SearchCard";
import "./styles.css";

const Catalog = () => {
  return (
    <>
      <div className="catalog-container">
        <SearchCard />
        <div className="row">
          <div className="col-sm-6 col-xl-4">
            <CatalogCard />
          </div>
          <div className="col-sm-6 col-xl-4">
            <CatalogCard />
          </div>
          <div className="col-sm-6 col-xl-4">
            <CatalogCard />
          </div>
          <div className="col-sm-6 col-xl-4">
            <CatalogCard />
          </div>
          <div className="col-sm-6 col-xl-4">
            <CatalogCard />
          </div>
        </div>
      </div>
    </>
  );
};
export default Catalog;
