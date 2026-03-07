import { createRequire } from "module";
import NodePolyfillPlugin from "node-polyfill-webpack/NodePolyfillPlugin";

const require = createRequire(import.meta.url);

const resolve = {
    fallback: {
        path: require.resolve("path-browserify"),
    },
};

export default {
    // Other rules...
    plugins: [
        new NodePolyfillPlugin(),
    ],
    resolve,
};
