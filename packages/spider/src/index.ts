import axios from 'axios'
import cheerio from 'cheerio'

// 配置代理服务器信息
var proxy = {
    host: "104.227.13.3", //代理服务器地址
    port: 8562,//端口
    auth: { // auth认证信息，阿布云那边有，squid 的话不需要
        username: 'jjdlvuaj',
        password: 's91rimzu3kne'
    }
};

function getPage() {
  let url = 'https://www.nordstrom.com/s/chanel-le-rouge-duo-ultra-tenue-ultra-wear-lip-colour/5022647'

  axios.get(url, { proxy })
    .then(function (response) {
        let html_string = response.data.toString();
        console.log(html_string)
        const $ = cheerio.load(html_string); // 传递页面到模块
    })
    .catch(function (error) {
        console.log(error);
    })
}

getPage()
