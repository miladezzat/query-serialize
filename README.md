# query-serialize
[![Build Status](https://travis-ci.org/miladezzat/query-serialize.svg?branch=master)](https://travis-ci.org/miladezzat/query-serialize)
[![npm version](https://badge.fury.io/js/query-serialize.svg)](https://badge.fury.io/js/query-serialize)
[![GitHub version](https://badge.fury.io/gh/miladezzat%2Fquery-serialize.svg)](https://badge.fury.io/gh/miladezzat%2Fquery-serialize)

## install 
```js
    npm i query-serialize --save
    // Or
    yarn add query-serialize
```
## usage
```js
    const serialize = require("query-serialize");
    //or
    import serialize from "query-serialize";

    app.use(serialize);
    // Or
    app.get('/', serialize, (req, res, next)=>{
        //console.log(req.conditions)
    });
```