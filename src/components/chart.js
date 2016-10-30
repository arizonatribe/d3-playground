import React, {Component} from 'react';
import PieChart from './pie';
import pieson from '../../assets/yield-and-volume-by-product.json';

const styles = {
    width: 700,
    height: 700,
    radius: 250
};

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: pieson.products.map(x => ({
                label: x.product,
                value: x.totalParts
            }))
        };
    }

    render() {
        return (
            <div className='pie'>
                <h1>Yield and Volume (By Product)</h1>
                <PieChart {...this.state} {...styles} />
            </div>
        );
    }
}

export default Chart;

