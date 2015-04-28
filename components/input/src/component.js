export default {
	events: {
		'ADD_TODO': {
			description: 'Triggered when a user adds a new todo item via the InputComponent',
			bubbles: false,
			handlers: {
				updateTodo: {
					dependencies: [],
					policies: [],
					method: 'local',
					run: function(e, resolve, reject) {
						this.trigger('ADD_TODO', {todo: this.refs.newTodo.getDOMNode().value.trim()})
						.success(resolve)
						.error(reject);
					}
				}
			}
		}
	},
	errors: {},
	models: {},
	render: function() {
		return (
			<div>
				<input type="text" ref="newTodo" />
				<button type="button" onClick={this.trigger('ADD_TODO')}>Submit</button>
			</div>
		);
	};
};