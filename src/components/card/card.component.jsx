import { Component } from "react";
import '../../css/card.styles.css';
class Card extends Component {
    render() {
        const { id, name, email } = this.props.cantante;
        return (
            <div key={id} className="card-container">
                <div>
                    <img src={`https://robohash.org/${id}?set=set4&size=100x100`} alt={name} />
                </div>
                <h5>{name}</h5>
                <p>{email}</p>
            </div>
        )
    }

}
export default Card