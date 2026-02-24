import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
	res.json({ message: 'Hello, World!' })
})

app.post('/auth/login', (req, res) => {
	const { email, password } = req.body
	console.log(`Login attempt with email: ${email} and password: ${password}`)
	res.send()
})

app.post('/partners', (req, res) => {
	const { name, email, password, company_name } = req.body
})

app.post('/costumers', (req, res) => {
	const { name, email, password, telephone, address } = req.body
})

app.post('/events', (req, res) => {
	const { name, description, date, location } = req.body
})

app.post('/partners/events', (req, res) => {
	const { name, description, date, location } = req.body
})

app.get('/events', (req, res) => {})

app.get('/partners/events', (req, res) => {})

app.get('/events/:eventId', (req, res) => {
	const { eventId } = req.params
	res.send(`Event ID: ${eventId}`)
	console.log(`Fetching details for event ID: ${eventId}`)
})

app.get('/partners/events/:eventId', (req, res) => {
	const { eventId } = req.params
	res.send(`Event ID: ${eventId}`)
	console.log(`Fetching details for event ID: ${eventId}`)
})

app.listen(3000, () => {
	console.log('Server is running on port 3000')
})
