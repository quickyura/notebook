import React, {Component} from 'react';

class Button extends Component {


    arr = [
        {name: 'all', button: 'All'},
        {name: 'active', button: 'Active'},
        {name: 'done', button: 'Done'}
    ];

    render() {
        const {filterAll} = this.props;
        const buttons = this.arr.map(({name, button}) => {
            const isActive = filterAll === name;
            const active = isActive ? 'active_butt' : '';
            return (
                <button type="button"
                        className={`butt_search ${active}`}
                        key={name}
                        onClick={()=>this.props.onactive(name)}
                    >
                    {button}
                </button>
            )
        });

        return (
            <div className="wrap_butt_search">
                {buttons}
            </div>
        )
    }
}

export default Button;
