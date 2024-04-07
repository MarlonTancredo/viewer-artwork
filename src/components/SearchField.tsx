import "./styles.css";

type Handles = {
    handleSearchInput: (e: { target: { value: string } }) => void;
    handleKeyDown: (e: { key: string }) => void;
};

const SearchField = ({ handleSearchInput, handleKeyDown }: Handles) => {
    return (
        <>
            <input
                className="search-field__input"
                type="text"
                placeholder="Search..."
                onChange={handleSearchInput}
                onKeyDown={handleKeyDown}
            />
        </>
    );
};

export default SearchField;
