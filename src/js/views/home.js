import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js"

export const Home = () => {
	const { store, actions } = useContext(Context)
	const [item, setItem] = useState("")
	console.log(store.list);

	return (
		<div className="box">
			<h1>todos</h1>
			<div className="ib">
				<input
					type="text"
					placeholder="What needs to be done?"
					onChange={(event) => {
						setItem(event.target.value);
					}}
					value={item}
					onKeyUp={(e) => {
						if (e.key == "Enter" && item !== "") {
							actions.addItem([...store.list, { label: item, done: false }]);
							setItem("")
						}
					}}
				/>
				<button
					onClick={() => {
						if (item !== "") {
							actions.addItem([...store.list, { label: item, done: false }])
							setItem("");
						}
					}}>
					Add Task
				</button>
			</div>
			<ul className="bullets">
				{store.list.map((item, index) => {
					return (
						<li key={index}>
							{item.label}
							<button
								onClick={() =>
									actions.deleteTodo(index)

								}>
								X
							</button>
						</li>
					);
				})}
			</ul>
			<span>{store.list.lenght} items left</span>
		</div>
	);
};