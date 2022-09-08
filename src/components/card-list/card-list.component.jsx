import { Component } from "react";
import '../../css/card-list.styles.css';
import '../../css/card.styles.css';

class CardList extends Component {
    render() {
        console.log(this.props);
        console.log('render from CardList')

        // come si può cambiare il valore delle props?
        console.log(this.props.x)

        const { x } = this.props;
        return (
            <div className=" card-list">

                {x.map((cant) => {
                    const { name, id, email } = cant;
                    return (
                        <div key={id} className="card-container">
                            <div>
                                <img src={`https://robohash.org/${id}?set=set4&size=100x100`} alt={name} />
                            </div>
                            <h5>{name}</h5>
                            <p>{email}</p>
                        </div>
                    )
                })}
            </div >

        )
    }
}
export default CardList;