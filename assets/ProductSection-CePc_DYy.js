import{r as c,u as n,j as e,L as r,G as o}from"./index-BCWJmmJf.js";import{S as d}from"./slick-theme-gyBWiHMb.js";const x=s=>{const{className:a,onClick:t}=s;return e.jsx("button",{className:`${a} bsc_left_arrow`,onClick:t,children:e.jsx("i",{className:"fa-regular fa-angle-left"})})},h=s=>{const{className:a,onClick:t}=s;return e.jsx("button",{className:`${a} bsc_right_arrow`,onClick:t,children:e.jsx("i",{className:"fa-regular fa-angle-right"})})},i=({products:s})=>{const a={arrows:!0,dots:!1,infinite:!0,slidesToShow:3,slidesToScroll:1,nextArrow:e.jsx(h,{}),prevArrow:e.jsx(x,{}),responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]};return e.jsx(d,{...a,className:"best_seller_carousel",children:s.map(t=>e.jsxs("div",{className:"product_layout1",children:[e.jsx("div",{className:"item_badge hot_badge",children:e.jsx("span",{children:"جدید"})}),e.jsxs("div",{className:"item_image",children:[e.jsx("img",{src:t.imageUrl,alt:t.name}),e.jsx(r,{className:"quickview_btn",to:`/product/${t.slug}`,children:"مشاهده"})]}),e.jsxs("div",{className:"item_content",children:[e.jsx("h3",{className:"item_title",children:e.jsx(r,{to:`/product/${t.slug}`,children:t.name})}),e.jsx("div",{className:"item_price",children:e.jsxs("span",{children:[t.price.toLocaleString("en-US")," تومان"]})}),e.jsxs("ul",{className:"item_btns_group ul_li",children:[e.jsx("li",{children:e.jsx(r,{className:"addtocart_btn",to:`/product/${t.slug}`,children:"افزودن به سبد خرید"})}),e.jsx("li",{children:e.jsx("a",{href:"#!",children:e.jsx("i",{className:"fa-solid fa-arrows-rotate"})})}),e.jsx("li",{children:e.jsx("a",{href:"#!",children:e.jsx("i",{className:"fas fa-heart"})})})]})]})]},t.id))})},p=()=>{const[s,a]=c.useState(0),{data:t,isSuccess:u}=n(["products",1,6,"","none",s],()=>o(1,6,"","none",s));if(!u)return e.jsx("div",{children:"..."});const l=t.items;return e.jsx("section",{className:"product_section",children:e.jsxs("div",{className:"container",children:[e.jsxs("ul",{className:"tabs_nav nav",role:"tablist",children:[e.jsx("li",{role:"presentation",children:e.jsx("button",{className:s===0?"active":"",onClick:()=>a(0),type:"button",role:"tab","aria-selected":s===0,children:"همه محصولات"})}),e.jsx("li",{role:"presentation",children:e.jsx("button",{className:s===1?"active":"",onClick:()=>a(1),type:"button",role:"tab","aria-selected":s===1,children:"پربازدیدترین"})}),e.jsx("li",{role:"presentation",children:e.jsx("button",{className:s===2?"active":"",onClick:()=>a(2),type:"button",role:"tab","aria-selected":s===2,children:"پرفروش‌ترین"})}),e.jsx("li",{role:"presentation",children:e.jsx("button",{className:s===4?"active":"",onClick:()=>a(4),type:"button",role:"tab","aria-selected":s===4,children:"جدیدترین"})}),e.jsx("li",{role:"presentation",children:e.jsx("button",{className:s===5?"active":"",onClick:()=>a(5),type:"button",role:"tab","aria-selected":s===5,children:"ارزان‌ترین"})}),e.jsx("li",{role:"presentation",children:e.jsx("button",{className:s===6?"active":"",onClick:()=>a(6),type:"button",role:"tab","aria-selected":s===6,children:"گران‌ترین"})})]}),e.jsxs("div",{className:"tab-content tad_has_carousel",style:{direction:"ltr"},children:[e.jsx("div",{className:"tab-pane fade show active",id:"bestseller_tab",role:"tabpanel",children:e.jsx("div",{className:"product_carousel_wrap arrows_topright",children:e.jsx(i,{products:l})})}),e.jsx("div",{className:"tab-pane fade",id:"ourproduct_tab",role:"tabpanel",children:e.jsx("div",{className:"product_carousel_wrap arrows_topright",children:e.jsx(i,{products:l})})})]})]})})};export{p as default};
