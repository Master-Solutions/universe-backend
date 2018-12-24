### Debugging

In Webstorm one can enable debugging by the following trick:

node --debug node_modules/serverless/bin/serverless offline start --skipCacheInvalidation

--skipCacheInvalidation option is important. Once absent, a breakpoint is hit only on the first request. 
Once you remove/add this breakpoint back, you can catch another request.
