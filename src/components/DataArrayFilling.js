import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

export default class DataArrayFilling extends Component {

    render () {


        return (
             <div>
                 <input type='text' ref='data_array' className="form-control" placeholder='Your Array (not working ^_^ )'/>
                 <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
                     Make it
                 </button>
             </div>
        );
    }

    handleClick (event) {
        const cred = !this.refs.data_array ? _.split(this.refs.data_array, ' ') : [12,19,7,2,10,-2,5,19,0,5,1,1,13,12,1.5,5,2,2,6,3,-1,12,-1,9,22,15,4,22,4,21,4,0,3,3,8,21,17,0,5,8];
        console.log(cred);
        this.props.onMakeItClick(cred);
    }
}

DataArrayFilling.propTypes = {
    onMakeItClick: PropTypes.func.isRequired
};