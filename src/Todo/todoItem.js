import React, {Component} from 'react';
import '../stule.scss'


class TodoItem extends Component {

    render() {
        const {label, important, finished,todoItem} = this.props;
        const style = {
            color: important ? 'blue' : 'black'
        };

        let className = 'span_todo_item';
        todoItem ? className += ' done' : className = 'span_todo_item';

        return(
            <span className={className}
                     style={style}
                     onClick={finished}>
                      {label}
               </span>
        )

    }
}

export default TodoItem;