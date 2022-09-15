import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import { useState, useEffect } from "react";
const Componentefunzionale = () => {
    console.log('render')
    const [searchField, setSearchField] = useState(''); // [value, setValue]
    const [usersBand, setUsersBand] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState(usersBand);
    // console.log("searchField comp funzionale oggetto", {searchField}) //{searchField: 'a'}
    console.log("searchField comp funzionale", searchField) // searchField comp funzionale a

    console.log('render com fetch ');
    useEffect(()=> {
        const newFilteredBand = usersBand.filter((x) => {
            return x.name.toLocaleLowerCase().includes(searchField)});
            setFilteredUsers(newFilteredBand);
    }, [usersBand, searchField]);

    useEffect(()=> {
        console.log('render com fetch use effect');

        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        //con setState aggiorniamo lo state con l'elenco originale completo 
        .then((mus) => setUsersBand(mus))
    }, [])
    
    
    const onSearchChange = (event) => {

        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }



    return (
        <div>
            <h1>Componente funzionale</h1>
            <SearchBox className='search' onChangeHandler={onSearchChange} placeholder='search cantanti'/>
            <CardList x={filteredUsers } anything={['a', 'b']} />
        </div>
    )
}
export default Componentefunzionale;