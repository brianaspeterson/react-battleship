'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

var HelloComponent = React.createClass({
	render: function(){
			return (
				<div>
					Battleship
				</div>
			);
		}
	});

ReactDOM.render(<HelloComponent/>, document.getElementById('content'));