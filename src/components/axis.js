import React, {PropTypes, Component} from 'react';
import {select as d3Select} from 'd3';
import {axisBottom, axisLeft} from 'd3-axis';

class Axis extends Component {
    componentDidMount() {
        this.renderAxis();
    }

    componentDidUpdate() {
        this.renderAxis();
    }

    renderAxis() {
        const {scale, orient} = this.props,
            axis = (
                orient === 'left' ? axisLeft() : axisBottom()
            ).ticks(5).scale(scale);

        d3Select(this.refs.axis).call(axis);
    }

    render() {
        return <g className='axis' ref='axis' transform={this.props.translate} />;
    }
}

Axis.propTypes = {
    translate: PropTypes.string,
    scale: PropTypes.object,
    orient: PropTypes.string
};

Axis.defaultProps = {
    orient: 'bottom'
};

export default Axis;

