import "./styles.css";

type Handles = {
    handleSearchInput: (e: { target: { value: string } }) => void;
    handleSearchButton: () => void;
};

const SearchField = ({ handleSearchInput, handleSearchButton }: Handles) => {
    return (
        <div className="header__container">
            <div className="search-field__container">
                <input
                    className="search-field__input"
                    type="text"
                    placeholder="Enter..."
                    onChange={handleSearchInput}
                ></input>
                <button className="search-field__button" onClick={handleSearchButton}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchField;
