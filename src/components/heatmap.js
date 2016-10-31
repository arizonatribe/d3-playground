import React, {PropTypes, Component} from 'react';
import {rect} from 'd3-path';
import {scaleQuantile} from 'd3-scale';
import daysAndHours from '../../assets/daysAndHours.json';
import {generateUUID} from '../utility';

class Heatmap extends Component {
    constructor(props) {
        super(props);
        const {colors} = this.props;
        this.state = {
            data: daysAndHours.rows
        };
        this.colorScale = scaleQuantile().domain(daysAndHours.rows.map(x => x.value)).range(colors);
    }
    
    render() {
        const {width, height, margin: {left, top}} = this.props;
        const gridSize = Math.floor(width / 24);
        const {data} = this.state;

        return (
            <svg style={{width: '100%'}} height={height}>
                <g transform={`translate(${left},${top})`}>
                {data.map(({hour, day, value}) =>
                    <rect
                      key={generateUUID()}
                      className='bordered'
                      fill={this.colorScale(value)}
                      width={gridSize}
                      height={gridSize}
                      x={(hour - 1) * gridSize}
                      y={(day - 1) * gridSize}
                      rx='4'
                      ry='4'
                    />
                )}
                </g>
            </svg>
        );
    }
}

Heatmap.propTypes = {
    margin: PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number
    }),
    gridSize: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    radius: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.shape({
        hour: PropTypes.number,
        day: PropTypes.number,
        value: PropTypes.number
    })),
    colors: PropTypes.arrayOf(PropTypes.string).isRequired
};

Heatmap.defaultProps = {
    margin: {
        top: 50,
        right: 0,
        bottom: 100,
        left: 30
    },
    width: 1000,
    height: 430,
    colors: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58']
};

export default Heatmap;

