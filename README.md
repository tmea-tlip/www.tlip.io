# Content for the Main TLIP Web Site

Web site for TMA TLIP project [www.tlip.io](www.tlip.io).

The site is built using Svelte.

## Developing Locally

First install and build the project.

```shell
npm run install
npm run build
```

To run the development build locally:

```shell
npm run dev
```

To run the build and run the production version locally:

```shell
npm run build
npm run preview
```

## Code Quality

Make sure the code is formatted correctly by running the following command:

```shell
npm run format
```

To validate the quality of your code and check it for errors you can run the following commands.

```shell
npm run lint
npm run check
```

## Contributing

When creating a new PR make sure you run `npm run dist` before committing, this will run all the necessary code quality checks that are also run in the GitHub actions. If any of these check fail locally, they will also fail creating the PR.

## Deployment

The project contains GitHub actions to automatically deploy the project.

When you create a PR for a new feature it will automatically trigger the preview GitHub action, which will first build and check the code, before deploying it to a staging location.

Features branches that are merged into `main` will trigger the production action to make the site live.
