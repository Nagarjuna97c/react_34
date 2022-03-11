import './index.css'

import {BiSearchAlt2} from 'react-icons/bi'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    changeSearchInput,
    changeCategory,
    changeRating,
    clearFilters,
    category,
    rating,
  } = props

  const sendSearchInput = event => {
    if (event.key === 'Enter') {
      changeSearchInput(event.target.value)
    }
  }

  const getListElements = item => {
    const classNamee =
      item.ratingId === rating ? 'rating-text selected' : 'rating-text'
    return (
      <>
        <img
          src={item.imageUrl}
          alt={`rating ${item.ratingId}`}
          className="rating-image"
          onClick={() => changeRating(item.ratingId)}
        />
        <p className={classNamee}>&amp; up</p>
      </>
    )
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          onKeyDown={sendSearchInput}
        />
        <BiSearchAlt2 className="search-icon" />
      </div>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">
        {categoryOptions.map(eachItem => (
          <li
            key={eachItem.categoryId}
            className={
              category === eachItem.categoryId
                ? 'category-item selected'
                : 'category-item'
            }
            onClick={() => changeCategory(eachItem.categoryId)}
          >
            <p>{eachItem.name}</p>
          </li>
        ))}
      </ul>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">
        {ratingsList.map(eachItem => (
          <li key={eachItem.ratingId} className="rating-item">
            {getListElements(eachItem)}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="clear-filters-button"
        onClick={() => clearFilters()}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
