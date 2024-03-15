import React from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	Typography,
	Grid,
	Box,
} from '@mui/material';

function LeaveTimeRequestDialog({ open = true, handleClose }) {
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Create Leave Time Request for Chris</DialogTitle>
			<DialogContent>
				<Typography variant="subtitle1" gutterBottom>
					Time Off
				</Typography>
				<Box sx={{ marginBottom: 2 }}>
					{/* Days Off */}
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<Typography>Mon, Dec, 18</Typography>
							<Button variant="outlined" fullWidth>
								whole day
							</Button>
						</Grid>
						<Grid item xs={4}>
							<Typography>Tue, Dec 19 - Sat, Dec 23</Typography>
							<Button variant="outlined" fullWidth>
								whole day
							</Button>
						</Grid>
						<Grid item xs={4}>
							<Typography>Sun, Dec 24</Typography>
							<Button variant="outlined" fullWidth>
								whole day
							</Button>
						</Grid>
					</Grid>
				</Box>
				<Typography variant="body2" gutterBottom>
					click in a field to enter number of hours
				</Typography>
				<Typography variant="h6" gutterBottom>
					Requested Leave Time: 5d (40hr)
				</Typography>
				<TextField
					fullWidth
					multiline
					rows={4}
					variant="outlined"
					placeholder="Please enter your comment here..."
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button color="primary" variant="contained" onClick={handleClose}>
					Submit Request
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default LeaveTimeRequestDialog;
