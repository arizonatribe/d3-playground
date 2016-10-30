import React, {PropTypes} from 'react';
import {scaleLinear} from 'd3-scale';
import {max} from 'd3';
import DataCircles from './data-scales';
import XYAxis from './x-y-axis';

const xMax = data => max(data, d => d[0]),
    yMax = data => max(data, d => d[1]),
    xScale = props => scaleLinear()
        .domain([0, xMax(props.data)])
        .range([props.padding, props.width - (props.padding * 2)]),
    yScale = props => scaleLinear()
        .domain([0, yMax(props.data)])
        .range([props.height - props.padding, props.padding]);

const ScatterPlot = props => {
    const {width, height} = props,
        scales = {
            xScale: xScale(props),
            yScale: yScale(props)
        };

    return (
        <svg width={width} height={height}>
            <DataCircles {...props} {...scales} />
            <XYAxis {...props} {...scales} />
        </svg>
    );
};

ScatterPlot.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
};

export default ScatterPlot;

