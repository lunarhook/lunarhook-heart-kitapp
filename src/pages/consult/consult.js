import { View, Text, ScrollView, Image, CoverImage, CoverView, Button } from '@tarojs/components'
import React, { Component } from 'react'
import { AtToast, AtTextarea } from "taro-ui"
import './consult.scss'

import bg from '../../../img/consult.bg.jpg'
import button from '../../../img/consult.button.jpg'

let consultpagethis = null
export default class consult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      text: "123"
    }
    consultpagethis = this
  }
  OnTap(e) {
    const x = e.changedTouches[0].clientX
    const y = e.changedTouches[0].clientY

    var cur = Math.floor(x / 65) + 1
    if (x > 145 && x < 290 && y > 590 && y < 750) {
      consultpagethis.setState({ open: true, text: consultpagethis.state.text + "123123daddfs erg " })
      console.log(`点击位置：X=${x}, Y=${y} ,C=${cur}`, consultpagethis)
      this.forceUpdate()
    }

  }
  render() {
    return (
      <View onClick={this.OnTap.bind(this)} >
        <ScrollView className='index' >
          <View className=' dailog at-row at-row__align--center at-col--wrap'>
          <Text>{this.state.text}</Text></View>
          <AtToast isOpened={this.state.open} text="沟通" ></AtToast>
        </ScrollView>
      </View>
    )
  }
}
