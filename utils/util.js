function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getLocation (cb) {
  wx.getLocation({
    type: 'wgs84',
    success: function (res) {
      cb&&cb(res);
    },
    fail: function (error) {
    },
    complete: function () {
    }
  })
}
// 获取微信版本号，是否兼容

function getVersion (cb) {
  wx.getSystemInfo({
    success: function (res) {
      cb(res.SDKVersion * 100);
    }
  })
}

function getUserInfo (cb) {
  console.log(111);
  wx.getUserInfo({
    withCredentials: false,
    success: function (res) {
      typeof cb == "function" && cb(res.userInfo)
    }
  })
}

module.exports = {
  formatTime: formatTime,
  getLocation: getLocation,
  getVersion: getVersion,
  getUserInfo: getUserInfo
}
