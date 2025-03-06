import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableRow,
} from "../ui/table";
import { User } from "@/types";

interface UsersTableProps {
	users: Array<User>;
}

const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
	return (
		<Table className="w-[70%] m-0-auto">
			<TableHeader>
				<TableRow>
					<TableCell>Fullname</TableCell>
					<TableCell>Email</TableCell>
					<TableCell>Phone</TableCell>
				</TableRow>
			</TableHeader>
			<TableBody>
				{users.map((user) => (
					<TableRow key={user.id}>
						<TableCell>{user.name}</TableCell>
						<TableCell>{user.email}</TableCell>
						<TableCell>{user.phone}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default UsersTable;
