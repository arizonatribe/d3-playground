import React, {PropTypes, Component} from 'react';
import {arc} from 'd3-shape';

export default class Arc extends Component {
    constructor(props) {
        super(props);
        this.arc = arc();
        this.outerArc = arc();
    }

    componentWillMount() {
        this.updateD3(this.props);
    }

    componentWillReceiveProps(newProps) {
        this.updateD3(newProps);
    }

    updateD3({innerRadius, outerRadius, outerArcInnerRadius, outerArcOuterRadius}) {
        this.arc.innerRadius(innerRadius);
        this.arc.outerRadius(outerRadius);
        this.outerArc.innerRadius(outerArcInnerRadius);
        this.outerArc.outerRadius(outerArcOuterRadius);
    }

    render() {
        const {data, color} = this.props;

        return <path d={this.arc(data)} style={{fill: color}} />;
    }
}

Arc.propTypes = {
    color: PropTypes.string,
    data: PropTypes.object
};

