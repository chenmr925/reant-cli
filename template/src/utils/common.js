import axios from 'axios';

const assign = (obj) => {
    return JSON.parse(JSON.stringify(obj))
}

//反解析序列化对象，$.param和sirialize()类似的数据
const unparam = (str) => {
    let dataObj = {};
    if(str!==""){
        let src = str.indexOf("?")===0?str.substring(1,str.length):str;
        let arr = src.split('&');
        for(let i=0; i<arr.length; i++){
            let arr2 = arr[i].split('=');
            dataObj[arr2[0]] = decodeURIComponent(arr2[1]);
        }
    }
    return dataObj;
};

//ajax封装
/*
ajax({
    url: "/test",
    method: "get",
    data: {},
    success(res){},
    fail(err){},
    error(err){}
})
*/

// 测试环境根路径
const baseURL = '';
axios.defaults.baseURL = baseURL;

const ajax = (option, isLogin) => {
    let ajaxUrl = option.url;
    let ajaxMethod = option.method ? option.method.toLowerCase() : "get";
    axios({
        url: ajaxUrl,
        params: ajaxMethod === "get"?option.data:null,
        data： ajaxMethod === "post"?option.data:null,
        type: 'json',
        method: ajaxMethod
    }).then((res) => {
        if(res.status === 200){
            if(res.data.state) {
                if(res.data.state == "200"){
                    typeof option.success === "function" && option.success(res.data);
                }else{
                    typeof option.fail === "function" && option.fail(res.data);
                }
            } else {
                typeof option.success === "function" && option.success(res.data);
            }
        }else{
            typeof option.error === "function" && option.error(res);
        }
    }).catch(function(err){
        console.log(typeof err, err.message, typeof err.message);
    });
}

export { assign, unparam, ajax }