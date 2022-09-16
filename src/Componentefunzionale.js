
import CardListfunc from "./components/card-list/card-list-functional.component";
import SearchBoxFunctional from "./components/search-box/search-box-functional.component";
import { useState, useEffect } from "react";
const Componentefunzionale = () => {
    const [searchField, setSearchField] = useState(''); // [value, setValue]
    const [usersBand, setUsersBand] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState(usersBand);
    console.log('rend')
    useEffect(()=> {
        const newFilteredBand = usersBand.filter((x) => {
            return x.name.toLocaleLowerCase().includes(searchField)});
            setFilteredUsers(newFilteredBand);
    }, [usersBand, searchField]);


    //l'unica volta in cui dovrai chiamare questa callback è su mount, se un valore nelle dipendenze cambia, use effect cambierà questa funzione
    useEffect(()=> {
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
           
            <SearchBoxFunctional  className='search' onChangeHandler={onSearchChange} placeholder='search cantanti'/>
            <CardListfunc x={filteredUsers } anything={['a', 'b']} />
        </div>
    )
}
export default Componentefunzionale;