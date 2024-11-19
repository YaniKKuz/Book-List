import {
  setTitleFilter,
  selecteTtilteFilter,
  resetFilters,
  selecteAuthorFilter,
  setAuthorFilter,
  selecteOnlyFavorite,
  setOnliFavoriteFilter,
} from "../../redux/slices/filterSlice"
import { useDispatch, useSelector } from "react-redux"
import "./Filter.css"
const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selecteTtilteFilter)
  const titleAuthor = useSelector(selecteAuthorFilter)
  const onliFavoriteFilter = useSelector(selecteOnlyFavorite)
  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }
  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }
  const handleOnlyFavoriteFilterChange = () => {
    dispatch(setOnliFavoriteFilter())
  }
  const handleResetFilters = () => {
    dispatch(resetFilters())
  }
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by title..."
            onChange={handleTitleFilterChange}
            value={titleFilter}
          ></input>
        </div>
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by author..."
            onChange={handleAuthorFilterChange}
            value={titleAuthor}
          ></input>
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onliFavoriteFilter}
              onChange={handleOnlyFavoriteFilterChange}
            />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  )
}
export default Filter
