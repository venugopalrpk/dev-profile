// import React, { useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; // Default styling
// import './CalenderStyles.css';

// const CalendarComponent = () => {
// 	// Custom styling to adjust the navigation and day names
// 	const customCalendarStyles = {
// 		'#root > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-2.css-12xeub0-MuiGrid-root > div > div > div.react-calendar__navigation > button.react-calendar__navigation__arrow.react-calendar__navigation__prev2-button':
// 			{
// 				// Hide the year navigation buttons
// 				display: 'none',
// 			},
// 		'#root > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-2.css-12xeub0-MuiGrid-root > div > div > div.react-calendar__navigation > button.react-calendar__navigation__arrow.react-calendar__navigation__next2-button':
// 			{
// 				display: 'none',
// 			},
// 		'.react-calendar__navigation__label': {
// 			// Center the month label
// 			flex: '1 0 auto',
// 			textAlign: 'center',
// 			fontWeight: 'bold',
// 		},
// 		'.react-calendar__month-view__weekdays__weekday': {
// 			// Only show the first letter of the day and center it
// 			textAlign: 'center',
// 			padding: '0.5em',
// 		},
// 		'.react-calendar__month-view__weekdays__weekday abbr': {
// 			textDecoration: 'none !important',
// 		},
// 		'.react-calendar__month-view__days__day--weekend': {
// 			// Set the same colour for weekend days as other days
// 			color: 'inherit',
// 		},
// 	};

// 	// Apply the styles to the document head
// 	React.useEffect(() => {
// 		const styleEl = document.createElement('style');
// 		document.head.appendChild(styleEl);
// 		const styleSheet = styleEl.sheet;

// 		Object.keys(customCalendarStyles).forEach((selector) => {
// 			styleSheet.insertRule(
// 				`${selector} { ${Object.entries(customCalendarStyles[selector])
// 					.map(([prop, value]) => `${prop}: ${value}`)
// 					.join('; ')} }`,
// 				styleSheet.cssRules.length
// 			);
// 		});

// 		return () => {
// 			document.head.removeChild(styleEl);
// 		};
// 	}, []);

// 	const formatShortWeekday = (locale, date) => {
// 		return new Intl.DateTimeFormat(locale, { weekday: 'narrow' }).format(date);
// 	};

// 	return (
// 		<div>
// 			<Calendar formatShortWeekday={formatShortWeekday} />
// 		</div>
// 	);
// };

// export default CalendarComponent;

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
