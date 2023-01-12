# Gatsby Failing to Reload Page Data

When using an external data source to populate pages and page data in `gatsby-node.js`, Gatsby never retrieves new `page-data.json` files on deploy. This results in stale data if users navigate between pages but never reload manually.

Install:

```
npm i
```

## To Reproduce

1. Run:

```
npm run build
npm run serve
```

2. Open browser dev tools and disable cache (to prove this isn't a caching issue)

3. Navigate between pages, observe the price values in the pages (e.g. $100)

4. Kill server

5. Run:

```
npm run clean
npm run build
npm run serve
```

6. Change the `dataThatChangesEveryBuild` constants at the top of `gatsby-node.js`.
   This emulates an external data source providing updated data on a new build.

7. Navigate between pages again, observe the price values never update unless you reload the page

8. Notice that Gatsby never makes any more network requests to inspect the page-data json files. This is not a caching issue.
