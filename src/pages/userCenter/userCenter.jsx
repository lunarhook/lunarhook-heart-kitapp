import React, { Component } from 'react'
import { View, Image, Text, Canvas, ScrollView, Button } from '@tarojs/components';
import Taro from '@tarojs/taro'
import { AtFloatLayout, AtDivider, AtTabBar, AtList, AtListItem } from 'taro-ui'
import './userCenter.scss';
//import '../kit/tools/icon_mdi.scss'

import miniapp from '../../../img/miniapp.jpg'
//import study from './assets/study.jpg'
//import qqservice from './assets/qqservice.png'
//import app from './assets/app.png'

let UserCenterthis = null
export default class UserCenter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpened: false,
      avatarUrl: undefined,
      nickName: undefined
    }
    UserCenterthis = this
  }
  componentDidMount() {
    Taro.showShareMenu({
      withShareTicket: true,
      showShareItems: ['shareAppMessage', 'shareTimeline', 'wechatFriends', 'wechatMoment']
    })
  }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidShow() {
    //plumber(this.props.tid)
  }

  static defaultProps = {
    privateList: [],
    walletList: [],
    controlList: [],
    userCenterList: []
  };

  clickimg(action) {

    var url = app
    if (action == "service") {
      console.log(action)
      url = qqservice
    }
    else if (action == "study") {
      console.log(action)
      url = study
    }

    wx.previewImage({
      urls: [url],
    })
  }
  saveImg(w, h) {
    this.setState({ isOpened: true })
    setTimeout(() => {
      Taro.nextTick(() => {
        Taro.createSelectorQuery().selectAll('#usercenter').node(res => {
          const node = res[0].node
          if (!node) return
          const ctx = node.getContext('2d')
          const dpr = Taro.getSystemInfoSync().pixelRatio
          node.width = w * dpr
          node.height = h * dpr
          ctx.scale(dpr, dpr)

              var img1 = node.createImage();
              let p1 = new Promise(function (resolve, reject) {
                img1.src = miniapp
                img1.onload = function () {
                  resolve(img1)
                }
              });
              
              Promise.all([p1]).then((ret) => {
                ctx.font = "16px Georgia"
                ctx.textAlign = "center";
                ctx.fillStyle = "#ffffff"
                ctx.fillRect(0, 0, w, h)
                ctx.fillStyle = "#000000"
                ctx.drawImage(img1, w / 2 - 70, 200 - 140, 140, 140);
                ctx.fillText("分享比心小程序", w / 2, 355 - 140)
                if (undefined !== UserCenterthis.state.avatarUrl) {
                  var img5 = node.createImage();
                  let p5 = new Promise(function (resolve, reject) {
                    img5.src = UserCenterthis.state.avatarUrl
                    img5.onload = function () {
                      if (undefined !== UserCenterthis.nickName) {
                        ctx.fillText(UserCenterthis.nickName + "邀请您加入比心", 270, 355 + 70 - 70)
                      } else {
                        ctx.fillText("欢迎您加入比心", 270, 375 + 35 - 70)
                      }
                      ctx.beginPath()
                      ctx.arc(55 + 35, 375 + 35 - 70, 35, 0, 2 * Math.PI)
                      ctx.clip()
                      ctx.drawImage(img5, 55, 375 - 70, 70, 70);
                      ctx.restore()

                    }
                  });
                }
                ctx.rect(0, 0, w, h)
                ctx.clip()
                setTimeout(() => {
                  Taro.canvasToTempFilePath({
                    canvas: node,
                    fileType: 'jpg',
                    success(res) {
                      setTimeout(() => {
                        Taro.saveImageToPhotosAlbum({
                          filePath: res.tempFilePath,
                          success() {
                            Taro.showToast('已保存到本地相册');
                            UserCenterthis.handleClose()
                            Taro.showShareImageMenu({ path: res.tempFilePath })
                          }
                        });
                      }, 300);
                    },
                    fail(res) {
                      console.log(res)
                    }
                  }, this);
                }, 500)
              })
              return
            
        }).exec()
      })
    }, 500)
  }
  handleClose() {
    this.setState({ isOpened: false })
  }
  onChooseAvatar(e, w, h) {
    const { avatarUrl } = e.detail
    this.setState({
      avatarUrl: avatarUrl
    })

    this.saveImg(w, h)
  }
  render() {
    var res = Taro.getSystemInfoSync()
    var w = res.windowWidth * 0.9
    var h = res.windowHeight * 0.8
    if (w > 355) { w = 375 }
    if (h > 495) { h = 495 }
    return (
      <View className="container">
        <ScrollView>
          <View className='imagecontain' style={{ width: w }}>
            <Text style="opacity: 0">blockline</Text>
            <Text style="opacity: 0">blockline</Text>
            <View className="imageslogan">
              <Image style='width: 140px;height: 140px;background: #fff;' src={miniapp} showMenuByLongpress={true}>
              </Image>
            </View>
            <View className="imagecontain">
              <View className="imageslogan">
                <Text>分享比心小程序</Text>
              </View>
            </View>
            <View className="imageslogan">
              <Text style="opacity: 0">blockline</Text>
            </View>
            <View className="imageslogan">
              <Button size='default' type='primary' open-type="chooseAvatar" onChooseAvatar={(e) => this.onChooseAvatar(e, w, h)}>制作分享海报</Button>
              <AtFloatLayout isOpened={this.state.isOpened} title="制作分享海报" onClose={this.handleClose.bind(this)}>
                <Canvas type="2d" className='imagecontain' id="usercenter" style={{ width: w, height: h }}></Canvas>
              </AtFloatLayout>
            </View>
            <View className="imageslogan">
              <Text style="opacity: 0">blockline</Text>
            </View>
            <View className="imageslogan">
              <Text style="opacity: 0">blockline</Text>
            </View>
            <View className="imageslogan">
              <Text style="opacity: 0">blockline</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
};
