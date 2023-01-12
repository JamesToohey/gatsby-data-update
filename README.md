# Gatsby Failing to Reload Page Data

```
npm i
```

## To Reproduce

1. Run:

```
npm run build
npm run serve
```

1. Open browser dev tools and disable cache (to prove this isn't a caching issue)

1. Navigate between pages, observe the price values in the pages (e.g. $100)

1. Kill server

1. Run:

```
npm run clean
npm run build
npm run serve
```

1. Change the `dataThatChangesEveryBuild` constants at the top of `gatsby-node.js`.
   This emulates an external data source providing updated data on a new build.

1. Navigate between pages again, observe the price values never update unless you reload the page

1. Notice that Gatsby never makes any more network requests to inspect the page-data json files. This is not a caching issue.
