'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';

var ConstructBoardTwo = React.createClass({
	render: function(){
			return (
				<table>
					<tbody>
						  <tr>
						    <td></td>
						    <td></td> 
						    <td></td>
						    <td></td> 
						    <td></td>
						  </tr>
						  <tr>
						    <td></td>
						    <td></td> 
						    <td></td>
						    <td></td> 
						    <td></td>
						  </tr>
						  <tr>
						    <td></td>
						    <td></td> 
						    <td></td>
						    <td></td> 
						    <td></td>
						  </tr>
						  <tr>
						    <td></td>
						    <td></td> 
						    <td></td>
						    <td></td> 
						    <td></td>
						  </tr>
						  <tr>
						    <td></td>
						    <td></td> 
						    <td></td>
						    <td></td> 
						    <td></td>
						  </tr>

					</tbody>
				</table>
			);
		}
	});

var ConstructBoardUno = React.createClass({
	tableClick: function(event){
		alert("Event" + event.target);
		$(event.target).addClass("change");

	},

	render: function(){
			return (
				<table onClick={this.tableClick}>
					<tbody>
						  <tr>
						    <td></td>
						    <td></td> 
						    <td></td>
						    <td></td> 
						    <td></td>
						  </tr>
						  <tr>
						    <td></td>
						    <td></td> 
						    <td></td>
						    <td></td> 
						    <td></td>
						  </tr>
						  <tr>
						    <td></td>
						    <td></td> 
						    <td></td>
						    <td></td> 
						    <td></td>
						  </tr>
						  <tr>
						    <td></td>
						    <td></td> 
						    <td></td>
						    <td></td> 
						    <td></td>
						  </tr>
						  <tr>
						    <td></td>
						    <td></td> 
						    <td></td>
						    <td></td> 
						    <td></td>
						  </tr>
				
					</tbody>
				</table>
			);
		}
	});

var HelloComponent = React.createClass({
	render: function(){
			return (
				<div>
					<ConstructBoardUno></ConstructBoardUno>
				</div>
			);
		}
	});

ReactDOM.render(<HelloComponent/>, document.getElementById('content'));