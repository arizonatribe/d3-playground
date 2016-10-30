import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';

import Chart from './components/chart';
import '../assets/styles/app.less';

render(
    <Chart />,
    document.getElementById('app')
);

