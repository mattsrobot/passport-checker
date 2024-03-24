import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from 'vitest/config';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  ssr: {
    noExternal: [
      "@aws-sdk/client-sso",
      "@aws-sdk/client-sso-oidc",
      "@aws-sdk/client-sts",
      "@aws-sdk/client-textract",
      "@aws-sdk/core",
      "@aws-sdk/credential-provider-env",
      "@aws-sdk/credential-provider-http",
      "@aws-sdk/credential-provider-ini",
      "@aws-sdk/credential-provider-node",
      "@aws-sdk/credential-provider-process",
      "@aws-sdk/credential-provider-sso",
      "@aws-sdk/credential-provider-web-identity",
      "@aws-sdk/middleware-host-header",
      "@aws-sdk/middleware-logger",
      "@aws-sdk/middleware-recursion-detection",
      "@aws-sdk/middleware-user-agent",
      "@aws-sdk/region-config-resolver",
      "@aws-sdk/token-providers",
      "@aws-sdk/types",
      "@aws-sdk/util-endpoints",
      "@aws-sdk/util-user-agent-browser",
      "@aws-sdk/util-user-agent-node",
      "@smithy/abort-controller",
      "@smithy/config-resolver",
      "@smithy/core",
      "@smithy/credential-provider-imds",
      "@smithy/eventstream-codec",
      "@smithy/fetch-http-handler",
      "@smithy/hash-node",
      "@smithy/invalid-dependency",
      "@smithy/is-array-buffer",
      "@smithy/middleware-content-length",
      "@smithy/middleware-endpoint",
      "@smithy/middleware-retry",
      "@smithy/middleware-serde",
      "@smithy/middleware-stack",
      "@smithy/node-config-provider",
      "@smithy/node-http-handler",
      "@smithy/property-provider",
      "@smithy/protocol-http",
      "@smithy/querystring-builder",
      "@smithy/querystring-parser",
      "@smithy/service-error-classification",
      "@smithy/shared-ini-file-loader",
      "@smithy/signature-v4",
      "@smithy/smithy-client",
      "@smithy/types",
      "@smithy/url-parser",
      "@smithy/util-base64",
      "@smithy/util-body-length-browser",
      "@smithy/util-body-length-node",
      "@smithy/util-buffer-from",
      "@smithy/util-config-provider",
      "@smithy/util-defaults-mode-browser",
      "@smithy/util-defaults-mode-node",
      "@smithy/util-endpoints",
      "@smithy/util-hex-encoding",
      "@smithy/util-middleware",
      "@smithy/util-retry",
      "@smithy/util-stream",
      "@smithy/util-uri-escape",
      "@smithy/util-utf8",
      "bowser",
      "tslib",
      "uuid",
      "@aws-sdk/client-cognito-identity",
      "@aws-sdk/client-sso",
      "@aws-sdk/client-sso-oidc",
      "@aws-sdk/client-sts",
      "@aws-sdk/core",
      "@aws-sdk/credential-provider-cognito-identity",
      "@aws-sdk/credential-provider-env",
      "@aws-sdk/credential-provider-http",
      "@aws-sdk/credential-provider-ini",
      "@aws-sdk/credential-provider-node",
      "@aws-sdk/credential-provider-process",
      "@aws-sdk/credential-provider-sso",
      "@aws-sdk/credential-provider-web-identity",
      "@aws-sdk/credential-providers",
      "@aws-sdk/middleware-host-header",
      "@aws-sdk/middleware-logger",
      "@aws-sdk/middleware-recursion-detection",
      "@aws-sdk/middleware-user-agent",
      "@aws-sdk/region-config-resolver",
      "@aws-sdk/token-providers",
      "@aws-sdk/types",
      "@aws-sdk/util-endpoints",
      "@aws-sdk/util-user-agent-browser",
      "@aws-sdk/util-user-agent-node",
      "@smithy/abort-controller",
      "@smithy/config-resolver",
      "@smithy/core",
      "@smithy/credential-provider-imds",
      "@smithy/eventstream-codec",
      "@smithy/fetch-http-handler",
      "@smithy/hash-node",
      "@smithy/invalid-dependency",
      "@smithy/is-array-buffer",
      "@smithy/middleware-content-length",
      "@smithy/middleware-endpoint",
      "@smithy/middleware-retry",
      "@smithy/middleware-serde",
      "@smithy/middleware-stack",
      "@smithy/node-config-provider",
      "@smithy/node-http-handler",
      "@smithy/property-provider",
      "@smithy/protocol-http",
      "@smithy/querystring-builder",
      "@smithy/querystring-parser",
      "@smithy/service-error-classification",
      "@smithy/shared-ini-file-loader",
      "@smithy/signature-v4",
      "@smithy/smithy-client",
      "@smithy/types",
      "@smithy/url-parser",
      "@smithy/util-base64",
      "@smithy/util-body-length-browser",
      "@smithy/util-body-length-node",
      "@smithy/util-buffer-from",
      "@smithy/util-config-provider",
      "@smithy/util-defaults-mode-browser",
      "@smithy/util-defaults-mode-node",
      "@smithy/util-endpoints",
      "@smithy/util-hex-encoding",
      "@smithy/util-middleware",
      "@smithy/util-retry",
      "@smithy/util-stream",
      "@smithy/util-uri-escape",
      "@smithy/util-utf8",
      "bowser",
      "tslib",
      "uuid",
    ],
  },
  test: {
    dir: "tests",
    globals: true,
    environment: "jsdom",
  },
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*.css"],
    }),
    tsconfigPaths()
  ],
});
