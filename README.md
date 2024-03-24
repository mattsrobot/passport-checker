# Welcome to Passport Extractor

This is a little demo project showing a full stack web application with Remix, Node.js using the AWS Text Extract api to extract information (like date of birth) from uploaded passport photos.

## Setup:

Include a .env file with the following:

```shellscript
AWS_ACCESS_KEY_ID="your key id"
AWS_SECRET_ACCESS_KEY="your secret"
AWS_REGION="eu-west-2"
```

## Development

Run the Express server with Vite dev middleware:

```shellscript
npm run dev
```

### Testing

To run the tests locally:

```shellscript
npm run test
```

## Deployment

Use the provided Dockerfile to deploy to Railway.app or Heroku
