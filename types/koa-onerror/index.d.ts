// Type definitions for koa-logger 4.1.0
// Project: https://github.com/koajs/onerror
// Definitions by: Tao Zhao <https://github.com/sylvenas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.3.5

import * as Koa from 'koa';

type options = {
  text?: (err: Error, ctx: Koa.Context) => void;
  json?: (err: Error, ctx: Koa.Context) => void;
  html?: (err: Error, ctx: Koa.Context) => void;
  redirect?: string;
  template?: string;
  accepts?: (text: string, json: string, html: string) => string,
}

declare function KoaOnerror(app: Koa, opts?: options): Koa;
declare namespace KoaOnerror { }
export = KoaOnerror;
