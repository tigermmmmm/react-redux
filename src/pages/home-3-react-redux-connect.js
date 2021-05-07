import React, { PureComponent } from 'react';
// import {connect} from "../utils/connect";
import {connect} from "react-redux";
import {changeBannersAction, decAction, subAction, changeRecommendsAction} from "../store/actionCreators";
import axios from 'axios';

class home extends PureComponent {
    componentDidMount() {
        axios({
            url: 'http://123.207.32.32:8000/home/multidata'
        }).then(res => {
            const data = res.data.data;
            this.props.changeBanners(data.banner.list);
            this.props.changeRecommends(data.recommend.list);
        })
    }
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
    },
    changeBanners(banners) {
        dispatch(changeBannersAction(banners))
    },
    changeRecommends(recommends) {
        dispatch(changeRecommendsAction(recommends))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(home);