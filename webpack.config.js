const path = require("path");

class MyPlugin {
  apply(compiler) {
    compiler.hooks.run.tap("MyPlugin", () => {
      console.log("🚀 Build Started");
    });

    compiler.hooks.done.tap("MyPlugin", () => {
      console.log("✅ Build Finished Successfully!");
    });
  }
}

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  plugins: [new MyPlugin()],
};