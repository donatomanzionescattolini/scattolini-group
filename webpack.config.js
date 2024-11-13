import NodePolyfillPlugin from 'node-polyfill-webpack/NodePolyfillPlugin'

module.exports = {
    // Other rules...
    plugins: [
        new NodePolyfillPlugin()
    ]
}
resolve.fallback({"path": require.resolve("path-browserify")});
