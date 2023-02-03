import { useLoading, useToast } from "taro-hooks";
type methodOptions = "GET" | "POST" | "PUT" | "DELETE";
type requestOptions = {
  url: string;
  method?: methodOptions;
  data: any;
  header?: Taro.General.IAnyObject;
};
type defaultOption = Pick<requestOptions, "method" | "data" | "header">;

const defaultOptionData: defaultOption = {
  method: "POST",
  data: {},
  header: { "content-type": "application/json; charset=UTF-8" }
};

export const api = (options: requestOptions) => {
  const [show, hide] = useLoading({
    title: "疯狂请求中...",
    mask: true
  });
  const [showToast, hideToast] = useToast({
    title: ""
  });
  show();
  return Taro.request({
    url: options.url,
    data: { ...defaultOptionData.data, ...options.data },
    header: { ...defaultOptionData.header, ...options.header }
  }).then((res: Taro.request.SuccessCallbackResult) => {
    const { statusCode, data } = res;
    if(statusCode >= 200 && statusCode < 300){
      showToast({
        title:'请求成功'
      })
    }else{
      throw new Error(`网络错误，状态码${statusCode}`)
    }
  });
};
