import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    selectDataArray,
    fetchDataArrayIfNeeded
} from '../actions'
import DataArrayFilling from '../components/DataArrayFilling'
import TabsAndGraph from '../components/TabsAndCharts'
import EmpiricalFunction from '../components/EmpiricalFunction'
import _ from 'lodash'


class AsyncApp extends Component {
    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler (cred) {
        let { dispatch } = this.props;
        dispatch(selectDataArray(cred));
        dispatch(fetchDataArrayIfNeeded(cred))
    }

    render() {
        const { receivedObject, selectedOption, dispatch, showModal } = this.props;

        return (
            <div>
                <DataArrayFilling
                    onMakeItClick={this.clickHandler}
                />
                { !_.isEmpty(receivedObject) &&
                    <EmpiricalFunction
                        dispatch={dispatch}
                        showModal={showModal}
                        receivedObject={receivedObject}
                    />
                }
                { !_.isEmpty(receivedObject) &&
                    <TabsAndGraph
                        dispatch={dispatch}
                        option={selectedOption}
                        receivedObject={receivedObject}
                    />
                }

            </div>
        )
    }
}

AsyncApp.propTypes = {
    showModal: PropTypes.bool.isRequired,
    selectedDataArray: PropTypes.array.isRequired,
    receivedObject: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { selectedDataArray, receivedObjectByDataArray, selectedOption, modal } = state;
    const { showModal } = modal;
    const {
        isFetching,
        items: receivedObject
    } = receivedObjectByDataArray.dataArray || {
        isFetching: true,
        items: {}
    };

    return {
        showModal,
        selectedOption,
        selectedDataArray,
        isFetching,
        receivedObject
    }
}

export default connect(mapStateToProps)(AsyncApp)