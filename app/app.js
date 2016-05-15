import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/app.container.js';

"use strict"; 

var App = React.createClass({
	render: function(){
		return (
			<div>
				<AppContainer />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('content'));