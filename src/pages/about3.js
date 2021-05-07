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
                <h1>banners</h1>
                <ul>
                    {
                        props.banners.map((item, index) => {
                            return <li key={item.acm}>{item.title}</li>
                        })
                    }
                </ul>
                <h1>recommends</h1>
                <ul>
                    {
                        props.recommend.map((item, index) => {
                            return <li key={item.acm}>{item.title}</li>
                        })
                    }
                </ul>
            </div>
        );
}

const mapStateToProps = state => {
    return {
        counter: state.counter,
        banners: state.banners,
        recommend: state.recommend
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