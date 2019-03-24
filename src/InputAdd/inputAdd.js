import React, {Component} from 'react';
import ButtonAdd from '../InputAdd/inputAddButtom'

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    inpVal = (e) => {
        this.setState({value: e.target.value})

    };
    submit = (e) => {
        e.preventDefault();
        this.props.listItem(this.state.value);
        this.setState({
            value: ''

        })

    };

    render() {

        return (

            <form className="wrap_inputAdd "
                  onSubmit={this.submit}>
                <input type="text" placeholder="hello" className="inputAdd"
                       onChange={this.inpVal}
                       value={this.state.value}/>
                <ButtonAdd/>
            </form>
        )
    }
}

export default Add;