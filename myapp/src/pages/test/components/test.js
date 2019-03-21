

import React, { Component } from 'react';
import { connect } from 'dva';

@connect(state => state['devicecode'])

class test extends Component {

    test = ()=>{
        this.props.dispatch({
            type: 'init',
        });
    }

    render(){
        this.test()
        return (
            <div>ttt</div>
        )
    }

}
export default test
