import{n as h,r,o as n,p as k}from"./index-b1cdc86a.js";const L=a=>{const{token:c}=h(),[i,s]=r.useState({data:[],isLoading:!0,error:!1,errorMessage:""}),t=n.CancelToken.source(),d=r.useCallback(async()=>{try{const e=await(await n.get(`${k}${a}`,{cancelToken:t.token,headers:{Authorization:`Bearer ${c}`}})).data;e&&s({data:e.results?e.results:e,isLoading:!1,error:!1,errorMessage:""})}catch(o){s({data:[],isLoading:!1,error:!0,errorMessage:o})}},[a]);r.useEffect(()=>(s({data:[],isLoading:!0,error:!1,errorMessage:""}),d(),()=>t.cancel()),[a]);const{data:u,isLoading:f,error:g,errorMessage:l}=i;return{data:u,isLoading:f,error:g,errorMessage:l}};export{L as u};
