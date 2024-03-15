// import React, { useState } from 'react';
// import Timeline from 'react-calendar-timeline';
// import 'react-calendar-timeline/lib/Timeline.css';
// import moment from 'moment';

// const ScheduleComponent = ({ employees, leaveData }) => {
// 	// Create groups for each employee
// 	const groups = employees.map((employee) => ({
// 		id: employee.id,
// 		title: employee.name,
// 	}));

// 	// Create items for each leave
// 	const items = leaveData.map((leave) => ({
// 		id: leave.id,
// 		group: leave.employeeId,
// 		title: leave.type,
// 		start_time: moment(leave.startDate),
// 		end_time: moment(leave.endDate),
// 		itemProps: {
// 			// Add custom styling based on leave type
// 			style: {
// 				backgroundColor: leave.color,
// 			},
// 		},
// 	}));

// 	return (
// 		<Timeline
// 			groups={groups}
// 			items={items}
// 			defaultTimeStart={moment().add(-12, 'hour')}
// 			defaultTimeEnd={moment().add(12, 'hour')}
// 		/>
// 	);
// };

// export default ScheduleComponent;
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Grid, Typography } from '@mui/material';
import moment from 'moment'; // You'll need to install moment if not already done

function MyCustomCalendar() {
	const [value, setValue] = useState(new Date());

	const getWeeksInMonth = (date) => {
		const startOfMonth = moment(date).startOf('month').startOf('week');
		const endOfMonth = moment(date).endOf('month').endOf('week');

		let weeks = [];
		let currentWeek = startOfMonth;
		while (currentWeek <= endOfMonth) {
			weeks.push({
				start: currentWeek.clone(),
				end: currentWeek.clone().endOf('week'),
			});
			currentWeek.add(1, 'weeks');
		}
		return weeks;
	};

	const renderNavigationLabel = ({ date, label }) => {
		return <Typography variant="h6">{label}</Typography>;
	};

	const weeks = getWeeksInMonth(value);

	return (
		<Grid container>
			<Grid item xs={12}>
				{/* Month and Year */}
				<Calendar
					value={value}
					onChange={setValue}
					navigationLabel={renderNavigationLabel}
				/>
			</Grid>
			{weeks.map((week, index) => (
				<Grid container key={index} spacing={1}>
					<Grid item xs={3}>
						<Typography variant="body2">
							{week.start.format('MMM D')}
						</Typography>
					</Grid>
					<Grid item xs={6}></Grid>
					<Grid item xs={3}>
						<Typography variant="body2">{week.end.format('MMM D')}</Typography>
					</Grid>
				</Grid>
			))}
			<Grid item xs={12} md={1}>
				{/* Days */}
				<Calendar
					value={value}
					onChange={setValue}
					tileContent={({ date, view }) =>
						view === 'month' && (
							<Typography variant="caption">
								{moment(date).format('dd').charAt(0)}
							</Typography>
						)
					}
				/>
			</Grid>
		</Grid>
	);
}

export default MyCustomCalendar;
