import { Component } from "react";
class CardList extends Component {
    render() {
        console.log(this.props);
        console.log('render from CardList')

        // come si può cambiare il valore delle props?
        console.log(this.props.x)

        const { x } = this.props;
        return (
            <div>

                {x.map((cant) => {
                    return <h1 key={cant.id}>{cant.name}</h1>
                })}

            </div>

        )
    }
}
export default CardList;