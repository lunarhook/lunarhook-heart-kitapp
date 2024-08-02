import { View, Text, ScrollView, Image } from '@tarojs/components'
import { Component } from 'react'
import Taro from '@tarojs/taro'
import { AtList, AtGrid, AtTabBar } from "taro-ui"
import './index.scss'
import search from '../../../img/search.jpg'
import banner from '../../../img/banner.gif'
import button1 from '../../../img/button1.gif'
import button2 from '../../../img/button2.gif'
import button3 from '../../../img/button3.gif'
import button4 from '../../../img/button4.gif'
import home from '../../../img/home.gif'

import card1 from '../../../img/card1.jpg'
import card2 from '../../../img/card2.jpg'

import bar from '../../../img/bar.gif'

var cur = new Array()
cur.push(search)

export default class index extends Component {
  handleCourse() {
    Taro.navigateToMiniProgram({
      appId: 'wx8dd67b2e08d5f85a', // 替换为目标小程序的appId
      //path: 'pages/index/index' // 目标小程序内的页面路径
    })
  }
  handlePic() {
    if (2 == cur) {
      Taro.navigateTo({ url: '../psy/psy' })
    }
  }
  handleClick(e) {
    const x = e.changedTouches[0].clientX
    const y = e.changedTouches[0].clientY

    cur = Math.floor(x / 65) + 1
    console.log(`点击位置：X=${x}, Y=${y} ,C=${cur}`)
    if (3 == cur || 4 == cur) {
      Taro.navigateTo({ url: '../consult/consult' })
    }
    else if (2 == cur) {
      Taro.navigateTo({ url: '../detail/detail' })
    }
    else if (5 == cur) {
      Taro.navigateTo({ url: '../course/course' })
    } else if (6 == cur || 7 == cur) {
      Taro.navigateTo({ url: '../userCenter/userCenter' })
    }
  }
  render() {
    return (
      <View className='index'>
        测试一下
        {/* <ScrollView className='content-page'>
          <View className='at-row  at-row__align--center' style='height: 50px;margin-left: 20px;'>
            <View className='at-col at-col-3' >
              <Image
                style='width: 668rpx;height: 86rpx;background: #fff;'
                src={cur[0]}
                hasBorder={false}
              />
            </View>
          </View>
          <View className='components-page'>
            <AtList hasBorder={false}>
              <Image
                style='width: 100%;height: 337rpx;background: #fff;mode:"scaleToFill"'
                src={banner}
                onClick={this.handleCourse.bind(this)}
              />
            </AtList>
          </View>
          <View className='at-row at-row__justify--around'  >
            <Image className='at-col at-col-2 at-col--auto'
              style='width: 122rpx;height: 174rpx;background: #fff;'
              src={button1}
            />
            <Image className='at-col at-col-2 at-col--auto'
              style='width: 122rpx;height: 174rpx;background: #fff;'
              src={button2}
              onClick={() => this.handlePic(2)}
            />
            <Image className='at-col at-col-2 at-col--auto'
              style='width: 122rpx;height: 174rpx;background: #fff;'
              src={button3}
            />
            <Image className='at-col at-col-2 at-col--auto'
              style='width: 122rpx;height: 174rpx;background: #fff;'
              src={button4}
            />
          </View>
          <View className='components-page'>
            <Image
              style='width: 100%;height: 152rpx;background: #fff;mode:"scaleToFill"'
              src={home}
              onClick={this.handleCourse.bind(this)}
            />
          </View>
          <View className='mgrid1'>
            <AtGrid
              columnNum={2}
              mode='square'
              hasBorder={false}
              data={[
                {
                  image: card1,
                },
                {
                  image: card2,
                },
              ]}
              onClick={(item) => this.handleCourse(item)}
            />
          </View>
          <View className='mgrid1'>
            <AtGrid
              columnNum={2}
              mode='square'
              hasBorder={false}
              data={[
                {
                  image: card1,
                },
                {
                  image: card2,
                },
              ]}
              onClick={(item) => { this.handleCourse(item) }}
            />
          </View>
          <View>
            <Text style='opacity: 0'>blockline</Text>
          </View>
          <View>
            <Text style='opacity: 0'>blockline</Text>
          </View>
          <View>
            <Text style='opacity: 0'>blockline</Text>
          </View>
          <View>
            <Text style='opacity: 0'>blockline</Text>
          </View>
          <View>
            <Text style='opacity: 0'>blockline</Text>
          </View>
          <View>
            <Text style='opacity: 0'>blockline</Text>
          </View>
        </ScrollView>
        <View className='mbar' onClick={this.handleClick.bind(this)}>
          <AtTabBar
            fixed
            backgroundColor='#ffffff'
            color='#ea6bb8'
            tabList={[
              { image: bar },
            ]}
          ></AtTabBar></View> */}
      </View>
    )
  }
}
