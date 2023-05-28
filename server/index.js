import express from 'express';
const PORT = 5001;
const app = express();

app.get('/', (req, res) => {
	res.send('I am backend server');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
