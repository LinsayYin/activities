function getBaseOptions() {
  return {
    firstRingRadius: 50, // 第一个（最内侧）圆环的半径
    firstRingFontSize: 15, // 第一个（最内侧）圆环的字体大小
    firstRingStartAngle: 0, // 第一个（最内侧）圆环的起始角度(flase:随机  【0 ~ 2*Math.PI】)
    centerTextColor: 'green', // 中心字体颜色
    // 圆环字体指数(计算圆环外外侧的字体大小指数值) 10 + index(rings数组下标) ** textExponent
    textExponent: 1.2,
  }
}

function getMonthOptions() {
  const monthOptions = [
    {
      // 字体颜色
      color: '#333',// 1月
      // 与下一个环的间距
      interval: 0,
    },
    {
      color: '#333',
      interval: 0,
    },
    {
      color: '#333',// 3月
      interval: 0,
    },
    {
      color: '#333',// 4月
      interval: 0,
    },
    {
      color: '#333',
      interval: 0,
    },
    {
      color: '#333',// 6月
      interval: 0,
    },
    {
      color: '#333',
      interval: 0,
    },
    {
      color: '#333',// 8月
      interval: 0,
    },
    {
      color: '#333',
      interval: 0,
    },
    {
      color: '#333',
      interval: 0,
    },
    {
      color: '#333',
      interval: 0,
    },
    {
      color: '#333',// 12月
      interval: 0,
    },
  ]
  return monthOptions
}