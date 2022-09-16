import { Component } from "react";
import '../../css/card-list.styles.css';
import '../../css/card.styles.css';
import Card from "../card/card.component";
class CardList extends Component {
    render() {
        // console.log(this.props);
        // console.log('render from CardList')

        // come si può cambiare il valore delle props?
        console.log(this.props.x)

        const { x } = this.props;
        return (
            <div className=" card-list">

                {x.map((cant) => {

                    return (
                        <Card cantante={cant} />
                    )
                })}
            </div >

        )
    }
}
export default CardList;