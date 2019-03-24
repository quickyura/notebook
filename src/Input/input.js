import React, {Component} from 'react';
import Button from './button'

class Input extends Component {
    state = {
        value: ''
    };
    inVal = (e) => {
        const value =  e.target.value;
        this.setState({value});
        this.props.filterText(value);
    };


    render() {
        const {filterAll,onactive} =this.props;
        return (
            <form className="wrap_search ">
                <input className="search border_radius"
                       placeholder="search" type="text"
                       value={this.state.value}
                       onChange={this.inVal}
                />
                <Button
                    filterAll={filterAll}
                    onactive={onactive}
                    />
            </form>
        )
    }
}

export default Input;