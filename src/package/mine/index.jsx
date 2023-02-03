import { View } from "@tarojs/components";
import { navigateBack } from "@tarojs/taro";
import { useAtom } from "jotai";
import { Fragment } from "react";
import { getTextAtom,setTextAtom } from "../../atoms";

const Hello = () =>{
  return(
    <Fragment>
      <View>5555</View>
    </Fragment>
  )
}

const Mine = () => {
  const [text] = useAtom(getTextAtom);
  const [,setText] = useAtom(setTextAtom)
  return (
    <Fragment>
      <View
        onClick={() => {
          setText('123')
          navigateBack();
        }}
        className="mine"
      >
        {text}
      </View>
    </Fragment>
  );
};
export default Mine;
