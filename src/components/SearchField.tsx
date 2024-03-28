import "./styles.css";

type Handles = {
    handleKeyDown?: (e: { key: string }) => void;
    handleSearchInput?: (e: { target: { value: string } }) => void;
};

const SearchField = ({ handleSearchInput, handleKeyDown }: Handles) => {
    return (
        <>
            <div className="search-field__container">
                <input
                    className="search-field__input"
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
