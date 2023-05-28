import express from 'express';
const PORT = 5001;
const app = express();

app.get('/api', (req, res) => {
	res.send('I am backend server');
});

app.get('/api/auth', (req, res) => {
	return res.json({
		status: 'SUCCESS',
		message: 'Hello'
	})
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
