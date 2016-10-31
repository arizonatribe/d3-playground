import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';

import Heatmap from './components/heatmap';
import '../assets/styles/app.less';

render(
    <Heatmap />,
    document.getElementById('app')
);

