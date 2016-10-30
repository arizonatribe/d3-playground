import React, {PropTypes} from 'react';

const DataScales = ({data, xScale, yScale}) =>
    <g>
        {data.map((coords, index) =>
            <circle cx={xScale(coords[0])} cy={yScale(coords[1])} r='2' key={index} />
        )}
    </g>;

DataScales.propTypes = {
    xScale: PropTypes.func.isRequired,
    yScale: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
};

export default DataScales;

