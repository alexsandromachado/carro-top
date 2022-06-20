import "./styles.css";

const SearchCard = () => {
  return (
    <>
      <div className="basic-card main-search-container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control input-search"
            placeholder="Digite sua busca"
            aria-label="Digite sua busca"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              BUSCAR
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchCard;
