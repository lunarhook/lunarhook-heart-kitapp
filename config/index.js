import { defineConfig } from '@tarojs/cli'

import devConfig from './dev'
import prodConfig from './prod'

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
export default defineConfig(async (merge) => {
  const baseConfig = {
    // 项目名称
    projectName: 'lunarhook-heart-kitapp',
    // 项目创建日期
    date: '2024-8-2',
    // 设计稿尺寸
    designWidth: 750,
    // 设计稿尺寸换算规则
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      375: 2,
      828: 1.81 / 2
    },
    // 项目源码目录
    sourceRoot: 'src',
    // 项目产出目录
    outputRoot: 'dist',
    // Taro 插件配置
    plugins: [],
    // 全局变量设置
    defineConstants: {},
    // 文件 copy 配置
    copy: {
      patterns: [],
      options: {}
    },
    // 框架，react，nerv，vue, vue3 等
    framework: 'react',
    // 编译工具
    compiler: {
      type: 'webpack5',
      prebundle: {
        enable: false,
        force: true
      }
    },
    // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    cache: {
      enable: true
    },
    // 小程序端专用配置
    mini: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {},
        },
        pxtransform: {
          enable: true,
          config: {}
        },
        url: {
          enable: true,
          config: {
            maxSize: 1024 // 设定转换尺寸上限
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  }
  if (process.env.NODE_ENV === 'development') {
    // 本地开发构建配置（不混淆压缩）
    return merge({}, baseConfig, devConfig)
  }
  // 生产构建配置（默认开启压缩混淆等）
  return merge({}, baseConfig, prodConfig)
})
