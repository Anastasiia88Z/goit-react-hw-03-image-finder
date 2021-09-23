import PropTypes from 'prop-types';
import s from './SerchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const handleSearch = e => {
    e.preventDefault();
    onSearch(e.target.elements.pictureName.value.toLowerCase());
  };
  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSearch}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default SearchBar;

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
