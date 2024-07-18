import { View, Text, ScrollView, Image, Input } from '@tarojs/components'
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { AtList, AtInput, AtGrid, AtIcon, AtTabBar, AtFab } from "taro-ui"
import './index.scss'
import logo from '../../../img/logo.gif'
import banner from '../../../img/banner.gif'
import button1 from '../../../img/button1.gif'
import button2 from '../../../img/button2.gif'
import button3 from '../../../img/button3.gif'
import button4 from '../../../img/button4.gif'
import home from '../../../img/home.gif'

import card1 from '../../../img/card1.jpg'
import card2 from '../../../img/card2.jpg'
import card3 from '../../../img/card1.jpg'
import card4 from '../../../img/card2.jpg'

import bar from '../../../img/bar.gif'
var cur = new Array()
cur.push(logo)
export default class index extends Component {
  handleClick(e) {
    const x = e.changedTouches[0].clientX
    const y = e.changedTouches[0].clientY

    var cur = Math.floor(x / 65) + 1
    console.log(`点击位置：X=${x}, Y=${y} ,C=${cur}`)
    if(3==cur || 4==cur)
    {
      Taro.navigateTo({ url: '../consult/consult' })
    }
    else if(2==cur)
    {
      Taro.navigateTo({ url: '../detail/detail' })
    }
    else if(5==cur)
    {
      Taro.navigateTo({ url: '../course/course' })
    }
  }
  render() {
    return (
      <View className='index'>
        <ScrollView className="content-page">
          <View className='at-row  at-row__align--center' style='height: 50px;margin-left: 20px;'>
            <View className='at-col at-col-3' >
              <Image
                style='width: 80px;height: 54px;background: #fff;'
                src={cur[0]}
              /></View>
            <View className='at-col at-col-1'>
              <AtIcon value='search' size='30' color='#000'></AtIcon></View>
            <View className='at-col at-col-4  '>
              <AtInput
                name='value'
                title='标准五个字'
                type='text'
                placeholder='搜索课程.......'
              ></AtInput></View>
          </View>
          <View className='components-page'>
            <AtList>
              <Image
                 style='width: 100%;height: 337rpx;background: #fff;mode:"scaleToFill"'
                src={banner}
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
            />
          </View>
          <View className='mgrid1'>
            <AtGrid columnNum={2} mode='square' hasBorder={false}  data={
              [
                {
                  image: card1,
                },
                {
                  image: card2,
                },
              ]
            } /> </View>
          <View className='mgrid1'>
            <AtGrid columnNum={2} mode='square' hasBorder={false}  data={
              [
                {
                  image: card1,
                },
                {
                  image: card2,
                },
              ]
            } /> </View>
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
        <View className='mbar' onClick={this.handleClick.bind(this)}>
          <AtTabBar
            fixed
            backgroundColor='#ffffff'
            color='#ea6bb8'
            tabList={[
              { image: bar },
            ]}
          ><Image src={bar}></Image></AtTabBar></View>
      </View>
    )
  }
}
