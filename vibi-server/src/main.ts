import app from './app'
import env from './config/env.config'

app.listen(env.port, async () => {
	try {
		console.log(`Ready on http://localhost:${env.port}`)
	} catch (error) {
		console.log('ERROR:', error)
	}
})

