import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'
import Charts from './Charts'
import {
    selectOption
} from '../actions'

export default class Tabs extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(nextOption) {
        this.props.dispatch(selectOption(nextOption))
    }

    render () {
        const { receivedObject, option } = this.props;

        return (
            <div>
                <Table striped bordered condensed hover>
                    <tbody>
                    <tr>
                        <td>Xi</td>
                        {
                            receivedObject.Xi.map((item, index) =>
                                <td key={index}>{item}</td>
                            )
                        }
                    </tr>
                    <tr>
                        <td>Ni</td>
                        {
                            receivedObject.Ni.map((item, index) =>
                                <td key={index}>{item}</td>
                            )
                        }
                    </tr>
                    </tbody>
                </Table>
                <Table striped bordered condensed hover>
                    <tbody>
                    <tr>
                        <td>Xi</td>
                        {
                            receivedObject.Xi.map((item, index) =>
                                <td key={index}>{item}</td>
                            )
                        }
                    </tr>
                    <tr>
                        <td>Wi</td>
                        {
                            receivedObject.Wi.map((item, index) =>
                                <td key={index}>{item}</td>
                            )
                        }
                    </tr>
                    </tbody>
                </Table>
                <Table striped bordered condensed hover>
                    <tbody>
                    <tr>
                        <td>Xi  </td>
                        {
                            receivedObject.Xi.map((item, index) =>
                                <td key={index}>{item}</td>
                            )
                        }
                    </tr>
                    <tr>
                        <td>NiAcc</td>
                        {
                            receivedObject.NiAccumulated.map((item, index) =>
                                <td key={index}>{item}</td>
                            )
                        }
                    </tr>
                    </tbody>
                </Table>
                <Table striped bordered condensed hover>
                    <tbody>
                    <tr>
                        <td>Xi  </td>
                        {
                            receivedObject.Xi.map((item, index) =>
                                <td key={index}>{item}</td>
                            )
                        }
                    </tr>
                    <tr>
                        <td>WiAcc</td>
                        {
                            receivedObject.WiAccumulated.map((item, index) =>
                                <td key={index}>{item}</td>
                            )
                        }
                    </tr>
                    </tbody>
                </Table>

                <Charts
                    onChange={this.handleChange}
                    option={option}
                    value={receivedObject}
                />

            </div>
        )
    }
}

Tabs.propTypes = {
    dispatch: PropTypes.func.isRequired,
    option: PropTypes.string.isRequired,
    receivedObject: PropTypes.object.isRequired
};