const path = require('path');
module.exports = {
  title: '基金接口文档',
  description: '常用接口文档',
  base: '',
  dest: path.resolve(__dirname, '../../deploy/docs'),
  themeConfig: {
    nav: [{ text: '首页', link: '/' }],
    sidebar: {
      '/hammer-mrn/': [''],
    },
    displayAllHeaders: true,
  },
};
