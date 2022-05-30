module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import", {
        "libraryName": "@nicecode/tools",
        "camel2DashComponentName": false
      }
    ]
  ]
};
