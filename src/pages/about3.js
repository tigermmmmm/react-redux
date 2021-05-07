import React from 'react';
// import {connect} from "../utils/connect";
import {connect} from "react-redux";
import {addAction} from "../store/actionCreators";

function About(props) {
        const {counter} = props;
        return (
            <div>
                <hr />
                <h1>about2</h1>
                <h2>当前计数： {counter}</h2>
                <button onClick = {e => props.addAction(1)}>+1</button>
                <button onClick = {e => props.addAction(5)}>+5</button>
            </div>
        );
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
};
const mapDispatchToProps = dispatch => {
    return {
        addAction: function(num) {
            dispatch(addAction(num))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(About);