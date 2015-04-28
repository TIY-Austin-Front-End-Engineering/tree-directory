import InputComponent 		from '../../input/src/component';
import TodoListComponent 	from '../../todo-list/src/component';
import FooterComponent		from '../../footer/src/component';

export default {
	description: 'The root component of our application that contains an input component for entering new todos, a list component for showing todos and a footer component for filtering.',
	events: {
		'ADD_TODO': {
			description: 'Triggered when a user adds a new todo item via the InputComponent',
			bubbles: true,
			handlers: {
				updateUi: {
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
			<InputComponent />
			<TodoListComponent ref="todoList" />
			<FooterComponent />
		);
	};
};