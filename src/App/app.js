import React, {Component} from 'react'
import Todo from '../Todo/todo'
import Input from '../Input/input'
import Header from '../Header/header'
import Add from '../InputAdd/inputAdd'

class App extends Component {
    counterId = 100;
    state = {
        todoArr: [
            this.createTodoList('Drink tee'),
            this.createTodoList('Drink coffee'),
            this.createTodoList('Drink tee'),
        ],
        filTex: '',
        filterAll: 'all'
    };


    createTodoList(lable) {
        return {
            label: lable,
            important: false,
            done: false,
            id: Date.now() + this.counterId++
        }
    };

    delItemList = (id) => {
        this.setState(({todoArr}) => {
            const idIndx = todoArr.findIndex((el) => el.id === id);

            const newArr = [
                ...todoArr.slice(0, idIndx),
                ...todoArr.slice(idIndx + 1)
            ];

            return {
                todoArr: newArr
            }
        })

    };
    toggleProperty = (obj, id, proper) => {
        const el = this.state.todoArr.findIndex((i) => i.id === id);
        const oldTodoArr = obj[el];
        const newTodoArrItem = {
            ...oldTodoArr,
            [proper]: !oldTodoArr[proper]
        };

        return [
            ...obj.slice(0, el),
            newTodoArrItem,
            ...obj.slice(el + 1)
        ]


    };
    finished = (id) => {
        this.setState(({todoArr}) => {
            return {
                todoArr: this.toggleProperty(todoArr, id, 'done')
            }
        })
    };
    importantList = (id) => {
        this.setState(({todoArr}) => {
            return {
                todoArr: this.toggleProperty(todoArr, id, 'important')

            }

        })
    };
    addlist = (text) => {
        const objItem = this.createTodoList(text);

        this.setState(({todoArr}) => {
            const newArr = [
                ...todoArr, objItem
            ];
            return {
                todoArr: newArr
            }

        })

    };
    filterText = (text) => {
        this.setState({filTex: text})
    };
    visebleTeaxt = (ArrItems, fil) => {
        if (ArrItems.length === 0) {
            return ArrItems;
        }
        return ArrItems.filter((item) => {
            return item.label.toLowerCase()
                .indexOf(fil.toLowerCase()) > -1;
        })
    };

    management = (items, filterAll) => {
        switch (filterAll) {
            case "all":
                return items;
            case 'active':
                return items.filter(item => !item.done);
            case 'done':
                return items.filter(item => item.done);
            default:
                return items
        }

    };
    onactive = (name) => {
        this.setState({filterAll: name})
    };

    render() {

        const {todoArr, filTex, filterAll} = this.state;
        const visebleTeaxt = this.management(this.visebleTeaxt(todoArr, filTex), filterAll);
        const counterDone = todoArr.filter((el) => el.done === true).length;
        const counterMore = todoArr.length - counterDone;
        console.log(visebleTeaxt)

        return (
            <div className="wrap_All">
                <Header
                    done={counterDone}
                    more={counterMore}
                />
                <Input
                    filterText={this.filterText}
                    onactive={this.onactive}
                    filterAll={filterAll}
                />
                <Todo todo={visebleTeaxt}
                      delItemList={this.delItemList}
                      finished={this.finished}
                      importantList={this.importantList}

                />
                <Add
                    listItem={this.addlist}
                />
            </div>
        )
    }
};
export default App;