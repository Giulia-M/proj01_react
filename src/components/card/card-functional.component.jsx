
import '../../css/card.styles.css';
const Cardfunc = ({ cantante }) => {
    const { name, id, email } = cantante;
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
export default Cardfunc;