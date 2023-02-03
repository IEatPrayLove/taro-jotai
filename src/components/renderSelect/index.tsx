import { View } from "@tarojs/components";
import "./index.scss";
import React, { Fragment } from "react";
interface selectOptions {}
const RenderSelect: React.FC<selectOptions> = () => {
  return (
    <Fragment>
      <View className="flex-row w-100">
        <View className="flex-1 select_choose_container">
          <View className="select_choose_item">acc</View>
        </View>
        <View className="select_choose_btn">选择</View>
      </View>
    </Fragment>
  );
};
export default RenderSelect;
