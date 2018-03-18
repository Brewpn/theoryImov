import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chart } from 'react-google-charts';

export default class Charts extends Component {



    render() {
        const { value, onChange, option } = this.props;
        const optionsChartNi = {
            title: 'Xi Ni chart',
            hAxis: { title: 'Xi', minValue: 0, maxValue: 23 },
            vAxis: { title: 'Ni', minValue: 0, maxValue: 5 },
            legend: 'none',
        };
        const optionsChartWi = {
            title: 'Xi Wi chart',
            hAxis: { title: 'Xi', minValue: 0, maxValue: 23 },
            vAxis: { title: 'Wi', minValue: 0, maxValue: 0.2 },
            legend: 'none',
        };
        const optionsChartF = {
            title: 'Xi F* chart',
            hAxis: { title: 'Xi', minValue: 0, maxValue: 23 },
            vAxis: { title: 'F*', minValue: 0, maxValue: 0.2 },
            legend: 'none',
        };

        return (
            <div className="container">
                <div className="row">
                    <select onChange={e => onChange(e.target.value)} value={option}>
                        <option value={"Xi Ni chart"} key={1}>
                            Xi Ni chart
                        </option>
                        <option value={"Xi Wi chart"} key={2}>
                            Xi Wi chart
                        </option>
                        <option value={"Ni F* chart"} key={3}>
                            Ni F*  chart
                        </option>

                    </select>
                    { option === 'Xi Ni chart' &&
                        <div className="col-sm">
                            <Chart
                                chartType="LineChart"
                                data={[['Xi', 'Ni'], ...value.XiNiGraphicValues]}
                                options={optionsChartNi}
                                graph_id="LineChart"
                                width="100%"
                                height="400px"
                                legend_toggle
                            />
                        </div>
                    }
                    { option === 'Xi Wi chart' &&
                    <div className="col-sm">
                        <Chart
                            chartType="LineChart"
                            data={[['Xi', 'Wi'], ...value.XiWiGraphicValues]}
                            options={optionsChartWi}
                            graph_id="LineChart"
                            width="100%"
                            height="400px"
                            legend_toggle
                        />
                    </div>
                    }
                    { option === 'Ni F* chart' &&
                    <div className="col-sm">

                        <Chart
                            chartType="LineChart"
                            data={[['Xi', 'F*'], ...value.EmpiricalGraphicValues]}
                            options={optionsChartF}
                            graph_id="LineChart"
                            width="100%"
                            height="400px"
                            legend_toggle
                        />
                    </div>
                    }
                </div>

            </div>
        );
    }
}

Charts.propTypes = {
    option: PropTypes.string,
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};