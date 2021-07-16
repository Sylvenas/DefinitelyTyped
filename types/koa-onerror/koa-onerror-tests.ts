import koa = require('koa');
import onerror = require('koa-onerror');

const app = new koa();

onerror(app, {});
