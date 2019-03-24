import React, {Component} from 'react';
import TodoItem from './todoItem'
import '../stule.scss'
import ButtDei from './buttDel'
import ButtSidy from './buttSidy'


class Todo extends Component {
    state = {
        anim: "li_todo_active"
    };

    render() {
        const {todo, delItemList, importantList, finished} = this.props;

        const elm = todo.map((item) => {

            // setTimeout(() => {
            //     this.setState({anim: 'li_todo_active'})
            //
            //  }, 400);

            return (
                <li className={`li_todo  border_radius ${this.state.anim}`} key={item.id}>
                    <TodoItem
                        label={item.label}
                        important={item.important}
                        finished={() => finished(item.id)}
                        todoItem={item.done}
                    />

                    <div className="buttLi_todo">
                        <ButtDei delItemList={() => delItemList(item.id)}/>
                        <ButtSidy buttImportant={() => importantList(item.id)}
                                  imgImpotant={item.important}/>
                    </div>

                </li>
            )


        });

        return (
            <ul>
                {elm}
            </ul>
        )
    };
}

export default Todo;