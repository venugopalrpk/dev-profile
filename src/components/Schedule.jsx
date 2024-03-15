// ScheduleComponent.jsx
import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';

const ScheduleComponent = ({ employees, leaveData }) => {
	// Function to generate the schedule cells
	const generateScheduleCells = (employeeLeaves) => {
		// You would implement logic to display the leaves according to the dates
	};

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="leave schedule">
				<TableHead>
					<TableRow>
						<TableCell>Employee</TableCell>
						{/* Generate table cells for each day of the month */}
						{Array.from({ length: 30 }, (_, index) => (
							<TableCell key={index}>{index + 1}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{employees.map((employee) => (
						<TableRow
							key={employee.name}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{employee.name}
							</TableCell>
							{/* Generate leave cells */}
							{generateScheduleCells(leaveData[employee.id])}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ScheduleComponent;
