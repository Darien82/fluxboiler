var React = require('react');
AppActions = require('../actions/AppActions');
AppStore = require('../stores/AppStore');

function getAppState(){
	return {

	}
}

var App = React.createClass({
	getInitialState: function(){
		return  get AppState();

	},

	componentDidMount: function()
	AppStore.addChangeListener(this._onChange);

	},

	componentUnMount: function()
	AppStore.removeChangeListener(this._onChange);

	},


	render: function(){
		return(
			<div>
			My App

			</div>



		);
	},

	_onChange: function(){
		this.setState(getAppState());
	}
});

module.exports = App;