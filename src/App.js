import React, { useState } from 'react';
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
	const [yearlyRate, setYearlyRate] = useState(19200);

	const tryConvert = ({ name, value }) => {
		if (name === 'work-hours') {
			setWorkHour(value);
			setWeeklyRate(value * hourlyRate);
			setMonthlyRate(value * hourlyRate * 4);
			setYearlyRate(value * hourlyRate * 4 * 12);
		} else if (name === 'hourly-rate') {
			setHourlyRate(value);
			setWeeklyRate(value * workHour);
			setMonthlyRate(value * workHour * 4);
			setYearlyRate(value * workHour * 4 * 12);
		} else if (name === 'weekly-rate') {
			setWeeklyRate(value);
			setHourlyRate(value / workHour);
			setMonthlyRate(value * 4);
			setYearlyRate(value * 4 * 12);
		} else if (name === 'monthly-rate') {
			setMonthlyRate(value);
			setWeeklyRate(value / 4);
			setHourlyRate(value / workHour / 4);
			setYearlyRate(value * 12);
		} else if (name === 'yearly-rate') {
			setYearlyRate(value);
			setMonthlyRate(value / 12);
			setWeeklyRate(value / 12 / 4);
			setHourlyRate(value / 12 / 4 / workHour);
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
					value={hourlyRate ? hourlyRate : 0}
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
					onChange={event => tryConvert(event.target)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					id="weekly-rate"
					label="Weekly Rate"
					name="weekly-rate"
					inputProps={{ 'data-testid': 'weekly-rate' }}
					value={weeklyRate ? weeklyRate : 0}
					onChange={event => tryConvert(event.target)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					id="monthly-rate"
					label="Monthly Rate"
					name="monthly-rate"
					inputProps={{ 'data-testid': 'monthly-rate' }}
					value={monthlyRate ? monthlyRate : 0}
					onChange={event => tryConvert(event.target)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					id="yearly-rate"
					label="Yearly Rate"
					name="yearly-rate"
					inputProps={{ 'data-testid': 'yearly-rate' }}
					value={yearlyRate ? yearlyRate : 0}
					onChange={event => tryConvert(event.target)}
				/>
			</div>
		</Container>
	);
}

export default App;
