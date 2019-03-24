import React from 'react';

function ButtDei (props){
    const p = props;

        return (
            <button className="buttTodo"
                    onClick={p.delItemList}>
                <img className="imgDel"/>
            </button>

        )

}
export default ButtDei;