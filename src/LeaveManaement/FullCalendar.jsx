import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // For interactions
import './CalendarStyles.css'; // Import the CSS file here
import { Paper, Box } from '@mui/material';

const CalendarComponent = () => {
	const [selectedDate, setSelectedDate] = useState(null);

	const handleDateClick = (dateClickInfo) => {
		if (selectedDate) {
			const selectedDayElement = document.querySelector(
				`[data-date="${selectedDate}"]`
			);
			if (selectedDayElement) {
				selectedDayElement.style.backgroundColor = '#ffffff';
				selectedDayElement.style.color = 'black';
			}
		}
		setSelectedDate(dateClickInfo.dateStr);
	};

	useEffect(() => {
		// Set the current date's background color on initial load
		const todayElement = document.querySelector('.fc-day-today');
		if (todayElement) {
			todayElement.style.backgroundColor = '#012169';
			todayElement.style.borderRadius = '50%';
			todayElement.style.cursor = 'pointer';
		}
	}, []);

	useEffect(() => {
		// Change the background color of the selected date and reset the current date
		const allDayElements = document.querySelectorAll('.fc-daygrid-day');
		allDayElements.forEach((dayElement) => {
			dayElement.style.backgroundColor = ''; // reset all first
			dayElement.style.borderRadius = '50%'; // make all circular
			dayElement.style.cursor = 'pointer';
		});

		const todayElement = document.querySelector('.fc-day-today');
		if (todayElement) {
			todayElement.style.backgroundColor = '#012169'; // reset today's color
			todayElement.style.color = '#ffffff';
		}

		if (selectedDate) {
			const selectedDayElement = document.querySelector(
				`[data-date="${selectedDate}"]`
			);
			if (selectedDayElement) {
				selectedDayElement.style.backgroundColor = '#012169';
				selectedDayElement.style.color = '#ffffff';
			}
		}
	}, [selectedDate]);
	// Custom header toolbar
	const customHeaderToolbar = {
		left: 'prev',
		center: 'title',
		right: 'next',
	};

	return (
		// <Paper elevation={3} style={{ height:'90.3vh',padding:'0.2em' }}>

		<FullCalendar
			plugins={[dayGridPlugin, interactionPlugin]}
			initialView="dayGridMonth"
			dateClick={handleDateClick}
			// dayCellContent={renderDayCell}
			headerToolbar={customHeaderToolbar}
			height="auto" // Adjust height to remove scrollbar
			contentHeight="300px" // Adjust content height
			buttonText={{
				today: '', // Remove the 'today' button text
			}}
			style={{
				boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Apply a shadow effect
				borderRadius: '4px', // Optional: if you want rounded corners
				padding: '16px', // Apply padding to create space around the calendar content
				backgroundColor: '#fff', // Set a white background color
			}}
		/>
		// </Paper>
	);
};

export default CalendarComponent;
