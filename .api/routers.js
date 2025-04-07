
// Files Imports
import * as configure from "@api/configure";
import * as API_000 from "@api/root/src/api/send-email.ts";

// Public RESTful API Methods and Paths
// This section describes the available HTTP methods and their corresponding endpoints (paths).
// USE    /api/send-email    src/api/send-email.ts?fn=default
// USE    /api/send-email    src/api/send-email.ts?fn=USE
// GET    /api/send-email    src/api/send-email.ts?fn=GET
// POST   /api/send-email    src/api/send-email.ts?fn=POST
// PATCH  /api/send-email    src/api/send-email.ts?fn=PATCH
// PUT    /api/send-email    src/api/send-email.ts?fn=PUT
// DELETE /api/send-email    src/api/send-email.ts?fn=DELETE

const internal  = [
  API_000.default  && { cb: API_000.default , method: "use"    , route: "/send-email" , url: "/api/send-email" , source: "src/api/send-email.ts?fn=default" },
  API_000.USE      && { cb: API_000.USE     , method: "use"    , route: "/send-email" , url: "/api/send-email" , source: "src/api/send-email.ts?fn=USE"     },
  API_000.GET      && { cb: API_000.GET     , method: "get"    , route: "/send-email" , url: "/api/send-email" , source: "src/api/send-email.ts?fn=GET"     },
  API_000.POST     && { cb: API_000.POST    , method: "post"   , route: "/send-email" , url: "/api/send-email" , source: "src/api/send-email.ts?fn=POST"    },
  API_000.PATCH    && { cb: API_000.PATCH   , method: "patch"  , route: "/send-email" , url: "/api/send-email" , source: "src/api/send-email.ts?fn=PATCH"   },
  API_000.PUT      && { cb: API_000.PUT     , method: "put"    , route: "/send-email" , url: "/api/send-email" , source: "src/api/send-email.ts?fn=PUT"     },
  API_000.DELETE   && { cb: API_000.DELETE  , method: "delete" , route: "/send-email" , url: "/api/send-email" , source: "src/api/send-email.ts?fn=DELETE"  }
].filter(it => it);

export const routers = internal.map((it) => {
  const { method, route, url, source } = it;
  return { method, url, route, source };
});

export const endpoints = internal.map(
  (it) => it.method?.toUpperCase() + "\t" + it.url
);

export const applyRouters = (applyRouter) => {
  internal.forEach((it) => {
    it.cb = configure.callbackBefore?.(it.cb, it) || it.cb;
    applyRouter(it);
  });
};

