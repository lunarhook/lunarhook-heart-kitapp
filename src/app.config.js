export default defineAppConfig({
  pages: [
    'pages/index/index',
  ],
  lazyCodeLoading: 'requiredComponents',
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '比心',
    navigationBarTextStyle: 'black',
  },
  subPackages:[
    {
      "root":'pages/consult',
      pages: [
        'consult',
      ],
      //"independent": true
    },
    {    
      "root":'pages/userCenter',
      pages: [
        'userCenter',
      ],
      //"independent": true
    },
    {
      "root":'pages/course',
      pages: [
        'course'
      ],
      //"independent": true
    },
    {
      "root":'pages/detail',
      pages: [
        'detail'
      ],
      //"independent": true
    },
    {
      "root":'pages/psy',
      pages: [
        'psy'
      ],
      //"independent": true
    },
    {
      "root":'pages/PsychLib',
      pages: [
        'HollandModule',
        'MBTIModule',
        'EnneagramModule',
      ],
      //"independent": true
    },
  ]
})
