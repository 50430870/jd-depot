/*
粉丝福利红包一次性
cron:19 17,18 9 9 *
============Quantumultx===============
[task_local]
#粉丝福利红包一次性
19 17,18 9 9 * jd_fanshb.js, tag=粉丝福利红包一次性, enabled=true
 */

const $ = new Env('粉丝福利红包一次性');
var OＯ0$='jsjiami.com.v6',OＯ0$_=['‮OＯ0$'],O00O=[OＯ0$,'wop9NgLDqg==','wqHDtDvDg8Oi','wpnDm8Krwqo=','ex5ZwoM3','CsKWw4U8W28BFEzDm3HCscOuZQHCrGrDv8K8A0smwrE0VFHCvMKMw7kbwosFwq3Ch27CmcOOw4zDhCLDmhrChQzDh8O3AMKyFxgww6rDm8KSw4DDjngzYEDDuFJnw7N9wqrCgMKhGDF6fSE=','wpUwwr0fVQ==','wrwZB8KRcA==','CsKXYWDCksK9w6VxAsOLwr5zwoTDgSUmWCkvw7guIS3CiWNgwprCnyPDkMKQTjTDnMKSNyrCiMKCw44gw4PCjcOSwrzDnnvCnyh+w5XDhyHDi8KbcBbDhErDlsOTWWjDlVTDvjvCkgLDpUHCisKy','wqTDkMK5w7fDlQ==','w4xoPg==','wosuw4IfKg==','JMKYwqd4','wr/Ci1rCvMKD','wqfDiDwkwpU=','B21G','5Lm35Liu5p205YqT5Zqy6L+l5ZmJ56qK5pWc5o6Q','dhlAJDQ=','OsOnwqdmPQ==','S8KBdmHCncKsw7I=','PcOTw4DDm8OAGsKFw7s=','fjjCqsOMwqsYw7jCrBc=','XyN/Kmg=','HcOTw4DDm8OAGg==','w7HDh8K/wqIeCg==','w5DCucKlEmY=','fl/Cqk9+','w6RcBX/DqQ==','NHx5fk1ew78=','wqTCjsKOw7nChMK1fQ==','wppWcMO3Ew==','wo8Mw6g8Kxwuwoc=','wqNAwpnDrcO0AzrDqg==','wqDCk8Osw4rDisOow7TDpw==','5a6C77+P6I235by2776+','bk5Dw54=','N1LDgcK3','woQ3cMKW','bAbCisOo','VcOkwr/DpQ==','Fhl8','GcOGw4bDgMKFX8Krw5oEIcKiwq3DlMKVKcKALA==','w41xSGFUcFgrwqjChw==','Qz44wqYCQsKqX8KF','wqV5NMKXTA==','wrrCscOGw7fCtA==','wpnCusKrw5U=','cQLDkB7ClA==','DD9kIWU=','YMOEwp7DkQ==','w44rw6LDuUBjQ8Khwq3DoMKTwoPColjDmMO/Ug9JOsK4w4cJwp9oXcKLMUPCqcOGQcOxw60lQzXDv8KEPcKlckXDnHwSA8KBwrzCvVhk','NcOJw5Y1w5s=','w75owpcpw6M=','TQXCm2FseMOqwoMJwqvDh2EKw7LCrDXDlFHCnF8MwoXCvm0ywqRLN1RKXmLDjiR/wpvDnl3CkGTCu2NcU8OrwoUfwpF1VsKmwrw=','w5U7K8K7UWbDgC3DhEhLw6lRKhdNf8O0wqLDvsO2w6xqw6bCvVouOMKDA8K0wonDnsKcThzDjsO+wr7Do8Ohw5ssVnx8KMOnOnDCmMO+bzjCn8KawqTCo8ORw6LCk8KEw7MiSy5fw50TwoTCv0U=','cDjCv8OOwq4Rw5PDhxDDkjTDr8O4w6TDiiEPw7jCtcOHw6QRwodsfMKvDMKPO8KOEk4ZbsOyIwdawqYIw4Elw5DDhcK4B2EVLMOIHk7DhcK8U8KGwpbDhV/DjMK9woHCox3DtCVxwqdOYwrCisKXd8OtdMOAwpXCs8KfAG/DswXDh8OJwo5BwonCr8OCe0TDnMO4bsO1SsKZw7nCt8KkwpTDpD9nCsKtHMKDPcKGLlbDlkDDucOxwoEkwpnCtA0WW8OSwpbCtDbDvmLDscOYNhgyw4U=','w5Y9wqw=','dD7CoCFO','KhfCqsKbaA==','UmIIwrbCuQ==','wr/DqjvCvMOi','FTHChsOAacKBwr9o','LRHClMO1ZB/CtAM=','wp/DmCfDvMKP','wpnCpMKrw4s=','IjPDv8KTA0bCij9Jw4Q=','CcKYw7MHw6I=','wqXCu8KIw7PCkcK0VsOaGiI=','NBfCtMO6Fw==','MjY+w6kR','Uk8Bw6bCi8KxP8OgBcKZ','T2Ykw4w+ZsKIwr5bSg==','FzfCgg==','dXjCj8KswpnCsg==','b0IgwqLCmsOg','FMOzX2gQ','Ny3DgcOIew==','w6kQwqbDhmI=','SsK5w5M4J3k=','44Om5oyo56WX44G66Kyz5YaF6I2p5Y6n5LiW5Lq76LW/5Y6K5LutYsKbQsOJwp3CpxHnmJrmjankvrPnlZ/CmkLCgCMlw57nmJzkuKzkuJ7nrKrli7/ojKfljL0=','wrTCisKJw78=','w6AXwokp','cC88w4A=','IwbDucKZFkfCoQ==','c2cHw7Q=','w7pcG38=','c8K2wqhDdUXDlVbDh1fDscKfwqvCqsOnw7fDi8OhIU/Cj8OUUDLDlHbCkMK9wrgnIMK7','SWbCjcKFwoHDmH5Gw4XDojNdw5M1eg1zfMOVMnDDpDkveGpQw7nDqXUZEkg=','fm3CgcKZw4fDoMKdwqNQFUIFJTh7w410','wrNGDULCqQvCuMOfW8KPwpxbwqNCw6fCk8O0U8KlwrbCqsOhVMOaw5PClDV+LXHCiUrCtVpGIcKww70Mw6daw4/DszDDgMKKw6nClsO6','IcKTw4Jo','NBfCtMOkFw==','wrrCscK5w7fDlQ==','KS3CoMOIew==','wrnCqV0kwos=','w71IwoLCisKO','X2/CiW1U','w5DCp8OEbQ==','X2/DqG0r','woQ3cMOpbA==','FsKjwpjDjA==','b2PDkH8=','wopOLBA3','wrnDiCIkw7Q=','wqFaVFHCtA==','ecKjwr1fMUfDmEvDmF0=','TB13w5fDmA==','wqhHwow=','YlLCosK8wrvDvk1tw63Dihg8w78=','d8Kowq4=','K8OJw5Y1w5s=','Y8OVw7dpZA==','GcOZw5vDlMOIC8Ku','cmfDtcO2w7I=','NcOJw4g1wro=','wqV5NMO2LQ==','bQZmwpUV','cWPCsWE=','woDDmmbClg==','w47DulvCuuispeazhOWmsui1uO+9peitvuahoOafrue8uui0oOmFouisog==','wqTDkMK5wojDiw==','bQYZw6p0','wpnDm8OKw4vCug==','w6kkHSE2','w75ow6hIwpw=','wqfCqTxbw7Q=','FHU9w5cnwo3CkQ==','wpJawoHCpsKl','XcO2wpdgUw==','wqcfb0U=','fgUsEFckTmo=','TGTCjcKbwqXCocKUwqM=','wqJ4eMOubg==','NcK2w5Yrw4U=','LEkgw7cP','QcKWw4E=','SMK3w5kY','NBfDlcOkFw==','aGYhJFU=','wqdbw6PDnQ4=','w4p7Sg==','5LqR5LmL5p+I5YiG5Zqq6L6p5Zms56qS5pWV5o6S','Xlclw4A=','K8Kow5ZUw5s=','Yzw9EkMgbW5Awqk=','wodJcMOEdQ==','wr55wojDr8OABxnDrnBn','UTjCog==','w74Jw6gpw6M=','akfCmsKAwpHCpcK3wqdbHA==','QSN/NAk=','bwLCsX/Cig==','Z0fCrMOZwqc=','CsOzPhdv','TFckw5Yh','BMK1w71MbsO/','RHnCmg==','5Lqo5Lq35p+95YiV5Zq76K6G6Zeh5peC5o2T5Li356mx77yE6Kyp5qKy5p2z6IaK6LmO6K6K5aWy57yH57m55oGM5YaG','UMKMw7DCkQ==','6Kyi5Yu46Zqw5oap5ZyLaF8ZwrfCrui/reWEkOagoeS9p+aWiuWEveWvrwnlurDorLXpgIHovbXohbfmn57lj6Dojb7ljIQpV1nCmcOXFw==','ADLCvcKrKA==','GHZTwrcnw7s=','wppIcMKWcg==','w4bDocOjwpkq','FA3Clg==','woMpOsKtWg==','NcKdwq4=','acOYwpc=','UzbCqMOC','cQLCsWHCig==','RcKWw6g2UW8=','RS1Swrsnw7h4RD3Co8KswoE=','VUUYw4ogZg==','w4Utw6/DuUc2QcOkwqk=','wr/CmMK0w7XCj8K0','w5l8wqrDiQ==','E8K2wpbCuDzDvDVU','MRzCusOvYsKiwodK','w5V8wqfDnsOfdsKJ','w4xoPivCuMOyXQ==','wrAnJ8K1VmbDvAjCmg==','PsKXwr3CmBjDigE=','RXfCjQ==','G28dw4wlwpY=','a00qw5fDgcOtQcK2','PwzDug==','5a+g77yK6I+G5byv772a','44K25o+E56SX44CA6K6O5YWZ6I6D5Y6U5Lmy5Lu+6LSh5Y+d5Lm7GwRqHkTDnDTnmarmjJ/kvY3nlaUZw6zDgk3Ch3jnmKTkuovku7/nrrPliJ3ojrfljq4=','CMKjw7nCsw==','woBgw4bDoizCgkAFwonDh8KiwozCv3nDucKjwqBHw53CvBfClhVzw6zCiww+w7waG8ObbMOewr/Ds8K9IcKeShQgDg==','csKwwqc=','PwLDoMKf','wp/Cp1jCgw==','NXtBYVkNwr5DUirCjBjDtcOpSMKRwrPCs8OlPH7Dr2LCuHTCkGVVw6HDtcK+wpVZOcOWL1zCkjvChMO8w5s+','wq0KaFAVw5HCpMO/BQTClMOdwqsscAUdPsKoFkcaw5PCrsO8XlPDncObCcOJwrbCskokw5HCt8KPwrfCpkzDusKu','wrzDsnnDlMK0wr0=','NzPCvsOI','JMKGw5hm','cALCimNRI8Kow4k=','w594wqfDmcOW','TALCo354K8Kr','N8KbwqrClzfDnw12','wp8nLw==','wrgzw7nCkMKUKMOC5b215aex44O85LqB5LuE6LeG5Y2j','LDYgw7c=','dD7CoCE=','w503wr9cwqHDvQ==','w7rDncK0','Ulc7w4A=','44OG5oy756eA44KLwojCvnfDkB4i5bah5aea5pW3','wqplwrTDs8KM','UDrCg0XClTTCt8OV','McKKw6IWw4TCmRTDlg==','wqJ4GcKP','wqRawrTDqcOeBw==','RnfCkMKM','DMKBwqzCjjfDnw12','5LqJ5Lmt6LeJ5Y+m','w5g2wrx8wqs=','wpZ4wrXDpMK6ZcOEwrM=','w5Hor4XphrTmloLnmqHlvaTojKDljKZPwpHCgB7CoEM=','YlHCvw==','DlYDw5E6woHCsUQew5E=','Rx9kwqUcCcKHUcKFZQ==','wpl4dsOOZ8KXwo/DoUjCig==','EWkW','wooxTW8=','HjLDgsKr','F8Kpw7UNw7DCnTfDksKPGg==','bGfDtcOo','w7o9egA=','bcOYwr7Dm8K3XA==','wrBuwr7DssK6a8Odwr8Mw7c=','d3bChcKM','fMKnwrVK','CMK2w6NKZQ==','Wi57wqk=','Lw3lpbbot4LDicKy5Y6k5Zu5w4Is','a3LCnMKKwoTCpMKc','wpR9SWM=','UnwIwrY=','BsOLKA==','w5w3wrvDql0=','rjlysjigamuiq.cGkorVSm.tvp6=='];if(function(_0xb2f933,_0x3b6672,_0x272d32){function _0x19dc44(_0x26df4f,_0x323918,_0x5520be,_0x30ac17,_0x21076a,_0x51455d){_0x323918=_0x323918>>0x8,_0x21076a='po';var _0x179bf1='shift',_0x1646c5='push',_0x51455d='‮';if(_0x323918<_0x26df4f){while(--_0x26df4f){_0x30ac17=_0xb2f933[_0x179bf1]();if(_0x323918===_0x26df4f&&_0x51455d==='‮'&&_0x51455d['length']===0x1){_0x323918=_0x30ac17,_0x5520be=_0xb2f933[_0x21076a+'p']();}else if(_0x323918&&_0x5520be['replace'](/[rlyguqGkrVStp=]/g,'')===_0x323918){_0xb2f933[_0x1646c5](_0x30ac17);}}_0xb2f933[_0x1646c5](_0xb2f933[_0x179bf1]());}return 0x101db4;};return _0x19dc44(++_0x3b6672,_0x272d32)>>_0x3b6672^_0x272d32;}(O00O,0xa9,0xa900),O00O){OＯ0$_=O00O['length']^0xa9;};function O0QQ(_0x57a8fb,_0x91931a){_0x57a8fb=~~'0x'['concat'](_0x57a8fb['slice'](0x1));var _0x4aaaa5=O00O[_0x57a8fb];if(O0QQ['QQ0OOO']===undefined){(function(){var _0x47e3d3=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x401660='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x47e3d3['atob']||(_0x47e3d3['atob']=function(_0x50a8ae){var _0x3d685c=String(_0x50a8ae)['replace'](/=+$/,'');for(var _0x53e47a=0x0,_0x1894f6,_0x3a2375,_0x3dfcf6=0x0,_0x370082='';_0x3a2375=_0x3d685c['charAt'](_0x3dfcf6++);~_0x3a2375&&(_0x1894f6=_0x53e47a%0x4?_0x1894f6*0x40+_0x3a2375:_0x3a2375,_0x53e47a++%0x4)?_0x370082+=String['fromCharCode'](0xff&_0x1894f6>>(-0x2*_0x53e47a&0x6)):0x0){_0x3a2375=_0x401660['indexOf'](_0x3a2375);}return _0x370082;});}());function _0x4879f4(_0x2dc7b4,_0x91931a){var _0x1580d7=[],_0x38e1e3=0x0,_0x38464d,_0x54ffae='',_0x34be8f='';_0x2dc7b4=atob(_0x2dc7b4);for(var _0x5870d5=0x0,_0x33f70e=_0x2dc7b4['length'];_0x5870d5<_0x33f70e;_0x5870d5++){_0x34be8f+='%'+('00'+_0x2dc7b4['charCodeAt'](_0x5870d5)['toString'](0x10))['slice'](-0x2);}_0x2dc7b4=decodeURIComponent(_0x34be8f);for(var _0x1ec436=0x0;_0x1ec436<0x100;_0x1ec436++){_0x1580d7[_0x1ec436]=_0x1ec436;}for(_0x1ec436=0x0;_0x1ec436<0x100;_0x1ec436++){_0x38e1e3=(_0x38e1e3+_0x1580d7[_0x1ec436]+_0x91931a['charCodeAt'](_0x1ec436%_0x91931a['length']))%0x100;_0x38464d=_0x1580d7[_0x1ec436];_0x1580d7[_0x1ec436]=_0x1580d7[_0x38e1e3];_0x1580d7[_0x38e1e3]=_0x38464d;}_0x1ec436=0x0;_0x38e1e3=0x0;for(var _0x42a6c3=0x0;_0x42a6c3<_0x2dc7b4['length'];_0x42a6c3++){_0x1ec436=(_0x1ec436+0x1)%0x100;_0x38e1e3=(_0x38e1e3+_0x1580d7[_0x1ec436])%0x100;_0x38464d=_0x1580d7[_0x1ec436];_0x1580d7[_0x1ec436]=_0x1580d7[_0x38e1e3];_0x1580d7[_0x38e1e3]=_0x38464d;_0x54ffae+=String['fromCharCode'](_0x2dc7b4['charCodeAt'](_0x42a6c3)^_0x1580d7[(_0x1580d7[_0x1ec436]+_0x1580d7[_0x38e1e3])%0x100]);}return _0x54ffae;}O0QQ['Q0OQO0']=_0x4879f4;O0QQ['QQ0OOQ']={};O0QQ['QQ0OOO']=!![];}var _0x189956=O0QQ['QQ0OOQ'][_0x57a8fb];if(_0x189956===undefined){if(O0QQ['O0OOQO']===undefined){O0QQ['O0OOQO']=!![];}_0x4aaaa5=O0QQ['Q0OQO0'](_0x4aaaa5,_0x91931a);O0QQ['QQ0OOQ'][_0x57a8fb]=_0x4aaaa5;}else{_0x4aaaa5=_0x189956;}return _0x4aaaa5;};const notify=$[O0QQ('‫0','Yk&W')]()?require(O0QQ('‫1','nHt(')):'';const jdCookieNode=$[O0QQ('‮2','hlAx')]()?require('./jdCookie.js'):'';CryptoJS=$['isNode']()?require(O0QQ('‫3','mwjq')):CryptoJS;let cookiesArr=[],cookie='';if($[O0QQ('‮4','6i7g')]()){Object[O0QQ('‫5','YRLV')](jdCookieNode)['forEach'](OQQOO=>{cookiesArr['push'](jdCookieNode[OQQOO]);});if(process['env'][O0QQ('‮6','k$RX')]&&process['env'][O0QQ('‫7','Os8l')]==='false')console['log']=()=>{};}else{cookiesArr=[$[O0QQ('‫8','YRLV')]('CookieJD'),$[O0QQ('‫9','VwM2')](O0QQ('‮a','a&PN')),...jsonParse($[O0QQ('‫b','k$RX')]('CookiesJD')||'[]')[O0QQ('‮c','IOO9')](OOO0O=>OOO0O['cookie'])][O0QQ('‮d',')bo)')](OQ0O0=>!!OQ0O0);}let activityId=O0QQ('‮e','ilNb');let time=Date[O0QQ('‫f','ZZoT')]();let allMessage='';!(async()=>{var OOOQQ={'OOQO':function(OOOQO,QQ0QO){return OOOQO+QQ0QO;},'OQOQ':O0QQ('‫10',')bo)'),'O0O0':O0QQ('‮11','UhiG'),'QQ0Q':'QO0O','OQOO':'QOQO','OOOQ':function(QQ00O,Q0O00){return QQ00O===Q0O00;},'Q0QO':O0QQ('‫12','k$RX'),'QOO0':'Q000','Q0QQ':O0QQ('‮13','A^JX'),'OOQ0':function(O0QQO,O0Q0O){return O0QQO===O0Q0O;},'Q00O':'OQ0O'};if(!cookiesArr[0x0]){$[O0QQ('‮14','Yqiq')]($[O0QQ('‮15','ZZoT')],OOOQQ[O0QQ('‮16','l1wW')],O0QQ('‫17','yLto'),{'open-url':O0QQ('‮18','zWo2')});return;}for(let O00OO=0x0;O00OO<cookiesArr[O0QQ('‮19','l1wW')];O00OO++){if('Q0Q0'!==OOOQQ['QQ0Q']){if(cookiesArr[O00OO]){if(OOOQQ[O0QQ('‫1a','S[yO')]!==OOOQQ[O0QQ('‮1b','SWiH')]){console['log'](err);}else{cookie=cookiesArr[O00OO];$[O0QQ('‫1c','(LW]')]=decodeURIComponent(cookie['match'](/pt_pin=([^; ]+)(?=;?)/)&&cookie[O0QQ('‮1d','YRLV')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$['index']=O00OO+0x1;$[O0QQ('‫1e','(LW]')]=!![];$[O0QQ('‮1f','k$RX')]='';message='';console[O0QQ('‫20','a&PN')](O0QQ('‫21','YRLV')+$['index']+'】'+($['nickName']||$['UserName'])+'*********\x0a');if(!$['isLogin']){if(OOOQQ['OOOQ'](OOOQQ[O0QQ('‫22',')bo)')],OOOQQ[O0QQ('‮23','(LW]')])){$[O0QQ('‫24','Hm^w')](e,resp);}else{$[O0QQ('‮25','$Rz8')]($[O0QQ('‫26','hlAx')],O0QQ('‮27','6i7g'),'京东账号'+$[O0QQ('‫28','(7J3')]+'\x20'+($[O0QQ('‫29','cJ%S')]||$[O0QQ('‫2a','DCfw')])+'\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action',{'open-url':OOOQQ[O0QQ('‮2b','a&PN')]});if($[O0QQ('‮2c','0AQQ')]()){await notify['sendNotify']($[O0QQ('‮2d','IOO9')]+'cookie已失效\x20-\x20'+$[O0QQ('‮2e','k$RX')],O0QQ('‫2f','(LW]')+$[O0QQ('‫30','Hm^w')]+'\x20'+$[O0QQ('‮31','(7J3')]+O0QQ('‮32','1B0q'));}continue;}}await main();await $['wait'](0x7d0);}}}else{if(err){console[O0QQ('‮33',')#FK')](err);}else{$[O0QQ('‮34',')bo)')]=data['match'](/"sPrizeName":"(.+?)"/);if($[O0QQ('‮35','6bFq')]){$[O0QQ('‮36','CL&k')]=$['sPrizeName'][0x1];console[O0QQ('‮37',')bo)')](OOOQQ[O0QQ('‮38','zWo2')](OOOQQ[O0QQ('‮39','ZZoT')],$[O0QQ('‮3a','DCfw')]));}}}}if(allMessage){if(OOOQQ['OOQ0'](OOOQQ[O0QQ('‫3b','OrF9')],OOOQQ[O0QQ('‮3c','VwM2')])){if($[O0QQ('‮3d','$(^#')]())await notify[O0QQ('‮3e','(7J3')](''+$[O0QQ('‫3f','qNM5')],''+allMessage);$['msg']($[O0QQ('‮40','jArA')],'',allMessage);}else{resolve();}}})()[O0QQ('‮41','SWiH')](QOQ0O=>{$['log']('','❌\x20'+$[O0QQ('‮42','6bFq')]+O0QQ('‫43','&cUJ')+QOQ0O+'!','');})['finally'](()=>{$['done']();});async function main(){await query_fans();await $['wait'](0x1f4);await draw_fans();}function query_fans(){var QOQQQ={'QOO00':O0QQ('‫44','qNM5'),'OOQ0Q':function(QQOOQ,QO0Q0){return QQOOQ===QO0Q0;},'OO000':O0QQ('‫45','1B0q'),'OOQ0O':O0QQ('‫46','&cUJ'),'OOQQQ':function(QOQQO,QOQ0Q){return QOQQO(QOQ0Q);},'OQOOQ':function(OQQO0,OOOQ0){return OQQO0||OOOQ0;},'OOQQO':O0QQ('‮47','V3cD'),'OO0Q0':O0QQ('‫48','mwjq'),'OQOOO':'keep-alive','Q00OQ':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_2\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/14.0.1\x20Mobile/15E148\x20Safari/604.1'};return new Promise(async OOO00=>{var QQOOO={'QQOQQ':QOQQQ[O0QQ('‫49','1B0q')],'QQO0O':function(Q0OQQ,Q0O0Q){return QOQQQ['OOQ0Q'](Q0OQQ,Q0O0Q);},'QQOQO':QOQQQ[O0QQ('‮4a','m7wE')],'Q0QOQ':QOQQQ['OOQ0O'],'Q00O0':O0QQ('‮4b','6i7g'),'Q0QOO':function(O00OQ,O0QQ0){return QOQQQ['OOQQQ'](O00OQ,O0QQ0);},'QQQO0':function(O0QOO,O0QOQ){return QOQQQ[O0QQ('‮4c','6bFq')](O0QOO,O0QOQ);}};const QO0QQ={'url':'https://wq.jd.com/activet2/looktreasure/query_fans?_='+time+O0QQ('‫4d','Yk&W'),'headers':{'Accept':QOQQQ['OOQQO'],'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept-Language':QOQQQ[O0QQ('‫4e','PNyV')],'Connection':QOQQQ[O0QQ('‮4f','a&PN')],'Cookie':cookie,'Host':'wq.jd.com','Referer':'https://wq.jd.com/activet2/looktreasure/query_fans?_='+time+O0QQ('‫50','V3cD'),'User-Agent':QOQQQ[O0QQ('‫51','pQg5')]}};$[O0QQ('‫52','VwM2')](QO0QQ,(QOOO0,QO00Q,QO0QO)=>{var QO00O={'OO0QQ':function(OOOOQ,OOOOO){return OOOOQ(OOOOO);},'OO00O':function(OQO0Q,OQOQQ){return OQO0Q===OQOQQ;},'OQO00':QQOOO['QQOQQ'],'OQOQ0':'base'};if(QQOOO['QQO0O'](QQOOO[O0QQ('‮53','PNyV')],O0QQ('‮54','SWiH'))){try{if(QOOO0){if(QQOOO['QQO0O'](QQOOO[O0QQ('‫55','m7wE')],QQOOO[O0QQ('‮56','vO2m')])){console['log'](QOOO0);}else{console[O0QQ('‫57','nHt(')](O0QQ('‫58','1B0q'));}}else{}}catch(QQO00){if(QQOOO[O0QQ('‫59','tdEp')]!==QQOOO[O0QQ('‮5a','SWiH')]){cookiesArr=[$[O0QQ('‮5b','V3cD')](O0QQ('‫5c','&E26')),$['getdata'](O0QQ('‮5d','OrF9')),...QO00O[O0QQ('‮5e','aWPI')](jsonParse,$['getdata']('CookiesJD')||'[]')['map'](O00Q=>O00Q[O0QQ('‮5f','&E26')])][O0QQ('‫60','$Rz8')](QQ00=>!!QQ00);}else{$['logErr'](QQO00,QO00Q);}}finally{QQOOO['Q0QOO'](OOO00,QQOOO[O0QQ('‫61','SKH%')](QO0QO,{}));}}else{QO0QO=JSON[O0QQ('‫62',')#FK')](QO0QO);if(QO00O['OO00O'](QO0QO[QO00O[O0QQ('‮63','VwM2')]],0xd)){$[O0QQ('‮64','yLto')]=![];return;}if(QO0QO[O0QQ('‫65','6i7g')]===0x0){$[O0QQ('‮1f','k$RX')]=QO0QO[QO00O['OQOQ0']]&&QO0QO[QO00O[O0QQ('‫66','sBHt')]]['nickname']||$[O0QQ('‮67','PNyV')];}else{$[O0QQ('‫68','0AQQ')]=$[O0QQ('‫69','pQg5')];}}});});}function draw_fans(){var O0Q0QO={'OQ00Q':O0QQ('‫6a','Yqiq'),'OQOO0':function(O0Q00O,O00OOQ){return O0Q00O!==O00OOQ;},'OQ0QO':O0QQ('‮6b','ilNb'),'OQ00O':O0QQ('‮6c','S[yO'),'QOOQO':O0QQ('‮6d','sBHt'),'Q0000':function(QOO00O,QOO0QQ){return QOO00O===QOO0QQ;},'Q00Q0':function(QOOOO0,O00OOO){return QOOOO0+O00OOO;},'Q0QQO':O0QQ('‫6e','OrF9'),'O0OQ0':function(QOO0QO,QQQO0Q){return QOO0QO||QQQO0Q;},'Q0Q0O':O0QQ('‫6f','$(^#'),'Q0QQQ':O0QQ('‮70','hlAx'),'O0O00':O0QQ('‫71','&E26'),'Q0Q0Q':'zh-cn','O0OOQ':O0QQ('‫72','UhiG'),'Q00QO':O0QQ('‮73','6bFq')};return new Promise(async QQQOQQ=>{var QQQO0O={'O0OQQ':O0Q0QO[O0QQ('‫74','CL&k')],'QOO0Q':function(QQQOQO,O00OQ0){return O0Q0QO[O0QQ('‫75','pQg5')](QQQOQO,O00OQ0);},'QOO0O':O0QQ('‮76','6i7g'),'QQQOO':O0Q0QO['OQ0QO'],'QOOQQ':O0Q0QO[O0QQ('‫77','cJ%S')],'QQ0O0':O0Q0QO['QOOQO'],'OO0OO':function(QOOQQQ,QOOQ0Q){return O0Q0QO['Q0000'](QOOQQQ,QOOQ0Q);},'OOQQ0':function(O0QQQQ,O0Q000){return O0Q0QO['Q00Q0'](O0QQQQ,O0Q000);},'OO0OQ':O0Q0QO['Q0QQO'],'OOQ00':function(O0QQ0O,O0QQ0Q){return O0Q0QO['O0OQ0'](O0QQ0O,O0QQ0Q);}};if(O0Q0QO[O0QQ('‮78','yLto')]!=='QOOQ'){$[O0QQ('‮79','$(^#')]();}else{const QOO0Q0={'url':O0QQ('‮7a','mwjq')+time+'&sceneval=2&g_login_type=1&callback=openLibao&g_ty=ls&appCode=msc588d6d5','headers':{'Accept':O0Q0QO[O0QQ('‮7b','DCfw')],'Accept-Encoding':O0Q0QO[O0QQ('‫7c','Hm^w')],'Accept-Language':O0Q0QO['Q0Q0Q'],'Connection':O0Q0QO['O0OOQ'],'Cookie':cookie,'Host':O0Q0QO['Q00QO'],'Referer':O0QQ('‫7d','(LW]')+time+O0QQ('‫7e','a&PN'),'User-Agent':O0QQ('‮7f','OrF9')}};$[O0QQ('‫80','Hm^w')](QOO0Q0,(QOOQQO,QOOQ0O,QOO000)=>{try{if(QQQO0O[O0QQ('‮81','(LW]')](QQQO0O[O0QQ('‫82','Os8l')],QQQO0O['QQQOO'])){if(QOOQQO){if(QQQO0O[O0QQ('‮83','&cUJ')]!==QQQO0O[O0QQ('‫84','m7wE')]){console['log'](QOOQQO);}else{$[O0QQ('‫85','Os8l')]=$[O0QQ('‫86','S[yO')];}}else{if(QQQO0O[O0QQ('‮87','l1wW')](O0QQ('‮88','6i7g'),'OOQQ')){$[O0QQ('‫89','ZZoT')]=QOO000[O0QQ('‮8a','DCfw')](/"sPrizeName":"(.+?)"/);if($[O0QQ('‮8b','6i7g')]){$['sPrizeName']=$['sPrizeName'][0x1];console[O0QQ('‫20','a&PN')](QQQO0O[O0QQ('‮8c','Os8l')](QQQO0O[O0QQ('‮8d',')bo)')],$[O0QQ('‮8e','ilNb')]));}}else{$['sPrizeName']=$[O0QQ('‮8f','hlAx')][0x1];console[O0QQ('‫90','Os8l')](QQQO0O['O0OQQ']+$['sPrizeName']);}}}else{$[O0QQ('‫91','qNM5')](e,QOOQ0O);}}catch(QOOQ00){$[O0QQ('‫92','&cUJ')](QOOQ00,QOOQ0O);}finally{if(QQQO0O[O0QQ('‫93','PlN5')](QQQO0O[O0QQ('‫94','S[yO')],QQQO0O[O0QQ('‫95','mwjq')])){QQQOQQ(QQQO0O['OOQ00'](QOO000,{}));}else{$[O0QQ('‫96','YhgR')](e,QOOQ0O);}}});}});}function TotalBean(){var O0Q0QQ={'QQQ0O':O0QQ('‮97','vO2m'),'OOQO0':'https://bean.m.jd.com/bean/signIndex.action','OQ0OQ':O0QQ('‫98','6i7g'),'QOQOQ':function(O0Q00Q,O0QOO0){return O0Q00Q||O0QOO0;},'OQ0OO':O0QQ('‫99','Hm^w'),'OQQ00':O0QQ('‫9a','ilNb'),'OQQQ0':O0QQ('‫9b','ZZoT'),'QQQQO':O0QQ('‮9c','hlAx'),'QQ0Q0':function(O0QO00,O0QOQ0){return O0QO00===O0QOQ0;},'Q0OOO':O0QQ('‮9d','VwM2'),'Q0OOQ':O0QQ('‮9e','jArA'),'O000Q':O0QQ('‫9f','IOO9'),'O0OO0':O0QQ('‮a0','qNM5'),'O0000':O0QQ('‮a1','1B0q'),'O0QQQ':function(QOOO00,QOQQO0){return QOOO00(QOQQO0);},'O0Q0Q':'./USER_AGENTS','O00Q0':O0QQ('‮a2','SWiH'),'Q0OQ0':'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1'};return new Promise(async QO0QOQ=>{var O00OQQ={'OO0O0':O0Q0QQ['QQQ0O'],'OOQOQ':O0Q0QQ[O0QQ('‫a3','Os8l')],'OQQ0Q':O0Q0QQ[O0QQ('‫a4','pQg5')],'OQ000':function(O00O0Q,QOOOQ0){return O00O0Q+QOOOQ0;},'OQQ0O':function(QQQOOO,QQQ00Q){return QQQOOO(QQQ00Q);},'OQ0Q0':function(QO00OO,QO0QQ0){return O0Q0QQ[O0QQ('‫a5','S[yO')](QO00OO,QO0QQ0);},'Q000Q':function(QOOOOQ,QO0Q00){return QOOOOQ!==QO0Q00;},'Q00QQ':O0Q0QQ[O0QQ('‮a6','vO2m')],'Q000O':function(O0QOOQ,QQ0OQO){return O0QOOQ===QQ0OQO;},'Q0OO0':O0Q0QQ[O0QQ('‫a7','YRLV')],'O0OOO':O0Q0QQ['OQQQ0'],'O00QQ':function(QQ0O0O,QQ0OQQ){return QQ0O0O===QQ0OQQ;},'O000O':O0Q0QQ[O0QQ('‮a8',')#FK')],'O00QO':O0QQ('‮a9','SKH%'),'QQQ0Q':function(O0QOQO,QQ0O0Q){return O0Q0QQ[O0QQ('‮aa',')#FK')](O0QOQO,QQ0O0Q);},'QOQOO':O0Q0QQ[O0QQ('‫ab','sBHt')],'QO0O0':O0QQ('‮ac','k$RX'),'QQQQQ':O0QQ('‮ad','cJ%S')};const O0QOQQ={'url':'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2','headers':{'Accept':O0Q0QQ['Q0OOQ'],'Content-Type':O0Q0QQ[O0QQ('‫ae','zWo2')],'Accept-Encoding':O0Q0QQ[O0QQ('‫af','vO2m')],'Accept-Language':O0QQ('‫b0','1B0q'),'Connection':O0QQ('‫b1','jArA'),'Cookie':cookie,'Referer':O0Q0QQ[O0QQ('‮b2','&cUJ')],'User-Agent':$[O0QQ('‮4','6i7g')]()?process[O0QQ('‮b3','0AQQ')][O0QQ('‫b4','IOO9')]?process[O0QQ('‮b5','jArA')]['JD_USER_AGENT']:O0Q0QQ[O0QQ('‮b6','DCfw')](require,O0Q0QQ[O0QQ('‮b7','Yk&W')])['USER_AGENT']:$[O0QQ('‫b8','&E26')](O0Q0QQ[O0QQ('‮b9','OrF9')])?$['getdata'](O0Q0QQ['O00Q0']):O0Q0QQ[O0QQ('‫ba','DCfw')]}};$['post'](O0QOQQ,(O0QO0O,QOOOOO,QO0QO0)=>{var QQQO00={'QQQ00':function(QQQOQ0,QQQOOQ){return O00OQQ[O0QQ('‮bb','CL&k')](QQQOQ0,QQQOOQ);}};try{if(O00OQQ[O0QQ('‫bc','hlAx')](O00OQQ['Q00QQ'],O0QQ('‫bd','cJ%S'))){if(O0QO0O){console['log'](''+JSON['stringify'](O0QO0O));console['log']($[O0QQ('‮be','m7wE')]+O0QQ('‫bf','m7wE'));}else{if(O00OQQ[O0QQ('‮c0','pQg5')](O00OQQ['Q0OO0'],O00OQQ[O0QQ('‫c1','hlAx')])){if(QO0QO0){QO0QO0=JSON['parse'](QO0QO0);if(QO0QO0[O00OQQ['O0OOO']]===0xd){if(O00OQQ[O0QQ('‫c2','6i7g')](O00OQQ[O0QQ('‮c3','UhiG')],O00OQQ[O0QQ('‮c4','Hm^w')])){QO0QOQ(QQQO00[O0QQ('‫c5','vO2m')](QO0QO0,{}));}else{$[O0QQ('‮c6',')bo)')]=![];return;}}if(O00OQQ[O0QQ('‮c7','(7J3')](QO0QO0[O00OQQ[O0QQ('‫c8','jArA')]],0x0)){$['nickName']=QO0QO0[O00OQQ['OQQ0Q']]&&QO0QO0[O0QQ('‮c9','zWo2')][O0QQ('‮ca','aWPI')]||$[O0QQ('‫cb','qNM5')];}else{if(O00OQQ[O0QQ('‮cc','a&PN')](O00OQQ[O0QQ('‮cd','DCfw')],O00OQQ[O0QQ('‫ce',')bo)')])){$[O0QQ('‮cf','Yk&W')]($[O0QQ('‮d0','YhgR')],O00OQQ[O0QQ('‫d1','Os8l')],O00OQQ[O0QQ('‫d2','tdEp')],{'open-url':O00OQQ[O0QQ('‮d3','A^JX')]});return;}else{$['nickName']=$['UserName'];}}}else{console[O0QQ('‮d4','UhiG')](O0QQ('‮d5','OrF9'));}}else{$[O0QQ('‫68','0AQQ')]=QO0QO0[O0QQ('‫d6','hlAx')]&&QO0QO0[O00OQQ[O0QQ('‮d7','DCfw')]]['nickname']||$['UserName'];}}}else{$[O0QQ('‮d8','aWPI')]=QO0QO0[O0QQ('‫d9','CL&k')](/"sPrizeName":"(.+?)"/);if($[O0QQ('‮da','0AQQ')]){$['sPrizeName']=$['sPrizeName'][0x1];console[O0QQ('‫db','OrF9')](O00OQQ[O0QQ('‮dc','Hm^w')]('宝，获得：',$[O0QQ('‮dd','qNM5')]));}}}catch(QQ00QQ){$['logErr'](QQ00QQ,QOOOOO);}finally{if(O00OQQ[O0QQ('‮de','aWPI')]===O00OQQ[O0QQ('‫df','cJ%S')]){O00OQQ[O0QQ('‫e0','IOO9')](QO0QOQ,QO0QO0||{});}else{QO0QOQ();}}});});}function safeGet(O00QOO){var QQQQQO={'QOQ00':function(O000O0,QQQQ0O){return O000O0==QQQQ0O;}};try{if(QQQQQO[O0QQ('‫e1','PlN5')](typeof JSON[O0QQ('‮e2','hlAx')](O00QOO),O0QQ('‮e3','SWiH'))){return!![];}}catch(QQQ000){console['log'](QQQ000);console[O0QQ('‮e4','IOO9')](O0QQ('‮e5','$(^#'));return![];}}function jsonParse(QQQ0Q0){var O00QOQ={'QQ0QQ':function(QQQ0OQ,QQQQ00){return QQQ0OQ==QQQQ00;},'OOO0Q':O0QQ('‫e6','Yqiq'),'QO0OQ':'O0OO','OQQOQ':O0QQ('‮e7','sBHt')};if(O00QOQ[O0QQ('‫e8','ZZoT')](typeof QQQ0Q0,O0QQ('‫e9','nHt('))){if(O00QOQ[O0QQ('‮ea','sBHt')]===O00QOQ[O0QQ('‫eb','$Rz8')]){if(err){console[O0QQ('‮ec','S[yO')](err);}else{}}else{try{return JSON[O0QQ('‮ed','a&PN')](QQQ0Q0);}catch(O0OOOQ){console[O0QQ('‫ee','k$RX')](O0OOOQ);$[O0QQ('‫ef','$(^#')]($[O0QQ('‫f0','OrF9')],'',O00QOQ[O0QQ('‫f1','cJ%S')]);return[];}}}};OＯ0$='jsjiami.com.v6';


// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }