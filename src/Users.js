import { Component } from "react";
import './css/Band.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from "./components/search-box/search-box.component";

class Users extends Component {
    constructor() {
        super();

        this.state = {
            usersBand: [],
            //per renderla usufruibile all'interno dell'intero componente e non solo nell'evento onChange
            searchField: ''
        };
   
    }

    //metodo ciclo di vita dei componenti, si attiva solo quando il componente viene montato 
    componentDidMount() {
     

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            //con setState aggiorniamo lo state con l'elenco originale completo 
            .then((musicBand) => this.setState(
                ()=> {
                    return { usersBand: musicBand}
                },
                ()=> {
                    // console.log(this.state)
                }
            ))
    }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return {searchField};
        });
    }
    //render determina quale sarà l'interfaccia utente per questo componente
    //una volta aggiornato lo stato c'è di nuovo il rendering dell'UI
    //jsx è un'estensione della sintassi di js 
    render() {
   

        //inizializzo una costante 
        const {usersBand, searchField} = this.state;
        const {onSearchChange} = this;

        // const filteredBand = this.state.usersBand.filter((x) => {
        //     return x.name.toLocaleLowerCase().includes(this.state.searchField)})
        const filteredBand = usersBand.filter((x) => {
            return x.name.toLocaleLowerCase().includes(searchField)})

        return (
            <div >
                <div className="App App-prova">
                    <h2 className="title-app">Ricerca il tuo gatto</h2>
                    {/* <input className="search" type="search" placeholder="search" onChange={this.onSearchChange} /> */}
                    {/* <input className="search" type="search" placeholder="search" onChange={onSearchChange} /> */}
                    <SearchBox className='search' onChangeHandler={onSearchChange} placeholder='search cantanti'/>
                  {/*
                   ogni volta che si esegue il render questa funzione anonima viene creata e distrutta ogni volta, non è stata archiviata in memoria da nessuna parte 
                    problema di performance quindi possiamo creare un metodo *onSearchChange
                    onChange={(event)=> {
                        console.log({startingArray: this.state.usersBand})
                        console.log('stringa che scriviamo nell input', event.target.value);
                        const searchString = event.target.value.toLocaleLowerCase();

                        1. vogliamo accedere al valore di input
                        2. vogliamo archiviare il valore di input da qualche parte in cui il resto del componente ha accesso ad esso, non solo nella callback
                        quindi per renderlo più accessibile al resto del componente lo archiviamo nello 'state'
                        const searchField = event.target.value.toLocaleLowerCase();

                        const filteredBand = this.state.usersBand.filter((x) => {
                            return x.name.toLocaleLowerCase().includes(searchString)})

                        this.setState(()=> {
                            return {usersBand: filteredBand}
                        }, 
                        this.setState(()=> {
                            return {searchField}
                        }, 
                        ()=> {
                            console.log({endingArray:this.state.usersBand })
                        })
                    }}/>
                    */}

                    <CardList x={filteredBand } anything={['a', 'b']} />
                
                </div>
                {/* {this.state.usersBand.map((user) => {
                    return <div key={user.id}>
                            <h1>{user.name}</h1>
                    </div>
                })} */}
                {/* {filteredBand.map((user) => {
                    return <div key={user.id}>
                            <h1>{user.name}</h1>
                    </div>
                })} */}

                
            </div>
        )
    }
}
export default Users;