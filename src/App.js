import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import LeaveManagementComponent from './components/LeaveManagementComponent';
import LeaveTimeRequestDialog from './Dialog';
import ScheduleTable from './components/ScheduleTable';
import AudioRecorder from './pages/AudioRecorder';

function App() {
	return (
		<>
			<CssBaseline />
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/" element={<ScheduleTable />} />
				<Route path="/audio" element={<AudioRecorder />} /> */}
			</Routes>
		</>
	);
}

export default App;
