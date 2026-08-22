# Hell and Heaven

Personal writing site for hellandheaven.com. Static site built with Astro 5, TypeScript, and MDX content collections.

Nothing is published yet. This repo is the site shell.

## Requirements

- Node.js 18.20.8, 20.3+, or 22+
- A current Node package manager

## Install

Install JavaScript dependencies with the package manager of your choice. A package-lock.json is included.

## Develop

Start the local development server with the dev script in package.json (Astro, default http://localhost:4321). The start script is the same.

## Build

Create a static site with the build script. Output is written to dist/. Serve that output locally with the preview script.

## Content

Posts live in src/content/posts/ as Markdown or MDX files.

Required front matter: title (string), date (date). Optional: description (string). There is no author field.

Leave the posts directory empty until a finished piece exists. A gitkeep file keeps the folder in git.

## Routes

- / home
- /writing index
- /writing/:slug post (404 if the slug does not exist)
- /about
- /rss.xml empty feed until there are posts

## License

MIT. See LICENSE.
