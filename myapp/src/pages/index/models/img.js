export default{
    namespace: 'imgUpload',
    state:{
        isUpload: false
    },
    reducers: {
        save(state,action){
            return {...state,...action.payload};
        }
    },
    effects: {
        *fun_test({ payload }, { call, put }) {
            debugger
            yield put({
                type: 'save',
                payload: {
                    isUpload:true
                }
            })
        }
    }
}
