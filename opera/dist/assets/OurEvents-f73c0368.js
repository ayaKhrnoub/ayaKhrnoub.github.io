import{r as a,j as e,R as g,e as h,A as j}from"./index-b1cdc86a.js";import{T as v,C as w}from"./ContactUs-fa3d976d.js";import{E as y,a as P}from"./EventCardLoading-6de3be30.js";import{u as b}from"./useFetch-651c1fca.js";import"./ContactUsForm-8439591d.js";const L=()=>{const[s,m]=a.useState(1),{data:r,isLoading:i,error:l}=b(`/api/party/opened?page=${s}`);console.log(r);const[n,d]=a.useState([]),[c,f]=a.useState(1),[x,p]=a.useState(8),u=()=>{window.sessionStorage.setItem("scrollPosition",window.pageYOffset)};return a.useEffect(()=>{!i&&!l&&(d(t=>[...t,...r.data.data]),f(r.data.last_page),p(r.data.per_page))},[r,i,l]),a.useEffect(()=>{const t=sessionStorage.getItem("scrollPosition");t&&(window.scrollTo(0,parseInt(t)),sessionStorage.removeItem("scrollPosition"))},[n]),e.jsxs(g.Fragment,{children:[e.jsx("header",{className:"relative h-screen w-screen",children:e.jsx("div",{className:"bg-primary relative h-screen w-screen",children:e.jsx("img",{className:"w-full h-full object-cover",src:h.intro1,alt:"",loading:"lazy"})})}),e.jsxs("main",{className:"w-full mb-8 relative after:top-0 after:left-0 after:z-[-1] after:absolute after:w-full after:h-[75vh] after:bg-[#0C2024]/90 pt-4 ",children:[e.jsxs("div",{className:"w-10/12 mx-auto",children:[e.jsx(v,{text1:"our",text2:"event",white:!0}),e.jsx("p",{className:"text-white py-4 mx-auto text-3xl",children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"}),e.jsx("div",{className:"mt-8 gap-8 flex justify-center items-center flex-wrap",children:i&&s===1?Array(x*s).fill(0).map((t,o)=>e.jsx(y,{},o)):n.map(t=>e.jsx(P,{party:t},t.id))})]}),s===c?null:e.jsx("div",{className:"flex justify-center items-center mt-12",children:e.jsx("button",{onClick:t=>{t.preventDefault(),t.stopPropagation(),u(),s!==c&&m(o=>o+1)},disabled:i,className:"bg-secondary uppercase w-24 flex justify-center disabled:bg-secondary/80 items-center py-2 rounded-lg mt-5 text-xl text-white hover:bg-secondary/80 active:scale-105",children:i&&s>1?e.jsx(j,{className:"text-3xl animate-spin"}):e.jsx("span",{children:"more"})})}),e.jsx(w,{})]})]})};export{L as default};
