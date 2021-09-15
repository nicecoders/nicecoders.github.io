'use strict';

const sensitivewords = require('..');

describe('sensitiveWords', () => {
    it('needs tests');
});


// (function () {
//     'use strict';
//     var afterReadyCbCalled = false;
//     var originalHeaders = ["X-arrakis-rFsaktzlSNC7abeflJTvEg", "ppl52fErR0KQnYXTZSScEw", "X-Forwarded-Host", "www.nordstrom.com", "accept-language", "zh-CN,zh;q=0.9", "True-Client-IP", "45.33.106.26", "X-Akamai-Edgescape", "georegion=-,country_code=US,region_code=CA,city=fremont,dma=807,pmsa=-,areacode=510,county=-,fips=-,lat=37.560,long=-122.000,timezone=-700,zip=94536,continent=NA,throughput=broadband,asnum=63949", "X-Cloud-Trace-Context", "c5ff9fff8108a7e1bcbebad56241cbab/17115598483986702436", "X-Method", "GET", "Nord-Source-Channel", "FULL_LINE", "Nord-Request-ID", "Q3AbISjPQQaSqXvnbOFzpw", "X-Path-Normalized", "\/s/chanel-le-rouge-duo-ultra-tenue-ultra-wear-lip-colour/5022647", "x-ion-healthy", "true", "Nord-Country-Code", "US", "CDN-Loop", "Fastly", "Nord-Channel-Brand", "NORDSTROM", "Fastly-SSL", "1", "Fastly-Orig-Accept-Encoding", "gzip, deflate, br", "x-jungle-id", "43701b21-28cf-4106-92a9-7be76ce173a7", "Fastly-Client-IP", "45.33.106.26", "X-Forwarded-For", "45.33.106.26, 45.33.106.26, 157.52.96.72, 34.120.166.158", "accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", "X-Forwarded-Server", "cache-sjc10072-SJC", "Fastly-Temp-XFF", "45.33.106.26, 45.33.106.26", "traceparent", "00-c5ff9fff8108a7e1bcbebad56241cbab-ed86d2238c3de064-00", "X-Varnish", "1221206823", "X-Forwarded-Proto", "https", "upgrade-insecure-requests", "1", "ISTL-REFERER", "https://www.nordstrom.com/s/5022647",];
//     var originalBody = "";

//     function afterReadyCb() {
//         if (afterReadyCbCalled) return;
//         afterReadyCbCalled = true;
//         var xhr = new XMLHttpRequest();
//         xhr.onload = function () {
//             var isValid = xhr.getResponseHeader("ISTL-INFINITE-LOOP");
//             if (isValid != null && isValid != '') return;
//             var a = xhr.getResponseHeader("ISTL-REDIRECT-TO");
//             if (a != null && a != '') {
//                 location.replace(a);
//             } else {
//                 if (window.history != null && typeof history.replaceState === 'function') {
//                     var responseURL = xhr.responseURL != null ? xhr.responseURL : xhr.getResponseHeader("ISTL-RESPONSE-URL");
//                     if (responseURL != null && responseURL != '') {
//                         history.replaceState(null, '', responseURL);
//                     }
//                 }
//                 // DO NOT INLINE. There is a bug specific to IE/Edge.
//                 var responseText = xhr.responseText;
//                 document.open();
//                 document.write(responseText);
//                 document.close();
//             }
//         };
//         xhr.open("get", location.href, true);
//         for (var i = 0; i < originalHeaders.length; i += 2) {
//             var headerName = originalHeaders[i];
//             try {
//                 xhr.setRequestHeader(headerName, originalHeaders[i + 1]);
//             } catch (e) {
//             }
//         }
//         xhr.setRequestHeader("ISTL-INFINITE-LOOP", '1');
//         xhr.send(originalBody);
//         var evt = document.createEvent('Event');
//         evt.initEvent('sKqpTSySo', true, true);
//         dispatchEvent(evt);
//     }

//     addEventListener('afterReady', afterReadyCb, false);
//     setTimeout(afterReadyCb, 200);
// }());