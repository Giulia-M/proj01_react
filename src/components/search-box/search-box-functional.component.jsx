
import '../../css/search-box.css';
const SearchBoxFunctional = ({ className, placeholder, onChangeHandler }) => {

    return (
        <div>
            <input className={`search-box ${className}`} type="search"
                placeholder={placeholder} onChange={onChangeHandler} />

        </div>
    )


}
export default SearchBoxFunctional;