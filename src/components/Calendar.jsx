import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // For interactions
import './CalenderStyles.css'; // Import the CSS file here

const CalendarComponent = () => {
	// Custom header toolbar
	const customHeaderToolbar = {
		left: 'prev',
		center: 'title',
		right: 'next',
	};

	return (
		<FullCalendar
			plugins={[dayGridPlugin, interactionPlugin]}
			initialView="dayGridMonth"
			headerToolbar={customHeaderToolbar}
			height="auto" // Adjust height to remove scrollbar
			contentHeight="auto" // Adjust content height
			buttonText={{
				today: '', // Remove the 'today' button text
			}}
		/>
	);
};

export default CalendarComponent;
