import React, { PureComponent } from 'react';
import store from "../store";
import {addAction} from "../store/actionCreators";

class about extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            counter: store.getState().counter
        }
    }

    componentDidMount() {
        this.unsubscribue = store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        })
    }

    componentWillUnmount() {
        this.unsubscribue();
    }


    render() {
        const {counter} = this.state;
        return (
            <div>
                <hr />
                <h1>about</h1>
                <h2>当前计数： {counter}</h2>
                <button onClick = {e => this.increment(1)}>+1</button>
                <button onClick = {e => this.addNumber(5)}>+5</button>
            </div>
        );
    }

    increment() {
        store.dispatch(addAction(1));
    }

    addNumber(num) {
        store.dispatch(addAction(num));
    }
}

export default about;