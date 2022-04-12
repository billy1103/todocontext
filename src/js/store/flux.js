const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			list: []
		},
		actions: {
			getData: () => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/billy", {
					method: 'GET',
					redirect: 'follow'
				})
					.then(response => response.json())
					.then(result => setStore({ list: result }))
					.catch(error => console.log('error', error));
			},
			addItem: (item) => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/billy", {
					method: "PUT",
					redirect: "follow",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify([...getStore().list, { label: item, done: false }])
				})
					.then(response => response.status === 200 ? getActions().getData() : "")
					.catch(error => console.log("error", error))
			},
			editItem: () => {

			},
			deleteItem: (item) => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/billy", {
					method: "PUT",
					redirect: "follow",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify([...getStore().list.filter((i) => item !== i)])
				})
					.then(response => response.status === 200 ? getActions().getData() : "")
					.catch(error => console.log("error", error))
			},
		}
	};
};

export default getState;
