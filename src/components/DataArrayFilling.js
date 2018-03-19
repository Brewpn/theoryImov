import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

export default class DataArrayFilling extends Component {

    render () {


        return (
             <div>
                 <input type='text' ref='data_array' className="form-control" placeholder='Click on Make it button if you want to load template'/>
                 <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
                     Make it
                 </button>
             </div>
        );
    }

    handleClick (event) {
        const cred = this.refs.data_array.value.trim() ? _.split(this.refs.data_array.value.trim(), ' ') : [12,19,7,2,10,-2,5,19,0,5,1,1,13,12,1.5,5,2,2,6,3,-1,12,-1,9,22,15,4,22,4,21,4,0,3,3,8,21,17,0,5,8];

        this.props.onMakeItClick(cred, event);
    }
}

DataArrayFilling.propTypes = {
    onMakeItClick: PropTypes.func.isRequired
};