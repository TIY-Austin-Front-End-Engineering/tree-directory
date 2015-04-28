export default {
	description: 'A list of todo items',
	events: {
		'ADD': {
			description: 'Triggered when a new todo should be added to the list.',
			bubbles: true,
			handlers: {
				append: {
					dependencies: [],
					policies: [],
					method: 'local',
					run: function(e, resolve, reject) {
						this.refs.todoList.trigger('ADD', e);
					}
				}
			}
		}
	},
	errors: {},
	models: {},
	render: function() {
		return (
			<ol>{this.props.items}</ol>
		);
	};
};