import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import CalendarComponent from './CalendarComponent';
import Schedule from './Schedule';
const LeaveManagementComponent = () => {
	const [employees, setEmployees] = useState(['Sandeep']); // Add your employee data here
	const [leaveData, setLeaveData] = useState([]); // Add your leave data here

	// Fetch or define your employees and leave data here

	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={2}>
				<CalendarComponent />
			</Grid>
			<Grid item xs={12} md={10}>
				<Schedule employees={employees} leaveData={leaveData} />
			</Grid>
		</Grid>
	);
};

export default LeaveManagementComponent;
