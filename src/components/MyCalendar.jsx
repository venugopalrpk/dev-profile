import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = ({ onDateChange }) => {
	const [value, setValue] = useState(new Date());

	const onChange = (nextValue) => {
		setValue(nextValue);
		onDateChange(nextValue); // Pass the date up to the parent component if needed
	};

	return (
		<div>
			<Calendar onChange={onChange} value={value} calendarType="ISO 8601" />
		</div>
	);
};

export default MyCalendar;
