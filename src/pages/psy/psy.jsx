
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image, CustomWrapper, ScrollView } from '@tarojs/components'
import { AtIcon, AtDivider, AtTabBar, AtList, AtListItem } from 'taro-ui'
import './psy.scss'
import './icon_awesome.scss'
import './icon_ionicons.scss'
import './icon_mdi.scss'

let Psypagethis = null
export default class Psy extends Component {
  componentDidMount() {
    Taro.showShareMenu({
      withShareTicket: true,
      showShareItems: ['shareAppMessage', 'shareTimeline', 'wechatFriends', 'wechatMoment']
    })

    this.setState({ current: 2 })

  }
  componentDidUpdate() {

  }
  constructor(props) {
    super(props)
    var open = new Array()
    open[1] = true
    open[2] = true
    this.state = {
      open: open,
      login: false,
    }
    Psypagethis = this
  }

  ClickAtTabBar(value) {
    handleClick(value)
  }

  GridHander(item, index) {
    if ("职业性格测试" == item) {
      Taro.navigateTo({ url: '../PsychLib/MBTIModule' })
    }
    else if ("九型人格测试" == item) {
      Taro.navigateTo({ url: '../PsychLib/EnneagramModule' })
    }
    else if ("霍兰德职业测试" == item) {
      Taro.navigateTo({ url: '../PsychLib/HollandModule' })
    }
    else if ("六爻测试" == item) {
      Taro.navigateTo({ url: '../../../pages/kit/UniversechangesLib/SixrandomLib/SixrandomNewPage' })
    }
    else if ("八字测评" == item) {
      Taro.navigateTo({ url: '../../../pages/kit/UniversechangesLib/EightrandomLib/EightrandomNewPage' })
    }
    else if ("数字八星" == item) {
      Taro.navigateTo({ url: '../../../pages/kit/UniversechangesLib/NumberLib/NumberMainPage' })
    }
    else if ("乾坤九考" == item) {
      Taro.navigateTo({ url: '../../../pages/kit/exam/TrigramsTestModule' })
    }
    else if ("合卺问礼" == item) {
      Taro.navigateTo({ url: '../../../pages/kit/UniversechangesLib/Marry/MarryNewPage' })
    }
  }
  handleAccordionClick(index, value) {
    //console.log(value,index)
    //var open = this.state.open
    open[index] = value;
    this.setState({ open: open })
  }


  render() {
    return (
      <View className={'contain'}>



        <ScrollView>

          <AtDivider >
            <AtIcon value='heart' color='red'></AtIcon>
            <Text> 心理测试 </Text>
            <AtIcon value='heart' color='red'></AtIcon>
          </AtDivider>
          <AtList hasBorder={false}>
            <AtListItem
              title='职业性格测试小程序版'
              note='迈尔斯-布里格斯类型指标MBTI'
              iconInfo={{
                prefixClass: 'fa',
                size: 36,
                color: '#FFCE00',
                value: 'podcast',
              }}
              onClick={this.GridHander.bind(this, '职业性格测试')}
            />
            <AtListItem
              title='九型人格测试小程序版'
              note='九型是具有古老历史的人格心理学工具'
              iconInfo={{
                prefixClass: 'fa',
                size: 30,
                color: 'red',
                value: 'universal-access'
              }}
              onClick={this.GridHander.bind(this, '九型人格测试')}
            />
            <AtListItem
              title='霍兰德职业测试小程序版'
              note='Holland认为人格可分为现实型、研究型、艺术型、社会型、企业型和常规型六种类型。'
              iconInfo={{
                prefixClass: 'mdi',
                size: 30,
                color: "#1FA7DE",
                value: 'alert-decagram'
              }}
              onClick={this.GridHander.bind(this, '霍兰德职业测试')}
            />
          </AtList>
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


