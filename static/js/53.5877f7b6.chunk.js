"use strict";(self.webpackChunkstellar_aesthetics_project=self.webpackChunkstellar_aesthetics_project||[]).push([[53],{9013:function(e,a,t){t(2791);var s=t(3197),i=t(3540),l=t(2306),r=t(184);a.Z=function(e){var a=e.horizontal,t=e.img,n=e.title,d=e.title2,m=e.subtitle,h=e.externalImg,c=e.containerCss,o="lg:w-1/3 sm:w-1/2 w-full ",u="card sm:m-4 mb-4 shrink-0 ";return(0,r.jsx)(r.Fragment,{children:a?(0,r.jsx)("div",{className:c||o,children:(0,r.jsxs)("div",{className:u+"md:h-[600px] sm:h-[500px]",children:[(0,r.jsx)("div",{className:"img md:h-[510px] sm:h-[400px] w-full bg-gray-200",children:t&&(0,r.jsx)(l.Z,{src:h?t:s._+t,imgClass:"w-full h-full object-cover",className:"w-full h-full"})}),(0,r.jsxs)("div",{className:"caption mt-3",children:[(0,r.jsx)("h5",{className:"text-lg",children:n}),m&&(0,r.jsx)("p",{className:"text-body",children:(0,i.ZP)(m)})]})]})}):(0,r.jsx)("div",{className:c||o,children:(0,r.jsxs)("div",{className:u+"md:h-[380px] sm:h-[450px] h-[300px]",children:[(0,r.jsx)("div",{className:"img md:h-[300px] sm:h-[350px] h-[200px] w-full bg-gray-200",children:t&&(0,r.jsx)(l.Z,{src:h?t:s._+t,imgClass:"w-full h-full object-cover",className:"w-full h-full"})}),(0,r.jsxs)("div",{className:"caption mt-3",children:[(0,r.jsx)("h5",{className:"text-md font-medium",children:n}),d&&(0,r.jsx)("h5",{className:"text-md font-medium",children:d}),m&&(0,r.jsx)("p",{className:"text-body",children:(0,i.ZP)(m)})]})]})})})}},8782:function(e,a,t){t(2791);var s=t(184);a.Z=function(e){var a=e.text1,t=e.text2,i=e.className,l=e.brNone,r=e.white;return(0,s.jsx)("h2",{className:"".concat(r&&"text-white "," lg:text-5xl md:text-4xl text-3xl md:border-b-0 md:pb-0 border-b-4 pb-5 capitalize lg:w-[70%] ").concat(i),children:(0,s.jsxs)("strong",{children:[(0,s.jsxs)("span",{className:"font-semibold",children:[" ",a]})," ",!l&&(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:"capitalize ".concat(r?"text-white":"text-primary"),children:t})]})})}},2306:function(e,a,t){t(2791);var s=t(184);a.Z=function(e){var a=e.src,t=e.alt,i=e.caption,l=e.className,r=e.imgClass;return(0,s.jsxs)("figure",{className:l,children:[(0,s.jsx)("img",{loading:"lazy",src:a,alt:t||"",className:r||"w-full h-full object-cover"}),(0,s.jsx)("figcaption",{className:"hidden",children:i})]})}},6023:function(e,a,t){var s=t(9439),i=t(2791),l=t(184);a.Z=function(e){var a=e.children,t=(0,i.useState)(!0),r=(0,s.Z)(t,2),n=r[0],d=r[1],m=(0,i.useState)(null),h=(0,s.Z)(m,2),c=h[0],o=h[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"text text-body ".concat(n&&"h-[150px] overflow-hidden text-effect"),children:a}),(0,l.jsx)("button",{onClick:function(){d(!n),n?(o(document.body.scrollTop),console.log(c)):document.body.scrollTop=c},className:"read-or-hide btn px-0 text-primary",children:n?"Read More":"Show Less"})]})}},8766:function(e,a,t){t(2791);var s=t(184);a.Z=function(e){var a=e.children,t=e.className;return(0,s.jsx)("section",{className:"".concat("lg:py-20 py-10 md:px-10 px-5"," ").concat(t),children:a})}},9320:function(e,a,t){var s=t(9439),i=t(2711),l=t(2791),r=t(184);a.Z=function(){var e=(0,l.useState)(!1),a=(0,s.Z)(e,2),t=a[0],n=a[1],d=(0,l.useState)(document.title),m=(0,s.Z)(d,2),h=m[0];m[1];return(0,r.jsx)("div",{className:"absolute bottom-3 right-8",children:(0,r.jsxs)("a",{href:"https://api.whatsapp.com/send?phone=917999506817&text=Hello%20Team%20Stellar%20Aesthetics.I%20would%20like%20to%20get%20more%20info%20about%3A%20*".concat(h,"*"),className:"".concat(t?"px-5":"px-3"," py-3 flex items-center gap-2 rounded-full bg-green-600 text-white"),target:"_blank",rel:"noreferrer",onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)},children:[(0,r.jsx)(i.JO,{className:"text-3xl",icon:"ic:baseline-whatsapp"}),t&&"Message Us"]})})}},9270:function(e,a,t){t.d(a,{Zb:function(){return r.Z},X6:function(){return h.Z},DH:function(){return d},Ei:function(){return n.Z},mr:function(){return l},$0:function(){return m.Z}});t(2791);var s=t(1087),i=t(184),l=function(e){var a=e.children,t=window.location.pathname.split("/");return(0,i.jsxs)("header",{className:"bg-primary py-14 px-10",children:[(0,i.jsx)("h1",{className:"lg:text-6xl md:text-5xl text-4xl font-medium text-white",children:a}),(0,i.jsx)("div",{className:"mt-5 text-white flex gap-2",children:t.map((function(e,a){return a!==t.length-1?(0,i.jsxs)("span",{children:[(0,i.jsx)(s.rU,{className:"no-underline text-white",to:"/",children:"home"},a)," ",(0,i.jsx)(s.rU,{to:"/"+e,className:"text-white no-underline",children:e}),"/"]},a):(0,i.jsx)(s.rU,{className:"no-underline text-white",to:"/"+e,children:e},a)}))})]})},r=t(9013),n=t(2306),d=function(){return(0,i.jsxs)("section",{className:"md:h-[600px] sm:h-[400px] h-screen lg:px-0 lg:py-0 w-full bg-black relative",children:[(0,i.jsx)("figure",{className:"w-full h-full",children:(0,i.jsx)("video",{className:"w-full h-full object-cover",autoPlay:!0,loop:!0,muted:!0,src:"/assets/videos/homepage-video.mp4"})}),(0,i.jsxs)("div",{className:"absolute top-1/2 left-1/2 z-10 text-center w-full md:px-10 px-5 -translate-x-1/2 -translate-y-1/2",children:[(0,i.jsx)("h3",{className:"md:text-5xl text-2xl text-white",children:"Get Started"}),(0,i.jsx)("h2",{className:"md:text-7xl sm:text-5xl text-3xl text-white font-bold md:font-medium",children:"Start Your Journey"}),(0,i.jsxs)("div",{className:"flex items-center mt-5 gap-5 justify-center",children:[(0,i.jsx)(s.rU,{className:"btn filled bg-primary",to:"/procedures",children:"I'm Patient"}),(0,i.jsx)(s.rU,{className:"btn filled white text-primary",to:"/courses",children:"I'm Doctor"})]})]})]})},m=(t(6023),t(3307),t(8766)),h=(t(9320),t(8782))},8053:function(e,a,t){t.r(a),t.d(a,{default:function(){return m}});var s=t(3197),i=t(2711),l=t(4270),r=JSON.parse('[{"id":1,"attributes":{"name":"Dr. Sapnna Vaderra","profession":"Cranio-Maxilofacial & Facial Plastic Surgeon","description":"<p><span style=\\"font-family:Poppins, Helvetica, Arial, Lucida, sans-serif;\\">Courses Director, Mentor &amp; Consulting Facial Cosmetic Surgeon, Stellar Aesthetics</span></p>","createdAt":"2022-12-23T17:11:53.050Z","updatedAt":"2023-01-01T10:11:57.297Z","publishedAt":"2022-12-23T17:11:55.204Z","img":{"data":{"id":69,"attributes":{"name":"sapna_sq.jpg","alternativeText":null,"caption":null,"width":341,"height":341,"formats":{"thumbnail":{"name":"thumbnail_sapna_sq.jpg","hash":"thumbnail_sapna_sq_36e5e3268f","ext":".jpg","mime":"image/jpeg","path":null,"width":156,"height":156,"size":6.11,"url":"/uploads/thumbnail_sapna_sq_36e5e3268f.jpg"}},"hash":"sapna_sq_36e5e3268f","ext":".jpg","mime":"image/jpeg","size":24.03,"url":"/uploads/sapna_sq_36e5e3268f.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-12-23T17:11:09.913Z","updatedAt":"2022-12-23T17:11:09.913Z"}}},"socialLinks":[{"id":1,"url":"https://www.facebook.com/drsapnavadera/","icon":"ic:baseline-facebook"},{"id":2,"url":"https://www.instagram.com/dr.sapnavadera/","icon":"ph:instagram-logo-fill"},{"id":3,"url":"https://www.linkedin.com/in/sapnavadera","icon":"mdi:linkedin"}]}},{"id":2,"attributes":{"name":"Dr. Piyush Tammewar","profession":"Dermatologist, M.B.B.S, D.D.V","description":"<p>Dermatologist, M.B.B.S, D.D.V &amp; Course Mentor, Stellar Aesthetics</p>","createdAt":"2022-12-23T17:12:28.773Z","updatedAt":"2022-12-23T17:12:31.856Z","publishedAt":"2022-12-23T17:12:31.849Z","img":{"data":{"id":70,"attributes":{"name":"dr-piyush.jpg","alternativeText":null,"caption":null,"width":1080,"height":1080,"formats":{"thumbnail":{"name":"thumbnail_dr-piyush.jpg","hash":"thumbnail_dr_piyush_958a435ada","ext":".jpg","mime":"image/jpeg","path":null,"width":156,"height":156,"size":4.74,"url":"/uploads/thumbnail_dr_piyush_958a435ada.jpg"},"small":{"name":"small_dr-piyush.jpg","hash":"small_dr_piyush_958a435ada","ext":".jpg","mime":"image/jpeg","path":null,"width":500,"height":500,"size":28.01,"url":"/uploads/small_dr_piyush_958a435ada.jpg"},"medium":{"name":"medium_dr-piyush.jpg","hash":"medium_dr_piyush_958a435ada","ext":".jpg","mime":"image/jpeg","path":null,"width":750,"height":750,"size":51.6,"url":"/uploads/medium_dr_piyush_958a435ada.jpg"},"large":{"name":"large_dr-piyush.jpg","hash":"large_dr_piyush_958a435ada","ext":".jpg","mime":"image/jpeg","path":null,"width":1000,"height":1000,"size":79.48,"url":"/uploads/large_dr_piyush_958a435ada.jpg"}},"hash":"dr_piyush_958a435ada","ext":".jpg","mime":"image/jpeg","size":90.54,"url":"/uploads/dr_piyush_958a435ada.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-12-23T17:11:10.203Z","updatedAt":"2022-12-23T17:11:10.203Z"}}},"socialLinks":[]}},{"id":3,"attributes":{"name":"Dr. Nihar Chandak","profession":"Laproscopic & Minimal Access Surgeon","description":"<p>Consultant General &amp; Laproscopic Surgeon, Stellar Aesthetics</p>","createdAt":"2022-12-23T17:13:06.988Z","updatedAt":"2022-12-23T17:13:09.133Z","publishedAt":"2022-12-23T17:13:09.125Z","img":{"data":{"id":68,"attributes":{"name":"nihar_sq.jpg","alternativeText":null,"caption":null,"width":341,"height":341,"formats":{"thumbnail":{"name":"thumbnail_nihar_sq.jpg","hash":"thumbnail_nihar_sq_492ccfef24","ext":".jpg","mime":"image/jpeg","path":null,"width":156,"height":156,"size":4.58,"url":"/uploads/thumbnail_nihar_sq_492ccfef24.jpg"}},"hash":"nihar_sq_492ccfef24","ext":".jpg","mime":"image/jpeg","size":14.18,"url":"/uploads/nihar_sq_492ccfef24.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-12-23T17:11:09.884Z","updatedAt":"2022-12-23T17:11:09.884Z"}}},"socialLinks":[]}},{"id":4,"attributes":{"name":"Dr. Sankarsan Choudhury","profession":"Cleft & Craniofacial Surgeon","description":"<p>Consultant Cleft &amp; Craniofacial Surgeon, Stellar Aesthetics</p>","createdAt":"2022-12-23T17:13:54.904Z","updatedAt":"2022-12-23T17:13:58.145Z","publishedAt":"2022-12-23T17:13:58.138Z","img":{"data":{"id":66,"attributes":{"name":"sankarshan_sq.jpg","alternativeText":null,"caption":null,"width":341,"height":341,"formats":{"thumbnail":{"name":"thumbnail_sankarshan_sq.jpg","hash":"thumbnail_sankarshan_sq_88d25ed63a","ext":".jpg","mime":"image/jpeg","path":null,"width":156,"height":156,"size":4.1,"url":"/uploads/thumbnail_sankarshan_sq_88d25ed63a.jpg"}},"hash":"sankarshan_sq_88d25ed63a","ext":".jpg","mime":"image/jpeg","size":13.32,"url":"/uploads/sankarshan_sq_88d25ed63a.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-12-23T17:11:09.512Z","updatedAt":"2022-12-23T17:11:09.512Z"}}},"socialLinks":[]}},{"id":5,"attributes":{"name":"Dr. Ashok Suthar","profession":"Hair Transplant Surgeon","description":"<p>Consulting Hair Transplant Surgeon &amp; Course Mentor, Stellar Aesthetics</p>","createdAt":"2022-12-23T17:14:33.957Z","updatedAt":"2022-12-23T17:14:35.863Z","publishedAt":"2022-12-23T17:14:35.858Z","img":{"data":{"id":65,"attributes":{"name":"ashok_sq.jpg","alternativeText":null,"caption":null,"width":341,"height":341,"formats":{"thumbnail":{"name":"thumbnail_ashok_sq.jpg","hash":"thumbnail_ashok_sq_fedaf3628b","ext":".jpg","mime":"image/jpeg","path":null,"width":156,"height":156,"size":3.97,"url":"/uploads/thumbnail_ashok_sq_fedaf3628b.jpg"}},"hash":"ashok_sq_fedaf3628b","ext":".jpg","mime":"image/jpeg","size":12.19,"url":"/uploads/ashok_sq_fedaf3628b.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-12-23T17:11:09.510Z","updatedAt":"2022-12-23T17:11:09.510Z"}}},"socialLinks":[]}},{"id":6,"attributes":{"name":"Dr. Chinmay Rao","profession":"Cranio Maxillofacial & Reconstructive Surgeon M.D.S [OMFS]","description":"<p>Cranio Maxillofacial &amp; Reconstructive Surgeon M.D.S [OMFS] &amp; Course Mentor, Stellar Aesthetics</p>","createdAt":"2022-12-23T17:15:03.400Z","updatedAt":"2022-12-23T17:15:06.093Z","publishedAt":"2022-12-23T17:15:06.087Z","img":{"data":{"id":67,"attributes":{"name":"dr-chimney-row.jpg","alternativeText":null,"caption":null,"width":771,"height":771,"formats":{"thumbnail":{"name":"thumbnail_dr-chimney-row.jpg","hash":"thumbnail_dr_chimney_row_e38e86f2b6","ext":".jpg","mime":"image/jpeg","path":null,"width":156,"height":156,"size":3.88,"url":"/uploads/thumbnail_dr_chimney_row_e38e86f2b6.jpg"},"medium":{"name":"medium_dr-chimney-row.jpg","hash":"medium_dr_chimney_row_e38e86f2b6","ext":".jpg","mime":"image/jpeg","path":null,"width":750,"height":750,"size":38.27,"url":"/uploads/medium_dr_chimney_row_e38e86f2b6.jpg"},"small":{"name":"small_dr-chimney-row.jpg","hash":"small_dr_chimney_row_e38e86f2b6","ext":".jpg","mime":"image/jpeg","path":null,"width":500,"height":500,"size":20.29,"url":"/uploads/small_dr_chimney_row_e38e86f2b6.jpg"}},"hash":"dr_chimney_row_e38e86f2b6","ext":".jpg","mime":"image/jpeg","size":40.86,"url":"/uploads/dr_chimney_row_e38e86f2b6.jpg","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-12-23T17:11:09.776Z","updatedAt":"2022-12-23T17:11:09.776Z"}}},"socialLinks":[]}}]'),n=t(9270),d=t(184),m=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.q,{children:(0,d.jsx)("title",{children:"Doctors"})}),(0,d.jsxs)(n.$0,{children:[(0,d.jsx)(n.X6,{text1:"Doctors",className:"mb-10"}),(0,d.jsx)("div",{className:"flex flex-wrap",children:r&&r.map((function(e,a){return(0,d.jsx)("div",{className:"lg:w-1/3 sm:w-1/2 w-full",children:(0,d.jsxs)("div",{className:"card sm:m-4 mb-4 sm:h-[550px] shrink-0",children:[(0,d.jsx)("div",{className:"img sm:h-[350px] h-[250px] w-full bg-gray-200",children:(0,d.jsx)("img",{src:s._+e.attributes.img.data.attributes.url,alt:"",className:"w-full h-full object-cover"})}),(0,d.jsxs)("div",{className:"caption mt-3",children:[(0,d.jsxs)("h5",{className:"text-lg font-medium",children:[(0,d.jsx)("strong",{children:e.attributes.name})," ",(0,d.jsx)("br",{}),e.attributes.profession," "]}),(0,d.jsx)("p",{className:"text-body",dangerouslySetInnerHTML:{__html:e.attributes.description}}),(0,d.jsx)("div",{className:"btns flex items-center text-3xl gap-1 text-gray-500 mt-3",children:e.attributes.socialLinks.map((function(e){return(0,d.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"text-h-primary transition",children:(0,d.jsx)(i.JO,{icon:e.icon})})}))})]})]})},a)}))})]})]})}},3197:function(e,a,t){t.d(a,{_:function(){return s}});var s="http://localhost:1337"}}]);
//# sourceMappingURL=53.5877f7b6.chunk.js.map