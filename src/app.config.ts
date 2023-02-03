export default {
  pages: ["pages/index/index"],
  subPackages: [
    {
      root: "package",
      pages: ['mine/index']
    }
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  darkmode:true,
};
