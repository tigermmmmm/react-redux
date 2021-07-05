import axios from 'axios';
import {takeEvery, put, all, takeLatest} from 'redux-saga/effects';
import {FETCH_HOME_MULTIDATA} from './constants';
import {changeBannersAction,changeRecommendsAction} from './actionCreators';

function* fetchHomeMultidata(action) {
    const res = yield axios.get("http://123.207.32.32:8000/home/multidata")
    console.log(res);
    const banners = res.data.data.banner.list;
    const recommends = res.data.data.recommend.list;
    // yield put(changeBannersAction(banners));
    // yield put(changeRecommendsAction(recommends))
    yield all([
        yield put(changeBannersAction(banners)),
        yield put(changeRecommendsAction(recommends))
    ])
}


function* mySaga() {
    // takeEvery takeLatest区别：
    // takeLatest: 依次只能监听一个对应的action，最后一个
    // takeEvery：每个都执行
    // yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata)

    // 多个
    yield all([
        takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata),
        // yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
    ])
}

export default mySaga;