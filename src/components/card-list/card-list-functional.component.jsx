
import '../../css/card-list.styles.css';
import '../../css/card.styles.css';
import Cardfunc from '../card/card-functional.component';

const CardListfunc = ({ x }) => (
    <div className=" card-list">
        {x.map((cant) => {
            return (
                <Cardfunc cantante={cant} />
            )
        })}
    </div >
);

export default CardListfunc;