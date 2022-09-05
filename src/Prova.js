import { Component } from 'react';
import './css/Band.css';
import CardList from './components/card-list/card-list.component';

// Il componente è una parte che governa l'interfaccia utente. 
// Un componente ha lo scopo di legare insieme la rappresentazione visiva e la rappresentazione funzionale dell'UI, oltre a legare insieme 
// porzioni riutilizzabili del codice in un unico segmento. 

class Prova extends Component {
    constructor() {
        super();
        this.state = {
            name: {firstName: 'Giulia', lastName: 'Maggio'},
            company: 'Avanade',
            buttonText: 'cambia nome'
        }
    }

    changeTextButton = (buttonText) => {
        this.setState({buttonText})
    }
    render() {
        const {buttonText} = this.state;
      return (
        <div className="App App-prova">
            <h1>Ciao {this.state.name.firstName} {this.state.name.lastName}, I work on {this.state.company}</h1>
            <div>

                <button 
                    onClick={() => {
                    // this.setState({name: {firstName: 'Veronica', lastName: 'Rossi'}})
                        this.setState(
                            ()=> {
                            return {
                                name: {firstName: 'Veronica', lastName: 'Rossi'}
                            };
                            },
                            ()=> {
                                console.log(this.state)
                            }
                        );
                        this.changeTextButton("Fatto!")
                }}>{buttonText}</button>
                <CardList />
            </div>
            
       
        </div>
      );
    }
}
export default Prova;



