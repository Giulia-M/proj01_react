import { Component } from "react";
import '../../css/search-box.css';
class SearchBox extends Component {
    render() {

        return (
            <div>
                <input className={`search-box ${this.props.className}`} type="search"
                    placeholder={this.props.placeholder} onChange={this.props.onChangeHandler} />

            </div>
        )
    }
}

export default SearchBox;