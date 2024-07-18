import { View, Text, ScrollView, Image, Input } from '@tarojs/components'
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { AtList, AtInput, AtGrid, AtIcon, AtTabBar } from "taro-ui"
import './course.scss'
import banner from '../../../img/course.bar.jpg'
import show from '../../../img/course.show.jpg'
import buy from '../../../img/course.buy.jpg'
export default class course extends Component {
  handleClick(e) {
    const x = e.changedTouches[0].clientX
    const y = e.changedTouches[0].clientY

    var cur = Math.floor(x / 65) + 1
    console.log(`点击位置：X=${x}, Y=${y} ,C=${cur}`)
    Taro.navigateToMiniProgram({
      appId: 'wx8dd67b2e08d5f85a', // 替换为目标小程序的appId
      //path: 'pages/index/index' // 目标小程序内的页面路径
    })
  }
  render() {
    return (
      <View className='index' onClick={this.handleClick.bind(this)}>
        <View className='components-page'>
          <Image className='components-page'
            src={banner}
          />
        </View>
        <ScrollView className="content-page">
          <Image className="content-show"
            src={show}
          />
          <Image className="content-buy"
            src={buy}
          />
                    <Image className="content-show"
            src={show}
          />
          <Image className="content-buy"
            src={buy}
          />
                    <Image className="content-show"
            src={show}
          />
          <Image className="content-buy"
            src={buy}
          />
                    <Image className="content-show"
            src={show}
          />
          <Image className="content-buy"
            src={buy}
          />

          <View>
            <Text style="opacity: 0">blockline</Text>
          </View>
          <View>
            <Text style="opacity: 0">blockline</Text>
          </View>
          <View>
            <Text style="opacity: 0">blockline</Text>
          </View>
          <View>
            <Text style="opacity: 0">blockline</Text>
          </View>
          <View>
            <Text style="opacity: 0">blockline</Text>
          </View>
          <View>
            <Text style="opacity: 0">blockline</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
