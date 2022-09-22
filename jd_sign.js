
const exec = require('child_process').execSync
const fs = require('fs')
const rp = require('request-promise')
const download = require('download')

// 京东cookie
const cookie = process.env.__jdu=1661938208337164211624; shshshfpb=ucZSI4t1uYB-7nvUnGiQ8dA; shshshfpa=9bd29e91-8181-e148-9129-57f0cd4e27c6-1657163403; unpl=JF8EAKpnNSttXhtdBh0DGhERSVhXWw8IHx5WPTcFB1sNTQZSSwVPEhh7XlVdXhRKHx9uYxRUWFNPUA4aCisSE3tdVV9cD0gVBWduNWRtW0tkBCsCHBUQQ19dXVwBSRUFb2AAV11YTFcAKzIcEhl7bWRbXQlKFQVpZAVXbVl7VgQaAB8XFEJcU24cZk4XAmZlSFRaX0tcBxIBGhsSSVtUWVgLSxcEbGI1VlReQ1I1GA; PCSYCityID=CN_410000_410300_0; pinId=sUH5_U3oFJ0; pin=ehubert; unick=ehubert; _tp=lEYBgQgFk09cR4zXQDFShQ%3D%3D; _pst=ehubert; user-key=a212f9e5-f347-401a-b662-111c8b53b277; areaId=7; autoOpenApp_downCloseDate_jd_homePage=1663290678450_1; [object Object]=undefined; __jdv=76161171|direct|-|none|-|1663809067263; jsavif=1; ip_cityCode=427; wlfstk_smdl=dey7rs1ii0drox9o09n0tx0iid9w4abi; TrackID=1sOGHWZ55K6zWeMJK7YMJkz6lhlOYBs9V3_cDcvKUF9NpdaqENyvmpU3tXjxYyncOrJSr4R9fKy8DqzFiXfbdpmhsfB-XWFEJryEJ20VNA8g; ceshi3.com=103; ipLocation=%u6cb3%u5357; cn=3; ipLoc-djd=7-427-3558-55284.740251315; _distM=251805483464; __jdc=122270672; thor=06DD340A7B81DD43EAB280B4A93007AA216B95A5800ACBFF17BD700F77C94C303A21E1E60B68646460DCEF98978258FE3B0D06FBD86EA565B6639AEEB9BCB043D60E7BB81FE8336A8B330130B3A185A3FDCC0299CF8E7373758266C4CC2CBF4157CDE5510896F873C7B7607618EB0ABF116D584A873300ECB3C5DE2ADE1A284DA1D1DDD4F240F01070BB2BAD289510E2; mobilev=html5; mba_muid=1661938208337164211624; autoOpenApp_downCloseDate_auto=1663811094009_1800000; wxa_level=1; retina=0; cid=9; jxsid=16638125845934986567; webp=1; visitkey=50121278721487660; sc_width=1920; PPRD_P=UUID.1661938208337164211624; __jda=122270672.1661938208337164211624.1661938208.1663809067.1663812585.7; jxsid_s_u=https%3A//home.m.jd.com/myJd/newhome.action; _gia_s_local_fingerprint=b90090fd35cdb7705c75239c25e4c5e2; equipmentId=V2EMUINQ2A5OBR7DG2WVE7B6RSX6XWEXSY524XNTEMXBSDPPXKDCCN56YY2NSHE27KVRUFE5SSCX6AUNREZRT4BYMY; fingerprint=b90090fd35cdb7705c75239c25e4c5e2; deviceVersion=105.0.0.0; deviceName=Chrome; _gia_s_e_joint={"eid":"V2EMUINQ2A5OBR7DG2WVE7B6RSX6XWEXSY524XNTEMXBSDPPXKDCCN56YY2NSHE27KVRUFE5SSCX6AUNREZRT4BYMY","ma":"","im":"","os":"Windows 10","ip":"120.194.35.178","ia":"","uu":"","at":"5"}; 3AB9D23F7A4B3C9B=V2EMUINQ2A5OBR7DG2WVE7B6RSX6XWEXSY524XNTEMXBSDPPXKDCCN56YY2NSHE27KVRUFE5SSCX6AUNREZRT4BYMY; jcap_dvzw_fp=Aopi85MzGW6cibvh8uWXuqPP1-2jmZ_RJjswwqXl7PzOZ8SVXjDmWDSyuj4dRdURk-V0bQ==; TrackerID=FtX7zNJP2rAnBoZPhwbjHrm2YDm1X93M0bMG1FWuFev4s-O1can1F91epXdBlNfiW5pwc2Tan60LS_NPxBfDMxP2BnvIPjyTLjSpUB36IF4; pt_key=AAJjK8RCADBrOklhWiGp1FWe_VVD-Cyan74TCroTscZzEwWT9SLBqfp4wzQ6Ns3Puz9eFMWySDE; pt_pin=ehubert; pt_token=j5pd6inv; pwdt_id=ehubert; sfstoken=tk01mdad91c6ea8sMyszeDIrSnM4piCIxziBhkCbaBkhMpMB6fBOWVPxLwas0axNAH47cAP1f+/ehZ8jBSp5Km8Ar3ti; wqmnx1=MDEyNjM2MXQvbW9kb3Q1NzhvL1dzMGl4cGIzKCwgKW0uIGkzM2ZmMjVWRUlVKFI%3D; __jdb=122270672.22.1661938208337164211624|7.1663812585; mba_sid=16638110922805128963947271310.4; __wga=1663812677637.1663812585086.1663812585086.1663812585086.2.1; jxsid_s_t=1663812677700; shshshfp=8d4837d5fe6b8a11486f227b870c292f; shshshsID=b8310a7019915199c1acf9e5cf441677_3_1663812677863; __jd_ref_cls=7155.9.3; 
// Server酱SCKEY
const push_key = process.env.SCT172703ThxPh2c7wu1oqwoRoaBB5u4lY

// 京东脚本文件
const js_url = 'https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js'
// 下载脚本路劲
const js_path = './JD_DailyBonus.js'
// 脚本执行输出路劲
const result_path = './result.txt'
// 错误信息输出路劲
const error_path = './error.txt'

Date.prototype.Format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'H+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'S+': this.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(String(o[k]).length)));
    }
  }
  return fmt;
};

function setupCookie() {
  var js_content = fs.readFileSync(js_path, 'utf8')
  js_content = js_content.replace(/var Key = ''/, `var Key = '${cookie}'`)
  fs.writeFileSync(js_path, js_content, 'utf8')
}

function sendNotificationIfNeed() {

  if (!push_key) {
    console.log('执行任务结束!'); return;
  }

  if (!fs.existsSync(result_path)) {
    console.log('没有执行结果，任务中断!'); return;
  }

  let text = "京东签到_" + new Date().Format('yyyy.MM.dd');
  let desp = fs.readFileSync(result_path, "utf8")

  // 去除末尾的换行
  let SCKEY = push_key.replace(/[\r\n]/g,"")

  const options ={
    uri:  `https://sc.ftqq.com/${SCKEY}.send`,
    form: { text, desp },
    json: true,
    method: 'POST'
  }

  rp.post(options).then(res=>{
    const code = res['errno'];
    if (code == 0) {
      console.log("通知发送成功，任务结束！")
    }
    else {
      console.log(res);
      console.log("通知发送失败，任务中断！")
      fs.writeFileSync(error_path, JSON.stringify(res), 'utf8')
    }
  }).catch((err)=>{
    console.log("通知发送失败，任务中断！")
    fs.writeFileSync(error_path, err, 'utf8')
  })
}

function main() {

  if (!cookie) {
    console.log('请配置京东cookie!'); return;
  }

  // 1、下载脚本
  download(js_url, './').then(res=>{
    // 2、替换cookie
    setupCookie()
    // 3、执行脚本
    exec(`node '${js_path}' >> '${result_path}'`);
    // 4、发送推送
    sendNotificationIfNeed() 
  }).catch((err)=>{
    console.log('脚本文件下载失败，任务中断！');
    fs.writeFileSync(error_path, err, 'utf8')
  })

}

main()
