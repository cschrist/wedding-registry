(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(41)},41:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(26),r=a.n(l),c=a(27),o=a(4),s=a(5),m=a(7),d=a(6),h=a(8),u=a(2),g=a(1),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(u.a)(Object(u.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;parseInt(t,10)?this.props.updateQty(this.props.item,Math.max(0,parseInt(t,10))):this.props.updateQty(this.props.item,"")}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.qty,n=e.cost;return i.a.createElement("div",{className:Object(g.b)(p.line)},i.a.createElement("div",{className:Object(g.b)(p.cell,p.name)},t),i.a.createElement("div",{className:Object(g.b)(p.cell,p.qty)},"string"===typeof a&&""!==a?a:i.a.createElement("input",{type:"number",value:a,placeholder:"0",className:Object(g.b)(p.qtyText),onChange:this.handleChange,onFocus:function(e){e.target.select(),e.target.placeholder=""},onBlur:function(e){""===e.target.value&&(e.target.placeholder="0")}})),i.a.createElement("div",{className:Object(g.b)(p.cell,p.cost)},n))}}]),t}(n.Component),p=g.a.create({line:{width:"95%",margin:"0.2em auto",lineHeight:"1.5em",textAlign:"left"},cell:{display:"inline-block",boxSizing:"border-box"},name:{width:"55%",textAlign:"left"},qty:{width:"15%",textAlign:"right"},qtyText:{fontSize:"16px",fontFamily:"Here Lies MECC Regular",width:"100%",textAlign:"right",color:"#222",background:"#fafafa",padding:"0.2em 0"},cost:{width:"30%",textAlign:"right"}}),f=b,y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.price;return i.a.createElement("div",{className:Object(g.b)(E.item)},i.a.createElement("img",{src:"/img/".concat(t,".png"),alt:t,className:Object(g.b)(E.img)}),i.a.createElement("div",null,t),i.a.createElement("div",null,"$",a))}}]),t}(n.Component),E=g.a.create({item:{margin:"20px",display:"inline-block",textAlign:"center"},img:{height:"50px"}}),v=y,O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={wagon:"",oxen:"",wheel:"",clothing:"",food:"",total:0},a.itemPrices={wagon:150,oxen:100,wheel:20,clothing:5,food:1},a.itemSKUs={wagon:"sku_E2igFvdFYwKXVf",oxen:"sku_E2igwHLr4zN6Z2",wheel:"sku_E2ig0PAwQx7DBv",clothing:"sku_E2igTq4iZXn56P",food:"sku_E2ig0xtdjTg5cH"},a.updateQty=a.updateQty.bind(Object(u.a)(Object(u.a)(a))),a.stripe=window.Stripe("pk_live_Llp3ingWPhiXLLSm9fsnRGcd",{betas:["checkout_beta_3"]}),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"updateQty",value:function(e,t){var a=this;this.setState(Object(c.a)({},e,t),function(){var e=Object.keys(a.itemPrices).reduce(function(e,t){return e+a.itemPrices[t]*(a.state[t]||0)},0);a.setState({total:e})})}},{key:"render",value:function(){var e=this,t=Object.keys(this.itemPrices).slice(0,3).map(function(t){return i.a.createElement(v,{key:t,item:t,price:e.itemPrices[t]})}),a=Object.keys(this.itemPrices).slice(3,5).map(function(t){return i.a.createElement(v,{key:t,item:t,price:e.itemPrices[t]})}),n=Object.keys(this.itemPrices).map(function(t){var a=["wagon","wheel"].includes(t)?t+"s":t;return i.a.createElement(f,{key:t,item:t,name:a,qty:e.state[t],cost:"$"+(e.itemPrices[t]*e.state[t]||0),updateQty:e.updateQty})}),l=[],r=[];Object.keys(this.itemPrices).forEach(function(t){var a=t;["wagon","wheel"].includes(t)&&e.state[t]>1&&(a+="s"),e.state[t]>0&&(l.push({sku:e.itemSKUs[t],quantity:e.state[t]}),r.push({name:a,quantity:e.state[t]}))});var c="";if(r.forEach(function(e){c+="".concat(e.quantity," ").concat(e.name,", ")}),1===l.length)c=c.slice(0,-2);else if(2===l.length){var o=(c=c.slice(0,-2)).lastIndexOf(",");c=c.slice(0,o)+" and "+c.slice(o+2)}else if(l.length>2){var s=(c=c.slice(0,-2)).lastIndexOf(",");c=c.slice(0,s+2)+" and "+c.slice(s+2)}return i.a.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",textAlign:"center",lineHeight:"1.5em"}},i.a.createElement("h1",{className:Object(g.b)(x.heading)},"Registry"),i.a.createElement("div",null,i.a.createElement("img",{src:"img/dude.png",style:{float:"left",height:"150px",margin:"0 1em 1em 3em"},alt:"Store owner (presumably Marvin Joersz)"}),i.a.createElement("p",{style:{margin:"3em"}},"Purchase supplies to aid Nina and Cam on their journey as a married couple."),i.a.createElement("div",{style:{clear:"both"}})),i.a.createElement("hr",{className:Object(g.b)(x.divider)}),i.a.createElement("p",{style:{margin:"1.5em",textAlign:"left"}},"Marv's General Store",i.a.createElement("br",null),"Mandan, North Dakota"),i.a.createElement("p",{style:{margin:"1.5em",textAlign:"right"}},"June 29, 2019"),i.a.createElement("hr",{className:Object(g.b)(x.divider)}),t,i.a.createElement("br",null),a,i.a.createElement("div",{style:{clear:"both"}}),i.a.createElement("hr",{className:Object(g.b)(x.divider)}),i.a.createElement("div",{style:{margin:"1.5em 0"}},i.a.createElement(f,{name:"",qty:"qty.",cost:"cost",updateQty:this.updateQty}),n),i.a.createElement("hr",{className:Object(g.b)(x.divider)}),i.a.createElement(f,{name:"",qty:"total:",cost:"$"+this.state.total}),i.a.createElement("hr",{className:Object(g.b)(x.divider)}),i.a.createElement("div",{style:{margin:"4em 0 2em"}},i.a.createElement("h2",{className:Object(g.b)(x.heading)},"Send your gift"),i.a.createElement("div",{style:{margin:"4em 1.5em",textAlign:"left"}},i.a.createElement("p",{style:{textAlign:"left"}},"Option 1: PayPal"),i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://paypal.me/NinaJoshi/".concat(this.state.total),className:Object(g.b)(x.button)},"Give $",this.state.total.toFixed(2)," ",""===c?"":"for "+c)),i.a.createElement("div",{style:{margin:"4em 1.5em",textAlign:"left"}},i.a.createElement("p",null,"Option 2: Check"),i.a.createElement("div",{style:{fontFamily:"Arial",margin:"0 1em"}},"Pay to:",i.a.createElement("div",{style:{margin:"0.5em 1em"}},'To: "Nina Joshi" or "Cameron Christensen"',i.a.createElement("br",null),"Amount: $",this.state.total.toFixed(2),i.a.createElement("br",null),'Memo: "Wedding gift \u2014 ',c,'"'),i.a.createElement("div",{className:Object(g.b)(x.mail)},"Mail to:",i.a.createElement("div",{style:{margin:"0.5em 1em"}},"Nina Joshi and Cameron Christensen",i.a.createElement("br",null),"P.O. Box 2862",i.a.createElement("br",null),"Saratoga, CA 95070")))),i.a.createElement("div",{style:{margin:"4em 1.5em",textAlign:"left"}},i.a.createElement("p",null,"Option 3: Card"),i.a.createElement("div",{style:{fontFamily:"Arial",margin:"0em 1em"}},i.a.createElement("div",null,"Note: 3% of your gift will go to transaction fees.",i.a.createElement("div",{style:{margin:"1em 0"}},"Nina and Cam: $",(this.state.total-.03*this.state.total).toFixed(2),i.a.createElement("br",null),"Fees: $",(.03*this.state.total).toFixed(2)))),i.a.createElement("div",{className:Object(g.b)(x.button),onClick:function(t){console.log(l),e.stripe.redirectToCheckout({items:l,successUrl:"https://google.com",cancelUrl:"https://google.com"}).then(function(e){console.log(e)})}},"Give $",this.state.total.toFixed(2)," ",""===c?"":"for "+c))),i.a.createElement("div",{style:{maxWidth:"600px",margin:"2em"}},i.a.createElement("h2",{className:Object(g.b)(x.heading)},"Hope to see you at the wedding!"),i.a.createElement("img",{src:"img/end.png",alt:"A couple heading on their journey.",style:{display:"block",width:"100%",boxSizing:"border-box",margin:"0 auto"}})))}}]),t}(n.Component),x=g.a.create({heading:{margin:"1.5em",lineHeight:"1.5em"},divider:{border:"4px solid #0f0"},button:{background:"#222",fontFamily:"Here Lies MECC Regular",display:"inline-block",fontSize:"12px",border:"2px solid #fafafa",textDecoration:"none",textAlign:"center",padding:"0.5em 1em",marginLeft:"1em",color:"#fafafa",borderRadius:"0.5em",":hover":{color:"#fff",border:"2px solid #0f0",cursor:"pointer"}}}),j=O;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.903eaef9.chunk.js.map