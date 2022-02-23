import * as functions from "firebase-functions";
import type { IncomingMessage, ServerResponse } from "http";
import { useCookie } from "h3";

export default async (req: IncomingMessage, res: ServerResponse, next) => {
  if (req.url.includes("/api/privateEndpoint")) {
    const path = useCookie(req, "__session");
    const cookieSecure = useCookie(req, "secureTrue");
    const cookieDomain = useCookie(req, "domain");
    const cookiehttpOnly = useCookie(req, "httpOnlyTrue");
    const cookieSameSiteStrict = useCookie(req, "SameSiteTrue");
    const cookieSameSiteLax = useCookie(req, "SameSiteLax");
    const oneCookieToRueleThemAll = useCookie(req, "allinone");
    const everythingExcepthttponly = useCookie(req, "allinone2");
    const message = `I am the middleware. My received cookies are: ${path}. secureTrue: ${cookieSecure},\n , cookieDomain: ${cookieDomain}, \n  httpOnlyTrue: ${cookiehttpOnly},  sameSiteStrict:${cookieSameSiteStrict}, sameSiteLax:${cookieSameSiteLax},  secureThttpFsameSiteTpath:${oneCookieToRueleThemAll},  secureTsameSiteTpathMaxAge3600: ${everythingExcepthttponly},  Cookie Header (req.headers.cookie): ${req.headers.cookie}  Entire Header (req.headers): ${JSON.stringify(req.headers)}`;

    functions.logger.log("Middleware: req.header.cookie", req.headers.cookie);
    functions.logger.log("Middleware: path:", path);
    functions.logger.log("Middleware: cookieSecure", cookieSecure);
    functions.logger.log("Middleware: cookiehttpOnly", cookiehttpOnly);
    functions.logger.log("Middleware: cookieSameSiteStrict", cookieSameSiteStrict);
    functions.logger.log("Middleware: cookieSameSiteLax", cookieSameSiteLax);
    functions.logger.log("Middleware: oneCookieToRueleThemAll", oneCookieToRueleThemAll);

    res.end(message);
  }
  next();
};
