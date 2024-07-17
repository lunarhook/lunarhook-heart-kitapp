import { View, Text, ScrollView, Image, CoverImage, CoverView, Button } from '@tarojs/components'
import React, { Component } from 'react'
import { AtToast } from "taro-ui"
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
    
    consultpagethis.setState({ open: true, text: consultpagethis.state.text + "!" })
    console.log(`点击位置：X=${x}, Y=${y} ,C=${cur}`, consultpagethis)
    this.forceUpdate()
  }
  render() {
    return (
      <View >
        <ScrollView className='index'>
          <CoverImage src={bg} className='bg' />
          <CoverView className='dailog'>
            <Button>{this.state.text}</Button>
          </CoverView>
          <CoverImage src={button} className='controls' onClick={this.OnTap.bind(this)} />
          <AtToast isOpened={this.state.open} text="沟通" ></AtToast>
        </ScrollView>
      </View>
    )
  }
}
