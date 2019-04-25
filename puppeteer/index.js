const puppeteer = require('puppeteer');
const Promise = require("bluebird");
const fs      = require('fs')
const util    = require('util')

const logPath = 'send.log'
const logFile = fs.createWriteStream(logPath, { flags: 'a' })

console.log = function() {
  logFile.write(util.format.apply(null, arguments) + '\n')
  process.stdout.write(util.format.apply(null, arguments) + '\n')
}

console.error = function() {
  logFile.write(util.format.apply(null, arguments) + '\n')
  process.stderr.write(util.format.apply(null, arguments) + '\n')
}

let id = 7795305;

(async () => {
  const browser = await puppeteer.launch({ headless: false });//打开有界面的浏览器
  const page = await browser.newPage()

  await page.goto(`https://www.imooc.com/user/newlogin/from_url/1004/`);
  console.log("开始群发");
  await Promise.delay(20000);
  
  
  while (true) {
    console.log('登录成功, 开始发送');
    await page.goto(`https://www.imooc.com/u/7795631/messages?uid=${id}`);
    await Promise.delay(3000);
    try{
       await page.click('#attention-btn');
       await Promise.delay(2000);
       await page.type('#textInput', "WeMall商城全线产品5折(包括微信商城源码，微信小程序源码)，仅限一天！,官网：http://www.koahub.com/;微信号xmylmjy");
       await Promise.delay(2000);
       await page.click('.chatSend');


        // await page.type('input[name=title]', "WeMall商城全线产品5折，仅限一天！");
        // await page.type('textarea[name=content]', "五一大放价 | WeMall商城全线产品5折，仅限一天！活动地址：www.koahub.com，联系客服QQ：786699892");

        // const username = await page.$eval('#form input[name=username]', el => el.value);
        // if (username) {
        //   await page.click('.submit');
        // }
        
        // console.log('登录成功, 发送成功', username);

       await Promise.delay(5000);

       id = id - 1;

       console.log(id);
       await page.goto(`https://www.imooc.com/u/7795631/messages?uid=${id}`);

       if(id<7795000){
         return
       }
     }catch(err){
        console.log(err);
     }
   
    

   
  }
})()