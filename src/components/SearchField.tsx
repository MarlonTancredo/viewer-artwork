import "./styles.css";

type Handles = {
    handleKeyDown?: (e: { key: string }) => void;
    handleSearchInput?: (e: { target: { value: string } }) => void;
    handleSearchButton?: () => void;
};

const SearchField = ({ handleSearchInput, handleSearchButton, handleKeyDown }: Handles) => {
    return (
        <>
            <div className="search-field__container">
                <input
                    className="search-field__input"
                    type="text"
                    placeholder="Enter..."
                    onChange={handleSearchInput}
                    onKeyDown={handleKeyDown}
                ></input>
                <input type="button" className="search-field__button" onClick={handleSearchButton} value="Search" />
            </div>
        </>
    );
};

export default SearchField;
