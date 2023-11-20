### This is a [Next.js](https://nextjs.org/) (TypeScript) boilerplate with [Tailwind](https://tailwindcss.com/) and [PostgreSQL](https://www.postgresql.org/) + [pgAdmin](https://www.pgadmin.org/) running on [Docker](https://www.postgresql.org/)

 Also includes [Prisma ORM](https://www.prisma.io/), [Jotai](https://jotai.org/), [Sass](https://sass-lang.com/) and some example components.

&nbsp;

## Getting Started

First, run the development server:

```bash
# create a local .env file with the following properties:
#
# POSTGRES_USER=__username__
# POSTGRES_PASSWORD=__pass__
#
# DATABASE_URL="postgresql://__username__:__pass__@local_pgdb:5432/quotes?schema=public"
#
# PGADMIN_DEFAULT_EMAIL=username@domain.com
# PGADMIN_DEFAULT_PASSWORD=__pass__

npm install

# then
npm run dev
# ... for local development

# or
npm run docker
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
