export default {
    namespace: 'devicecode',
    state: {
        // 初始内容，有什么游戏什么国家
        game: [],
        country: [],
        network: [],
        platid: [],
        segment: [],

        value: {},

        taskData: {},
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
    effects: {
        *init(action, { put }) {
            debugger
            yield put({
                type: 'save',
            })
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/ads/devicecode') {
                    dispatch({ type: 'fetch', payload: query });
                }
            });
        },
    },
};
