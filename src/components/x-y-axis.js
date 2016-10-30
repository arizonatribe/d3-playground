import React, {PropTypes} from 'react';
import Axis from './axis';

const XYAxis = ({height, padding, xScale, yScale}) =>
    <g className='xy-axis'>
        <Axis
          orient='bottom'
          translate={`translate(0, ${height - padding})`}
          scale={xScale}
        />
        <Axis
          orient='left'
          translate={`translate(${padding}`}
          scale={yScale}
        />
    </g>;

XYAxis.propTypes = {
    padding: PropTypes.number,
    height: PropTypes.number,
    xScale: PropTypes.object,
    yScale: PropTypes.object
};

export default XYAxis;

