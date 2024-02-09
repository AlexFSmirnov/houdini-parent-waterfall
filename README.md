# Houdini `await parent()` waterfall

This repo proposes a fix for the way Houdini GraphQL manages access tokens. The current implementation always calls `await parent()` in the load functions, resulting in an unnecessary waterfall of requests.

## Setting up the project

Install dependencies:

```sh
yarn
```

Create a [local supabase instance](https://supabase.com/docs/guides/cli/local-development) and create a `.env` with the API URL and anon key values (check `.env.example`)

```sh
supabase start
```

Optionally, create the correct database structure (unless it's been done already):

```sh
supabase db reset
```

Start the projects:

```sh
yarn dev
```