var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var import_axios = __toESM(require("axios"));
var import_cheerio = require("cheerio");
var proxy = {
  host: "104.227.13.3",
  //代理服务器地址
  port: 8562,
  //端口
  auth: {
    // auth认证信息，阿布云那边有，squid 的话不需要
    username: "jjdlvuaj",
    password: "s91rimzu3kne"
  }
};
function getPage() {
  let url = "https://www.nordstrom.com/s/chanel-le-rouge-duo-ultra-tenue-ultra-wear-lip-colour/5022647";
  import_axios.default.get(url, { proxy }).then(function(response) {
    let html_string = response.data.toString();
    const $ = (0, import_cheerio.load)(html_string);
    console.log($);
  }).catch(function(error) {
    console.log(error);
  });
}
getPage();
