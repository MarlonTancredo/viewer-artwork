import "./styles.css";

type Handles = {
    handleSearchInput: (e: { target: { value: string } }) => void;
    handleKeyDown?: (e: { key: string }) => void;
};

const SearchField = ({ handleSearchInput, handleKeyDown }: Handles) => {
    return (
        <>
            <div className="search-field__container">
                <input
                    className="search-field__input text--medium-color"
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearchInput}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </>
    );
};

export default SearchField;
