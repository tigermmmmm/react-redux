import React, { PureComponent } from 'react';
import store from "../store";
import {decAction, subAction} from "../store/actionCreators";

class home extends PureComponent {
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
                <h1>home</h1>
                <h2>当前计数： {counter}</h2>
                <button onClick = {e => this.decrement(1)}>-1</button>
                <button onClick = {e => this.subNumber(5)}>-5</button>
            </div>
        );
    }

    decrement() {
        store.dispatch(decAction());
    }

    subNumber(num) {
        store.dispatch(subAction(num));
    }
}

export default home;