import React, { PureComponent } from 'react';
import {connect} from "../utils/connect";
import {decAction, subAction} from "../store/actionCreators";

class home extends PureComponent {
    render() {
        const {counter} = this.props;
        return (
            <div>
                <h1>home2</h1>
                <h2>当前计数： {counter}</h2>
                <button onClick = {e => this.props.decrement()}>-1</button>
                <button onClick = {e => this.props.subNumber(5)}>-5</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = dispatch => ({
    decrement() {
        dispatch(decAction());
    },
    subNumber(num) {
        dispatch(subAction(num))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(home);