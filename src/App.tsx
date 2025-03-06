import SearchForm from "./components/custom/SearchForm";
import UsersTable from "./components/custom/UsersTable";

import { useEffect, useState } from "react";

function App() {
	const [users, setUsers] = useState([]);
	const [filtered, setFiltered] = useState<any>([])
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => {
				setUsers(data)
				setFiltered(data)
			})
	}, []);

	return (
		<div className="p-5">
			<center>
				<SearchForm users={users} setFiltered={setFiltered} />

				<UsersTable filtered={filtered} />
			</center>
		</div>
	);
}

export default App;
