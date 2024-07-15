import { View, Text, ScrollView, Image, Input } from '@tarojs/components'
import React, { Component } from 'react'
import { AtList, AtInput, AtGrid, AtIcon, AtTabBar } from "taro-ui"
import './consult.scss'

import bg from '../../../img/consult.bg.jpg'

var cur = new Array()
cur.push(logo)
export default class consult extends Component {
  handleClick(e) {
    const x = e.changedTouches[0].clientX
    const y = e.changedTouches[0].clientY
   
    var cur = Math.floor(x/65) + 1
    console.log(`点击位置：X=${x}, Y=${y} ,C=${cur}`)
  }
  render() {
    return (
      <View className={"imagecontain"} animation={this.state.animationData}>
      <ScrollView >
      <Image className="imageslogan" mode='widthFix' src={bg}></Image>
            <View className={"contain"}  >
            <CustomWrapper>
                <Text className="text"     space="nbsp" >
                  {"    "+sloganshow[this.state.cur].contect}
                </Text>
                </CustomWrapper>
              </View>

      </ScrollView>
    </View>
    )
  }
}
