import { View, Text, ScrollView, Image, CoverImage, CoverView, Button } from '@tarojs/components'
import React, { Component } from 'react'
import { AtToast } from "taro-ui"
import './detail.scss'

import bg from '../../../img/detail.jpg'

let detailpagethis = null
export default class detail extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    detailpagethis = this
  }
  OnTap(e) {
    const x = e.changedTouches[0].clientX
    const y = e.changedTouches[0].clientY

    var cur = Math.floor(x / 65) + 1
    
    detailpagethis.setState({ open: true, text: detailpagethis.state.text + "!" })
    console.log(`点击位置：X=${x}, Y=${y} ,C=${cur}`, detailpagethis)
    this.forceUpdate()
  }
  render() {
    return (
      <View >
        <ScrollView className='index'>
          <CoverImage src={bg} className='bg' />
        </ScrollView>
      </View>
    )
  }
}
