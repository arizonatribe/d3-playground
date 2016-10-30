import React, {PropTypes, Component} from 'react';
import {pie} from 'd3-shape';
import {scaleOrdinal} from 'd3-scale';
import LabeledArc from './labeled-arc';

class PieChart extends Component {
    constructor(props) {
        super(props);
        this.pie = pie().sort(null).value(v => v.value);
        this.colors = scaleOrdinal()
            .domain(this.props.data.map(x => x.value))
            .range([
                '#fbb713', '#ffc542', '#fff785',
                '#AABBDD', '#86a6d1', '#608eca', '#3F5B7F', '#225599', '#114488'
            ]);
    }
    
    arcGenerator(data, i) {
        return (
            <LabeledArc
              key={`arc-${i}`}
              data={data}
              outerArcInnerRadius={this.props.radius * 0.9}
              outerArcOuterRadius={this.props.radius * 0.9}
              innerRadius={this.props.radius * 0.4}
              outerRadius={this.props.radius * 0.8}
              color={this.colors(i)}
            />
        );
    }

    render() {
        const {width, height, data} = this.props;

        return (
            <svg width={width} height={height}>
                <g transform={`translate(${width / 2}, ${height / 2})`}>
                {this.pie(data).map((d, i) => this.arcGenerator(d, i))}
                </g>
            </svg>
        );
    }
}

PieChart.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    radius: PropTypes.number,
    data: PropTypes.object
};

export default PieChart;

