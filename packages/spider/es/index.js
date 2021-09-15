import axios from 'axios';
import cheerio from 'cheerio'; // 配置代理服务器信息

var proxy = {
  host: "104.227.13.3",
  port: 8562,
  auth: {
    username: 'jjdlvuaj',
    password: 's91rimzu3kne'
  }
};

function getPage() {
  var url = 'https://www.nordstrom.com/s/chanel-le-rouge-duo-ultra-tenue-ultra-wear-lip-colour/5022647';
  axios.get(url, {
    proxy: proxy
  }).then(function (response) {
    var html_string = response.data.toString();
    console.log(html_string);
    var $ = cheerio.load(html_string); // 传递页面到模块
  }).catch(function (error) {
    console.log(error);
  });
}

getPage();