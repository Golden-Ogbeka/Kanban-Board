import React from 'react';
import './index.css';

export default function KanbanBoard() {
	// Each task is uniquely identified by its name.
	const [tasks, setTasks] = React.useState([
		// { name: '1', stage: 0 },
		// { name: '2', stage: 0 },
	]);

	const stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];

	let stagesTasks = [];

	for (let i = 0; i < stagesNames.length; ++i) {
		stagesTasks.push([]);
	}
	for (let task of tasks) {
		const stageId = task.stage;
		stagesTasks[stageId].push(task);
	}

	const [taskInput, setTaskInput] = React.useState('');

	const changeTaskInput = (e) => {
		setTaskInput(e.target.value);
	};

	const addTask = () => {
		setTasks([
			...tasks,
			{
				name: taskInput,
				stage: 0,
			},
		]);
		setTaskInput('');
	};

	const promoteTask = (task) => {
		if (task.stage < 3) {
			setTasks(
				tasks.map((item) => {
					if (item.name === task.name) {
						item.stage += 1;
					}
					return item;
				})
			);
		}
	};

	const demoteTask = (task) => {
		if (task.stage > 0) {
			setTasks(
				tasks.map((item) => {
					if (item.name === task.name) {
						item.stage -= 1;
					}
					return item;
				})
			);
		}
	};

	const deleteTask = (task) => {
		setTasks(tasks.filter((item) => item.name !== task.name));
	};
	return (
		<div className='mt-20 layout-column justify-content-center align-items-center'>
			<section className='mt-50 layout-row align-items-center justify-content-center'>
				<input
					id='create-task-input'
					type='text'
					className='large'
					placeholder='New task name'
					data-testid='create-task-input'
					value={taskInput}
					onChange={(e) => changeTaskInput(e)}
				/>
				<button
					type='submit'
					className='ml-30'
					data-testid='create-task-button'
					onClick={addTask}
				>
					Create task
				</button>
			</section>

			<div className='mt-50 layout-row'>
				{stagesTasks.map((tasks, i) => {
					return (
						<div className='card outlined ml-20 mt-0' key={`${i}`}>
							<div className='card-text'>
								<h4>{stagesNames[i]}</h4>
								<ul className='styled mt-50' data-testid={`stage-${i}`}>
									{tasks.map((task, index) => {
										return (
											<li className='slide-up-fade-in' key={`${i}${index}`}>
												<div className='li-content layout-row justify-content-between align-items-center'>
													<span data-testid={`${task.name.split(' ').join('-')}-name`}>
														{task.name}
													</span>
													<div className='icons'>
														{task.stage > 0 && (
															<button
																className='icon-only x-small mx-2'
																data-testid={`${task.name.split(' ').join('-')}-back`}
																onClick={() => demoteTask(task)}
															>
																<i className='material-icons'>arrow_back</i>
															</button>
														)}
														{task.stage < 3 && (
															<button
																className='icon-only x-small mx-2'
																data-testid={`${task.name.split(' ').join('-')}-forward`}
																onClick={() => promoteTask(task)}
															>
																<i className='material-icons'>arrow_forward</i>
															</button>
														)}

														<button
															className='icon-only danger x-small mx-2'
															data-testid={`${task.name.split(' ').join('-')}-delete`}
															onClick={() => deleteTask(task)}
														>
															<i className='material-icons'>delete</i>
														</button>
													</div>
												</div>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
