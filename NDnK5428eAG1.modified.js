(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{9662:(e,t,l)=>{Promise.resolve().then(l.bind(l,7500))},7500:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>g});var a=l(5155),r=l(2115),s=l(5565);let n={src:"/_next/static/media/lucky.b2be9958.png",height:300,width:300,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVMaXHb2zBYLB/SxD+8rCbDsj7St0fSw1PCtCasoka9sEGkljNgWE+bihbTvy3s2DKcDggYAAAADnRSTlMABQl8z6TsYtRTceWELi9zot8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAuSURBVHicY2BAAkyMIJKRgZ2NFcJg5mOBMTiYIAx+FhCDgYGRkweqi4ubl4EBAA+gAJqVlK4gAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},i=e=>{let{fallback:t=n,alt:l,src:i,...c}=e,[x,o]=(0,r.useState)(null);return(0,r.useEffect)(()=>{o(null)},[i]),(0,a.jsx)(s.default,{className:" rounded-sm object-cover align-center",width:170,height:120,alt:l,onError:o,src:x?n:i,...c})};function c(e){let{staff:t}=e,l="https://mc-heads.net/avatar/".concat(t.name,"/100");return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{"data-aos":"fade-up",className:"w-full md:w-1/2 lg:w-1/3 p-4",children:(0,a.jsx)("div",{className:"backdrop-blur-md p-5 bg-slate-800 rounded-lg shadow-lg",children:(0,a.jsx)("div",{className:"flex flex-col items-center",children:(0,a.jsx)("div",{className:"relative",children:(0,a.jsxs)("div",{className:"flex flex-col gap-4 mx-auto justify-center py-8",children:[(0,a.jsx)(i,{src:l,alt:t.name}),(0,a.jsx)("div",{className:" p-1",children:(0,a.jsx)("div",{className:"mt-2 text-center flex flex-col gap-2",children:(0,a.jsx)("h3",{className:"text-white text-xl mt-5 lg:text-3xl font-bold font-nexabold",children:t.name})})})]})})})})},t.uuid)})}var x=l(6511),o=l(9574),d=l(7266);function h(e){let{children:t,...l}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{id:"staff-card",className:" ".concat(l,"  shadow-xl bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-500 background-animate py-20"),children:t})})}function m(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex mx-auto px-4 pb-4",children:(0,a.jsxs)("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]})}),(0,a.jsx)("div",{className:"text-white",children:"Loading..."})]})}async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 10000 } = options; // default 10 seconds timeout
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal  
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}
async function f(){
  try {
    let e = await fetchWithTimeout("/api/staff", { method: "GET", headers: { "Content-Type": "application/json" }, timeout: 10000 });
    let t = await e.json();
    if (500 === t.status) return Error("Internal Server Error");
    return t.result;
  } catch (error) {
    return error;
  }
}
function g(){
  let e = (0,d.useTranslations)("Staff"),
    [t, l] = (0,r.useState)([]),
    [s, n] = (0,r.useState)(!0),
    [i, g] = (0,r.useState)(null);
  async function u() {
    n(!0);
    g(null);
    let e = await f();
    e instanceof Error && g(e);
    l(e);
    n(!1);
  }
  return (0,r.useEffect)(() => {
    u();
  }, []), (0,a.jsxs)(x.A, {
    children: [
      (0,a.jsx)(o.A, { color: "green", id: "staff-section", child: e("title"), children: "" }),
      (0,a.jsx)(h, {
        props: t.length > 0 ? "h-auto" : "h-screen",
        children: (0,a.jsx)("div", {
          className: "container mx-auto py-5",
          children: (0,a.jsx)("div", {
            className: "flex flex-wrap  align-middle justify-center",
            children: t.length > 0 ? t.map((e, t) => (0,a.jsx)(c, { staff: e }, t)) : (0,a.jsxs)("div", {
              className: "text-2xl font-nexabold text-center mx-auto",
              children: [
                s && (0,a.jsx)(a.Fragment, { children: (0,a.jsx)(m, {}) }),
                i && (0,a.jsx)(a.Fragment, { children: (0,a.jsxs)("div", { className: "text-white", children: ["Error: ", i.message] }) }),
                !s && !i && (0,a.jsx)("button", { className: "mt-4 px-4 py-2 bg-green-600 rounded text-white font-semibold hover:bg-green-700", onClick: u, children: "Retry" })
              ]
            })
          })
        })
      })
    ]
  });
}
l(6511);
l(9574);
l(7266);
}}]);
