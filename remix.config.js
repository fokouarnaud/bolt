/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    serverBuildTarget: "netlify",
    server: "./server.js",
    ignoredRouteFiles: ["**/.*"],
    future: {
      v2_errorBoundary: true,
      v2_meta: true,
      v2_normalizeFormMethod: true,
      v2_routeConvention: true,
    },
  };