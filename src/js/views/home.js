import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js"

export const Home = () => {
	const { store, actions } = useContext(Context)
	const [item, setItem] = useState("")
	console.log(store.list)

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
				/>
				<button
					type="button"
					onClick={() => {
						if (item !== "") {
							actions.addItem(item)
							setItem("");
						}
					}}>
					Add Task
				</button>
			</div>
			<ul className="bullets">
				{store.list.slice(1).map((element, i) => {
					return (
						<li key={i}>
							<p>
								{element.label}
							</p>
							<button
								onClick={() => {
									actions.deleteItem(element)

								}}>
								X
							</button>
						</li>)
				})}
			</ul>
		</div>
	);
};