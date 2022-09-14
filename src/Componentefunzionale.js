import SearchBox from "./components/search-box/search-box.component";
import { useState } from "react";
const Componentefunzionale = () => {
    console.log('render')
    const [searchField, setSearchField] = useState(''); // [value, setValue]
    // console.log("searchField comp funzionale oggetto", {searchField}) //{searchField: 'a'}
    console.log("searchField comp funzionale", searchField) // searchField comp funzionale a

    const onSearchChange = (event) => {

        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }

    return (
        <div>
            <h1>Componente funzionale</h1>
            <SearchBox className='search' onChangeHandler={onSearchChange} placeholder='search cantanti'/>
        </div>
    )
}
export default Componentefunzionale;