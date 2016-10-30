import React, {PropTypes} from 'react';
import Arc from './arc';

const radius = 250,
    midAngle = d => d.startAngle + ((d.endAngle - d.startAngle) / 2);

export default class LabeledArc extends Arc {
    render() {
        const {data} = this.props,
            IsLessThanPi = midAngle(data) < Math.PI,
            innerPositions = this.arc.centroid(data),
            outerPositions = this.outerArc.centroid(data),
            plSpots = [radius * 0.95 * (IsLessThanPi ? 1 : -1), outerPositions[1]],
            adjustedPositions = this.outerArc.centroid(Object.assign({}, data, {
                [plSpots[1] < 0 ? 'endAngle' : 'startAngle']: midAngle(data)
            }));

        outerPositions[0] = radius * (IsLessThanPi ? 1 : -1);

        return (
            <g>
                <g className='slices'>
                    {super.render()}
                </g>
                <g className='labels'>
                    <text
                      transform={`translate(${outerPositions})`}
                      textAnchor={IsLessThanPi ? 'start' : 'end'} dy='0.35em'
                    >
                        {data.data.label}
                    </text>
                </g>
                <g className='lines'>
                    <polyline
                      points={[
                          innerPositions,
                          [adjustedPositions[0], outerPositions[1]],
                          plSpots
                      ]}
                    />
                </g>
            </g>
        );
    }
}

LabeledArc.propTypes = {
    data: PropTypes.object
};

