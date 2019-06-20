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

	const convertTo = name => {
		const rate = {
			weekly: workHour * hourlyRate,
			monthly: workHour * hourlyRate * 4,
			yearly: workHour * hourlyRate * 4 * 12
		};

		return rate[name] || 0;
	};

	const convertFrom = event => {
		const { name, value } = event.target;

		const rate = {
			'weekly-rate': value / workHour,
			'monthly-rate': value / 4 / workHour,
			'yearly-rate': value / 12 / 4 / workHour
		};

		setHourlyRate(rate[name] || 0);
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
					value={hourlyRate || 0}
					onChange={event => setHourlyRate(event.target.value)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					id="work-hours"
					label="Work Hours"
					name="work-hours"
					inputProps={{ 'data-testid': 'work-hours' }}
					value={workHour || 0}
					onChange={event => setWorkHour(event.target.value)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					id="weekly-rate"
					label="Weekly Rate"
					name="weekly-rate"
					inputProps={{ 'data-testid': 'weekly-rate' }}
					value={convertTo('weekly')}
					onChange={event => convertFrom(event)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					id="monthly-rate"
					label="Monthly Rate"
					name="monthly-rate"
					inputProps={{ 'data-testid': 'monthly-rate' }}
					value={convertTo('monthly')}
					onChange={event => convertFrom(event)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					id="yearly-rate"
					label="Yearly Rate"
					name="yearly-rate"
					inputProps={{ 'data-testid': 'yearly-rate' }}
					value={convertTo('yearly')}
					onChange={event => convertFrom(event)}
				/>
			</div>
		</Container>
	);
}

export default App;
