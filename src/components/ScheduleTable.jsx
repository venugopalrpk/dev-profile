import React from 'react';
import moment from 'moment';

const CalendarLayout = () => {
	const get24MonthsDaysData = (startYear, startMonth) => {
		let monthsData = [];

		for (let i = 0; i < 25; i++) {
			const year = moment([startYear, startMonth]).add(i, 'months').year();
			const month = moment([startYear, startMonth]).add(i, 'months').month();
			monthsData.push({
				month: moment([year, month]).format('MMMM YYYY'),
				days: getDaysArrayByMonth(year, month),
			});
		}

		return monthsData;
	};

	const getMonthDataFromDecember2023To2025 = () => {
		let monthsData = [];
		let monthMoment = moment('2023-12-01');

		while (monthMoment.year() < 2026) {
			monthsData.push(monthMoment.format('MMMM YYYY'));
			monthMoment.add(1, 'month');
		}

		return monthsData;
	};

	const monthData = getMonthDataFromDecember2023To2025();

	// For December 2023
	const getDaysArrayByMonth = (year, month) => {
		const daysInMonth = moment([year, month]).daysInMonth();
		const daysArray = [];

		for (let i = 1; i <= daysInMonth; i++) {
			daysArray.push(i);
		}

		return daysArray;
	};

	// Get days data for 24 months starting from December 2023
	const daysDataFor24Months = get24MonthsDaysData(2023, 11);

	const MyComponent = ({ items }) => {
		const itemElements = [];
		let allDays = [];

		// Flatten the days arrays into one big array
		items.forEach((monthData, index) => {
			allDays = allDays.concat(monthData.days.map((day) => day));
		});

		for (let i = 0; i < allDays.length; i += 7) {
			// Calculate the end index, ensuring it doesn't go out of bounds
			const endIndex = i + 6 < allDays.length ? i + 6 : allDays.length - 1;

			itemElements.push(
				<div
					key={i}
					style={{
						display: 'flex',
						flexDirection: 'row',
						borderRight: i === allDays.length - 1 ? 'none' : '1px solid black',
						borderLeft: i != 0 ? 'none' : '1px solid black',
						paddingLeft: '6px',
						paddingRight: '6px',
						width: '175px',
						justifyContent: 'space-between',
						paddingTop: '5px',
						paddingBottom: '5px',
					}}
				>
					<div>{allDays[i]}</div>
					{endIndex !== i && <div>{allDays[endIndex]}</div>}
				</div>
			);
		}

		return (
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				{itemElements}
			</div>
		);
	};

	const getDayNamesFromDecember2023To2025 = () => {
		const start = moment('2023-12-01');
		const end = moment('2025-12-31');
		const dayNames = [];

		while (start <= end) {
			dayNames.push(start.format('dd').charAt(0)); // 'dd' is the format string for short day names
			start.add(1, 'days');
		}

		return dayNames;
	};

	const dayNamesData = getDayNamesFromDecember2023To2025();

	const DaysComponent = () => {
		return (
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				{dayNamesData.map((dayName, index) => (
					<div
						key={index}
						style={{
							width: '25px',
							borderRight:
								index === dayNamesData.length - 1 ? 'none' : '1px solid black',
							borderLeft: index != 0 ? 'none' : '1px solid black',
							borderTop: '1px solid black',
							borderBottom: '1px solid black',
							textAlign: 'center',
						}}
					>
						{dayName}
					</div>
				))}
			</div>
		);
	};

	return (
		<>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '100px auto',
					gap: '1px',
				}}
			>
				{/* Empty divs for the first three rows in the first column */}
				<div style={{ gridRow: '1' }}></div>
				<div style={{ gridRow: '2' }}></div>
				<div style={{ gridRow: '3' }}></div>

				<div
					style={{
						display: 'flex',
						whiteSpace: 'nowrap',
						gridColumn: '2 / -1',
					}}
				>
					{monthData.map((month, index) => (
						<div
							key={index}
							style={{
								border: '1px solid black',
								flexShrink: 0,
								width: '760px',
								textAlign: 'center',
								fontWeight: 'bold',
								paddingTop: '6px',
								paddingBottom: '6px',
							}}
						>
							{month}
						</div>
					))}
				</div>
				<div
					style={{
						display: 'flex',
						flexWrap: 'nowrap',
						gridColumn: '2 / -1',
					}}
				>
					<MyComponent items={daysDataFor24Months} />
				</div>
				<div
					style={{
						display: 'flex',
						flexWrap: 'nowrap',
						gridColumn: '2 / -1',
					}}
				>
					<DaysComponent />
				</div>

				{/* Employee names starting from the fourth row in the first column */}
				<div
					style={{
						gridColumn: '1',
						gridRowStart: '4',
						border: '1px solid black',
						height: '100px',
						display: 'grid',
						placeItems: 'center',
					}}
				>
					Sandeep Reddy
				</div>

				{/* Continue adding employee names as needed... */}
			</div>
		</>
	);
};

export default CalendarLayout;
