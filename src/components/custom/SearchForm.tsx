import React, { useEffect, useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { User } from "@/types";

interface SearchFormProps {
	users: Array<User>;
	setUsers: (array: any) => void
}

const SearchForm: React.FC<SearchFormProps> = ({ users, setUsers }) => {
	const [search, setSearch] = useState<string>("");

	useEffect(() => {
		const filtered = users.filter((user) =>
			user.name.toLowerCase().includes(search.toLowerCase().trim())
		);

		setUsers(filtered);
	}, [search]);

	return (
		<Card className="p-4 w-[400px]">
			<CardHeader>
				<CardTitle>Search bar</CardTitle>
				<CardDescription>Type user name</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="flex items-center gap-2">
					<Input
						placeholder="seach"
						name="search"
						onKeyUp={(e) => setSearch(e.target.value)}
					/>
					<Button variant="outline">search</Button>
				</form>
			</CardContent>
		</Card>
	);
};

export default SearchForm;
