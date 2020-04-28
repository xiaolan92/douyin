const app = getApp()

let oneList = [{
    url: "http://vali.cp31.ott.cibntv.net/youku/6773a4f46894c71f8b7b328ab/03000801005E990F4FFDC30003E880D43AA229-FC43-4B36-9AD4-22FA36635E60.mp4?sid=158770423400010005557_00_B24922871899bc95e5ee8afc93a712261&sign=bb8f100f5e69637affe4abf2f00b587b&ctype=50",
    data: {
      staff: "李阿姨",
      staffMes: "3年从业经验，妥善照顾好每一位新生儿妈妈"
    }
  },
  {
    url: "http://vali.cp31.ott.cibntv.net/youku/65729f1cb41317142fc1065b6/03000801005E99910CF3A496A2A807B5408950-4494-4716-A755-9E1E9519B604.mp4?sid=158753407400010004255_00_B6076d884bfb2887e421ddd1f19b2de2c&sign=f6cf03fe20b4845d04c00387ddf53842&ctype=50",
    data: {
      staff: "林阿姨",
      staffMes: "5年从业经验，妥善照顾好每一位新生儿妈妈"
    }
  },
  {
    url: "http://vali.cp31.ott.cibntv.net/youku/67731c3ef384971e47b413e20/03000801005E9D88FFC20CD72129CB2314561D-55C1-4958-8487-78C1D7D26A89.mp4?sid=158754886300010001253_00_B8b6da6ab9ecb16cb60b65b22036f9783&sign=3932e22f164630b00e86a60be651f1f8&ctype=50",
    data: {
      staff: "张阿姨",
      staffMes: "7年从业经验，妥善照顾好每一位新生儿妈妈"
    }
  },
  {
    url: "http://vali.cp31.ott.cibntv.net/youku/657258fcf2f3b718650a233ba/03000801005E956ABD53B9A003E880E6E66E6D-47AD-4228-9552-90B31CD3485B.mp4?sid=158770440600010007857_00_B74ab9d7144c9b5b2cef1238b982289fc&sign=c91a41face1305591a590c88e4b9a425&ctype=50",
    data: {
      staff: "索隆阿姨",
      staffMes: "11年从业经验，妥善照顾好每一位新生儿妈妈"
    }
  },
  {
    url: "http://vali.cp31.ott.cibntv.net/youku/6572ecf8d464d71ff875636ee/03000801005E9A86B210391003E880906F340B-8F62-462C-BA68-2505A24DC77D.mp4?sid=158795727100010002142_00_B4bd883eab795767883697c809955e9e9&sign=94d4c43ec0c0db437d55bd4941eb3f7e&ctype=50",
    data: {
      staff: "路飞阿姨",
      staffMes: "13年从业经验，妥善照顾好每一位新生儿妈妈"
    }
  }
]

let twoList = [{
    url: "http://vali.cp31.ott.cibntv.net/youku/65729ba05343d7193d76948aa/03000801005E38F86F6963E003E88068EAEB7D-8ADF-4CC3-9F1F-E32A724FFAC0.mp4?sid=158796923800010002752_00_B0dbc23dd16a5d98dad6f4d9a06002149&sign=9532a1bac4eae69121658f02d689744c&ctype=50",
    data: {
      staff: "6阿姨",
      staffMes: "3年从业经验，妥善照顾好每一位新生儿妈妈"
    }
  },
  {
    url: "http://vali.cp31.ott.cibntv.net/youku/6773c74474333715088e24f91/03000801005E8D9A64CF9EE003E88016D2A5B0-D55D-4649-9F71-1EB19281C768.mp4?sid=158796997400010003694_00_B8e940c32309fd9174d2271920e0fc306&sign=1d7dde9d1f349cdd20a64a2ba3126250&ctype=50",
    data: {
      staff: "7阿姨",
      staffMes: "5年从业经验，妥善照顾好每一位新生儿妈妈"
    }
  },
  {
    url: "http://vali.cp31.ott.cibntv.net/youku/65732bc08b14771d726094b73/03000801005D8B4BA2A75EF003E88072A2190D-39E6-4EC2-B6CD-81BA9A610FC1.mp4?sid=158796993900010001047_00_B8994a81c172ebc05b21f00df88e3ca2a&sign=4e806bd3c6efd2ab3ac86bab6f551b4d&ctype=50",
    data: {
      staff: "8阿姨",
      staffMes: "7年从业经验，妥善照顾好每一位新生儿妈妈"
    }
  },
  {
    url: "http://vali.cp31.ott.cibntv.net/youku/67741772536337150895e4ddb/03000801005E9921B7CAF88003E880FC561238-264F-43E9-AD9E-4501E52715D5.mp4?sid=158797889800010008662_00_B37b0918d33dc7aa8ca222bcfe9f0a384&sign=ee4f7a2e89daf6f6be2e348194fd513b&ctype=50",
    data: {
      staff: "9阿姨",
      staffMes: "11年从业经验，妥善照顾好每一位新生儿妈妈"
    }
  },
  {
    url: "http://vali.cp31.ott.cibntv.net/youku/677376e0d214571c9afe23711/03000801005E5F6D0BACFA2003E880D1C1BDBA-2865-4405-8EC3-41DDF6DD7B8E.mp4?sid=158796946800010006563_00_B7a74b6f0d27d1b26d72acf3fdcb3d1cc&sign=619f128213452239a98605fddf19f18c&ctype=50",
    data: {
      staff: "10阿姨",
      staffMes: "13年从业经验，妥善照顾好每一位新生儿妈妈"
    }
  }
]

let threeList = [{
  url: "http://vali.cp31.ott.cibntv.net/youku/6773a4f46894c71f8b7b328ab/03000801005E990F4FFDC30003E880D43AA229-FC43-4B36-9AD4-22FA36635E60.mp4?sid=158770423400010005557_00_B24922871899bc95e5ee8afc93a712261&sign=bb8f100f5e69637affe4abf2f00b587b&ctype=50",
  data: {
    staff: "李阿姨",
    staffMes: "3年从业经验，妥善照顾好每一位新生儿妈妈"
  }
},
{
  url: "http://vali.cp31.ott.cibntv.net/youku/65729f1cb41317142fc1065b6/03000801005E99910CF3A496A2A807B5408950-4494-4716-A755-9E1E9519B604.mp4?sid=158753407400010004255_00_B6076d884bfb2887e421ddd1f19b2de2c&sign=f6cf03fe20b4845d04c00387ddf53842&ctype=50",
  data: {
    staff: "林阿姨",
    staffMes: "5年从业经验，妥善照顾好每一位新生儿妈妈"
  }
},
{
  url: "http://vali.cp31.ott.cibntv.net/youku/67731c3ef384971e47b413e20/03000801005E9D88FFC20CD72129CB2314561D-55C1-4958-8487-78C1D7D26A89.mp4?sid=158754886300010001253_00_B8b6da6ab9ecb16cb60b65b22036f9783&sign=3932e22f164630b00e86a60be651f1f8&ctype=50",
  data: {
    staff: "张阿姨",
    staffMes: "7年从业经验，妥善照顾好每一位新生儿妈妈"
  }
},
{
  url: "http://vali.cp31.ott.cibntv.net/youku/657258fcf2f3b718650a233ba/03000801005E956ABD53B9A003E880E6E66E6D-47AD-4228-9552-90B31CD3485B.mp4?sid=158770440600010007857_00_B74ab9d7144c9b5b2cef1238b982289fc&sign=c91a41face1305591a590c88e4b9a425&ctype=50",
  data: {
    staff: "索隆阿姨",
    staffMes: "11年从业经验，妥善照顾好每一位新生儿妈妈"
  }
},
{
  url: "http://vali.cp31.ott.cibntv.net/youku/6572ecf8d464d71ff875636ee/03000801005E9A86B210391003E880906F340B-8F62-462C-BA68-2505A24DC77D.mp4?sid=158795727100010002142_00_B4bd883eab795767883697c809955e9e9&sign=94d4c43ec0c0db437d55bd4941eb3f7e&ctype=50",
  data: {
    staff: "路飞阿姨",
    staffMes: "13年从业经验，妥善照顾好每一位新生儿妈妈"
  }
}
]

let fourList = [
  {
    url: "http://vali.cp31.ott.cibntv.net/youku/6975f148ed14b71f212de27cf/03000801005E8D7D3164054003E880EB4C05ED-664C-4A81-BC60-64A4AE40EE34.mp4?sid=158797745000010005107_00_Be2b94661250656fd5c2b2dac31fa9b08&sign=5eb89a9a64c4710106cf487e30feb7fe&ctype=50",
    data: {
      staff: "11阿姨",
      staffMes: "3年从业经验，妥善照顾好每一位新生儿妈妈"
    },
  },
  {
    url: "http://vali.cp31.ott.cibntv.net/youku/6773122af1c4771d7269c5c10/03000801005E8721E2D4823003E8804901B9BB-362B-4B2D-80CA-9495E0C94B5E.mp4?sid=158797752800010003284_00_Bf22eee156e6e718a8a2490791e250d04&sign=58e2b9becc6b5f7d9d0715de17cd05dd&ctype=50",
    data: {
      staff: "12阿姨",
      staffMes: "3年从业经验，妥善照顾好每一位新生儿妈妈"
    },
  },
]

/**
 * 页面的视频列表，最多 pageSize 个
 * 不通过setData videoList 的个数来动态更新视频，因为切换的时候动画会卡顿一下
 * 可固定videoList的个数，通过<swiper circular="{{true}}">和更改detail来更新
 */
Page({
  data: {
    systemInfo: null,
    page: 0, // 页面 锚点
    pageSize: 5, // 大于等于5
    totalPage: 4,  // 总页数
    videoListAll: [], // 所有的视频列表 [[{},{}..], [{},{}..]]。单页：this.data.videoListAll[page - 1]
    videoList: [], // 页面的视频列表[{},{},{}..]
    videoListContext: [], // 所有的视频列表对应的context对象，控制暂停|播放
    current: 0,  // 记录上一个current
    circular: true, // 是否可以循环播放
  },

  onLoad: function () {
    this.getSystemInfo()
    this.getVideoAll(this.data.page)
  },

  getSystemInfo: function () {
    let that = this
    wx.getSystemInfo({
      complete: (res) => {
        console.log(res)
        that.setData({
          systemInfo: res
        })
      },
    })
  },

  // 模拟网络请求
  getVideoAll: function (p) {
    let data = this.data
    let videoArrTemp = []
    let pageTemp = p + 1
    this.setData({
      page: pageTemp,
      totalPage: 4
    })
    let page = data.page
    if (page == 1) {
      videoArrTemp = oneList
    } else if (page == 2) {
      videoArrTemp = twoList
    } else if (page == 3) {
      videoArrTemp = threeList
    } else if (page == 4) {
      videoArrTemp = fourList
    }
    let videoListAllTemp = data.videoListAll
    videoListAllTemp.push(videoArrTemp)
    this.setData({
      videoListAll: videoListAllTemp // 追加 video 到所有的视频列表
    })
    this.concatVideoList(page, "presSetData")
  },

  // 切换视频，判断方向（上下）
  changeSwiper: function (e) {
    if (e.detail.source == "touch") { // 手动
      let data = this.data
      let currentDetail = e.detail.current
      let currentData = data.current
      console.log("currentDetail: " + currentDetail)
      console.log("page: " + data.page)
      if (currentDetail > currentData) {
        if (currentDetail - currentData == 1) { // 正常切换下一个
          this.next(currentDetail, currentData)
        } else { // 特殊情况：第二页的第一个切换到第一页的最后一个，则 currentDetail: this.data.videoList.length - 1、currentData: 0
          this.pre(currentDetail)
        }
      } else if (currentDetail < currentData) {
        if (currentData - currentDetail == 1) { // 正常切换到上一个
          this.pre(currentDetail, currentData)
        } else { // 特殊情况：第一页的最后一个切换到第二页的第一个，则 currentDetail: 0、currentData: this.data.videoList.length - 1
          this.next(currentDetail)
        }
      }
      // 播放视频
      this.playVideo(currentDetail)
      // update current
      this.setData({
        current: currentDetail
      })
    }
  },

  // 加载下一个视频
  next: function (currentDetail, currentData) {
    console.log("下一个")
    let data = this.data
    let len = data.videoList.length  // 等于pageSize
    let page = data.page
    if (currentDetail == len - 2) { // 当前页面倒数第二个，加载下一页的视频列表，并更新倒数第四个和以前的视频列表
      console.log("当前页 倒数第二个 load more then setData")
      this.getVideoAll(page)
    } else if (currentDetail == len - 1) { // 当前页面最后一个，更新倒数第三个的视频
      console.log("当前页 最后一个 setData")
      this.concatVideoList(page, "lastOne")
    } else if(currentDetail == 0 && currentData != 0) {  // 下个页面第一个，更新上个页面倒数第二个的视频
      console.log("下一页，第一个 setData")
      this.concatVideoList(page, "toNextPage")
    } else if(currentDetail == 1 && currentData == 0) {  // 下个页面第二个，更新上个页面倒数第一个的视频
      console.log("下一页，第二个 setData")
      this.concatVideoList(page, "toNextPageTwo")
    }
  },

  // 切换到上一个视频
  pre: function (currentDetail) {
    console.log("上一个")
    let data = this.data
    let page = data.page
    let videoListTemp = data.videoList
    let videoPage = []
    if(currentDetail >= 1) {
      videoPage = data.videoListAll[page - 2]
      videoListTemp[currentDetail - 1] = videoPage[currentDetail - 1]
    } else {
      if(page > 2){
        // 上一页
        let pageTemp = page - 1
        this.setData({
          page: pageTemp
        })
        // 上一页的视频列表
        videoPage = data.videoListAll[pageTemp - 2]
        videoListTemp[data.pageSize - 1] = videoPage[data.pageSize - 1]
      }
    }
    this.setData({
      videoList: videoListTemp
    })
  },

  // 服务器加载完视频列表后，更新 页面的视频列表
  concatVideoList: function (page, type) {
    let data = this.data
    let videoPage = JSON.parse(JSON.stringify(data.videoListAll[page - 1]))
    if (page == 1) {  // 第一页，直接赋值
      let videoListTemp = JSON.parse(JSON.stringify(this.data.videoListAll[0]))
      this.setData({
        videoList: videoListTemp
      })
      let videoListTempTwo = JSON.parse(JSON.stringify(this.data.videoListAll[0]))
      let videoListContextTemp = data.videoListContext
      videoListTempTwo.forEach(function(v, i) {
        let videoContextTemp = wx.createVideoContext("myVideo_" + i)
        videoListContextTemp.push(videoContextTemp)
      })
      this.setData({   // 设置 videoListContext，控制暂停|播放
        videoListContext: videoListContextTemp
      })
      this.playVideo(0)
    } else {  // 非第一页 追加数据处理
      if(videoPage.length == 0) return;
      let videoListTemp = data.videoList
      let len = videoPage.length
      if (type == "presSetData") {
        if (len < data.pageSize - 2) {  // 视频个数不足（没达到getDataAll），直接赋值就好
          for (let i = 0; i < videoPage.length; i++) {
            videoListTemp[i] = videoPage[i]
          }
        } else {  // 视频个数够长（达到getDataAll），更新倒数第四个和以前的视频列表
          for (let i = 0; i < data.pageSize - 3; i++) { // 3的由来：从倒数第二个开始加载，所以 -2，再 -1 是因为上一个视频的data我们不处理，因为会切换到上一个视
            videoListTemp[i] = videoPage[i]
          }
        }
      } else if(type == "lastOne") {  
        // 更新倒数第三个的视频
        videoListTemp[len - 3] = videoPage[len - 3]
      } else if(type == "toNextPage") {
        // 更新倒数第二个的视频
        videoListTemp[len - 2] = videoPage[len - 2]
      } else if (type == "toNextPageTwo") {
        // 更新倒数第一个的视频
        videoListTemp[len - 1] = videoPage[len - 1]
      }
      this.setData({
        videoList: videoListTemp
      })
    }
  },

  // 切换视频后马上播放
  playVideo: function(c) {
    let data = this.data
    let videoListContext = data.videoListContext
    // 开始播放
    videoListContext[c].play()
    // 全部暂停
    videoListContext.forEach(function(v, i){
      if(i != c) {
        v.pause()
        v.seek(0)
      }
    })
  },

  // 手动 暂停|播放
  playOrPause: function (e) {
    let data = this.data
    if (data.isPlaying) {
      data.videoContextList[data.current].pause()
    } else {
      data.videoContextList[data.current].play()
    }
    this.setData({
      isPlaying: !data.isPlaying
    })
  }
})