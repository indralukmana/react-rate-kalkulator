import React, { useState, useEffect } from 'react';
import './App.css';
import {
	CssBaseline,
	Container,
	Typography,
	TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Material UI CSS in JS Styling
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
	const [yearlyRate, setYearlyRate] = useState(19200);

	// useEffect(() => {
	// 	setWeeklyRate(hourlyRate * workHour);
	// 	setMonthlyRate(hourlyRate * workHour * 4);
	// 	setYearlyRate(hourlyRate * workHour * 4 * 12);
	// }, [hourlyRate, workHour]);

	// useEffect(() => {
	// 	setHourlyRate(weeklyRate / workHour);
	// 	setMonthlyRate(weeklyRate * 4);
	// 	setYearlyRate(weeklyRate * 4 * 12);
	// }, [weeklyRate, workHour]);

	// useEffect(() => {
	// 	setHourlyRate(monthlyRate / 4 / workHour);
	// 	setWeeklyRate(monthlyRate / 4);
	// 	setYearlyRate(monthlyRate * 12);
	// }, [monthlyRate, workHour]);

	// useEffect(() => {
	// 	setHourlyRate(yearlyRate / 12 / 4 / workHour);
	// 	setWeeklyRate(yearlyRate / 12 / 4);
	// 	setMonthlyRate(yearlyRate / 12);
	// }, [yearlyRate, workHour]);

	// const tryConvert = ({ name, value }) => {
	// 	if (name === 'hourly-rate') {
	// 		setHourlyRate(value);
	// setWeeklyRate(value * workHour);
	// setMonthlyRate(value * workHour * 4);
	// setYearlyRate(value * workHour * 4 * 12);
	// } else if (name === 'weekly-rate') {
	// 	setWeeklyRate(value);
	// setHourlyRate(value / workHour);
	// setMonthlyRate(value * 4);
	// setYearlyRate(value / 12 / 4);
	// } else if (name === 'monthly-rate') {
	// 	setMonthlyRate(value);
	// setWeeklyRate(value / 4);
	// setHourlyRate(value / workHour / 4);
	// setYearlyRate(value * 12);
	// } else if (name === 'yearly-rate') {
	// 	setYearlyRate(value);
	// 	setMonthlyRate(value / 12);
	// 	setWeeklyRate(value / 12 / 4);
	// 	setHourlyRate(value / 12 / 4 / workHour);
	// }
	// };

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
					// onChange={event => tryConvert(event.target)}
					onChange={event => setHourlyRate(event.target.value)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					id="work-hours"
					label="Work Hours"
					name="work-hours"
					inputProps={{ 'data-testid': 'work-hours' }}
					value={workHour}
					// onChange={event => setWorkHour(event.target.value)}
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
					// onChange={event => tryConvert(event.target)}
					onChange={event => setWeeklyRate(event.target.value)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					id="monthly-rate"
					label="Monthly Rate"
					name="monthly-rate"
					inputProps={{ 'data-testid': 'monthly-rate' }}
					value={monthlyRate}
					// onChange={event => tryConvert(event.target)}
					onChange={event => setMonthlyRate(event.target.value)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					id="yearly-rate"
					label="Yearly Rate"
					name="yearly-rate"
					inputProps={{ 'data-testid': 'yearly-rate' }}
					value={yearlyRate}
					// onChange={event => tryConvert(event.target)}
					onChange={event => setYearlyRate(event.target.value)}
				/>
			</div>
		</Container>
	);
}

export default App;
