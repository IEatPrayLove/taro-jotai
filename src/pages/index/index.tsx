import React, { Fragment, useEffect } from "react";
import { useNavigationBar } from "taro-hooks";

import "./index.scss";
import RenderSelect from "@/components/renderSelect";

const Index = () => {
  const [_, { setTitle }] = useNavigationBar({ title: "" });
  useEffect(()=>{
    setTitle('成都市中小企业协会')
  },[])
  return (
    <Fragment>
      <RenderSelect />
    </Fragment>
  );
};

export default Index;
