
import Taro from '@tarojs/taro'
function handleClick(val) {
  var value = val
  if (3 == value) {
    Taro.navigateTo({ url: '../../../pages/user/userCenter' })
  }
  else if (2== value) {
    Taro.redirectTo({ url: '../../../pages/kit/tools/Psy' })
  }
    /*
  else if (2 == value) {
    Taro.redirectTo({ url: '../../../pages/kit/tools/litekitPage' })
  }
  */
  else if (1 == value) {
    Taro.redirectTo({ url: '../../../pages/kit/tools/base' })
  }

  else if (0 == value) {
    Taro.navigateTo({ url: '../../../pages/kit/slogan/SloganShare' })
  }
}

var tablist = [
  {
    title: '开屏语', iconPrefixClass: 'mdi',
    size: 36,
    color: "#3dd1e0", iconType: 'seed-outline'
  },

  {
    title: '感  情', iconPrefixClass: 'mdi',
    size: 36,
    color: "#1FA7DE",
    iconType: 'head-dots-horizontal-outline'
  },
    /*
  {
    title: '易  学',
    iconPrefixClass: 'mdi',
    size: 36,
    color: "#1FA7DE",
    iconType: 'yin-yang'
  },
  */
  {
    title: '心  理', iconPrefixClass: 'mdi',
    size: 36,
    color: "#1FA7DE",
    iconType: 'check-decagram-outline'
  },
  {
    title: '咨  询', iconPrefixClass: 'mdi',
    size: 36,
    color: "#1FA7DE",
    iconType: 'share-circle'
  }
]

export { handleClick, tablist };
