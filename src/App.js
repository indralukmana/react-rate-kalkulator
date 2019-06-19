import React, { useState } from 'react';
import './App.css';
import {
	CssBaseline,
	Container,
	Typography,
	TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8), // = 4 * 2
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	}
}));

function App() {
	const classes = useStyles();
	const [hourlyRate, setHourlyRate] = useState(10);
	const [workHour, setWorkHour] = useState(40);
	const [weeklyRate, setWeeklyRate] = useState(400);
	const [monthlyRate, setMonthlyRate] = useState(1600);

	const tryConvert = ({ name, value }) => {
		if (name === 'hourly-rate') {
			setHourlyRate(value);
			setWeeklyRate(value * workHour);
			setMonthlyRate(value * workHour * 4);
		} else if (name === 'weekly-rate') {
			setWeeklyRate(value);
			setHourlyRate(value / workHour);
			setMonthlyRate(value * 4);
		} else if (name === 'monthly-rate') {
			setMonthlyRate(value);
			setWeeklyRate(value / 4);
			setHourlyRate(value / workHour / 4);
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Rate Kalkulator
				</Typography>
				<TextField
					variant="outlined"
					margin="normal"
					id="hourly-rate"
					label="Hourly Rate"
					name="hourly-rate"
					autoFocus
					inputProps={{ 'data-testid': 'hourly-rate' }}
					value={hourlyRate}
					onChange={event => tryConvert(event.target)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					id="work-hours"
					label="Work Hours"
					name="work-hours"
					inputProps={{ 'data-testid': 'work-hours' }}
					value={workHour}
					onChange={event => setWorkHour(event.target.value)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					id="weekly-rate"
					label="Weekly Rate"
					name="weekly-rate"
					inputProps={{ 'data-testid': 'weekly-rate' }}
					value={weeklyRate}
					onChange={event => tryConvert(event.target)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					id="monthly-rate"
					label="Monthly Rate"
					name="monthly-rate"
					inputProps={{ 'data-testid': 'monthly-rate' }}
					value={monthlyRate}
					onChange={event => tryConvert(event.target)}
				/>
			</div>
		</Container>
	);
}

export default App;
