import { View, Text, ScrollView, Image, CoverImage, CoverView, Button } from '@tarojs/components'
import React, { Component } from 'react'
import { AtToast, AtTextarea } from "taro-ui"
import Taro from '@tarojs/taro';
import './consult.scss'

import bg from '../../../img/consult.bg.jpg'
import button from '../../../img/consult.button.jpg'

let consultpagethis = null
export default class consult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      fake_audio_play: false,
      text: ""
    }
    consultpagethis = this
  }
 
  OnTap(e) {
    if (!consultpagethis.state.fake_audio_play) {
      // handlePlay();

      var createInnerAudioContext = Taro.createInnerAudioContext();
      if (createInnerAudioContext) {
        Taro.setInnerAudioOption({
          obeyMuteSwitch: false // 解决有一些IOS无法播放音频
        })
      }

      const url = 'https://bixinbixin.oss-cn-beijing.aliyuncs.com/voice/20240806/utts1b04ec145a2c408db2f2fd72a1aa481c.mp3'
      createInnerAudioContext.src = encodeURI(url); // encodeURI解决IOS无妨辨别地址存在中文的音频文件
      createInnerAudioContext.autoplay = true;
      createInnerAudioContext.play();
      consultpagethis.setState({fake_audio_play: true});
    }

    const x = e.changedTouches[0].clientX
    const y = e.changedTouches[0].clientY

    var cur = Math.floor(x / 65) + 1
    if (x > 145 && x < 290 && y > 590 && y < 750) {
      consultpagethis.setState({ open: true, text: consultpagethis.state.text + "." })
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
