
module.exports = ({ env }) => ({
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: env('SENDGRID_API_KEY'),
            },
            settings: {
                defaultFrom: env('EMAIL_FROM'),
                defaultReplyTo: env('EMAIL_FROM'),
                testAddress: env('EMAIL_FROM'),
            },
        },
    },
    graphql: {
        config: {
            endpoint: '/graphql',
            shadowCRUD: true,
            playgroundAlways: true, // Disable in production for security
            depthLimit: 10,
            amountLimit: 100,
            apolloServer: {
                tracing: false,
                introspection: true, // Disable in production for security
            },
        },
    },
});
