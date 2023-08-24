const env = {
	port: process.env.PORT || 3000,
    databaseUrl: process.env.DATABASE_URL,
    secretKey: process.env.SECRET_KEY || 'secret',

    stipeSecretKey: process.env.STRIPE_SECRET_KEY

}

export default env