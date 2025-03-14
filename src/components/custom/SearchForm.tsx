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
	setFiltered: (array: any) => void
}

const SearchForm: React.FC<SearchFormProps> = ({ users, setFiltered }) => {
	const [search, setSearch] = useState<string>("");

	useEffect(() => {
		const filtered = users.filter((user) =>
			user.name.toLowerCase().includes(search.toLowerCase().trim())
		);

		setFiltered(filtered);
	}, [search, users]);

	const enterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const filtered = users.filter((user) =>
			user.name.toLowerCase().includes(search.toLowerCase().trim())
		);
		setFiltered(filtered)
	}

	return (
		<Card className="p-4 w-[400px] mb-7">
			<CardHeader>
				<CardTitle>Search bar</CardTitle>
				<CardDescription>Type user name</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="flex items-center gap-2" onSubmit={enterSubmit} >

					<Input
						placeholder="seach"
						name="search"
						onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
							const target = e.target as HTMLInputElement;
							setSearch(target.value);
						}} />
					<Button variant="outline" type="submit" className="cursor-pointer">search</Button>
				</form>
			</CardContent>
		</Card>

	);
};

export default SearchForm;
