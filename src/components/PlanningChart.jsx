import React from 'react';
import { Grid, Paper } from '@mui/material';

const PlanningChart = ({ employees, startDate, endDate }) => {
	// Calculate the difference in days for the grid
	const dateDiffInDays = (date1, date2) => {
		const diffTime = Math.abs(date2 - date1);
		return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	};

	// Assuming startDate and endDate are JavaScript Date objects
	const days = dateDiffInDays(startDate, endDate);

	return (
		<Paper style={{ width: '100%', overflowX: 'auto' }}>
			<Grid container>
				<Grid item xs={2} style={{ backgroundColor: '#eeeeee' }}>
					{/* Left Column for Employee Names */}
					{employees.map((employee) => (
						<div key={employee.id}>{employee.name}</div>
					))}
				</Grid>
				<Grid item xs={10}>
					{/* Right Column for the planning chart */}
					<Grid container>
						{Array.from({ length: days }, (_, index) => (
							<Grid item key={index} xs>
								{/* Each day cell */}
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default PlanningChart;
