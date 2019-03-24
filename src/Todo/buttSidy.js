import React from 'react';
import check from '../img/check.ico'
import  check2 from '../img/check-mark.png';
function ButtSidy (props) {

const p = props;
    console.log(p.imgImpotant);
    const  imgTodo =  p.imgImpotant ? check2 : check;
        return (
            <button className="buttTodo"
                    onClick={p.buttImportant}>
                <img className="imgTodo"
                     src={imgTodo}

                />
            </button>
        )

};
export default ButtSidy;