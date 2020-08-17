(this.webpackJsonpmanagement_dashboard=this.webpackJsonpmanagement_dashboard||[]).push([[0],{231:function(e){e.exports=JSON.parse('{"steven":"password"}')},265:function(e,t,n){e.exports=n(457)},274:function(e,t,n){},457:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(29),o=n.n(c),s=n(68),u=n(17),i=(n(274),n(26)),l=n(21),p=n(475),m=n(15),d=n(31),b=n.n(d),f=b.a.object({username:b.a.string().alphanum().max(16).min(2).required(),password:b.a.string().max(32).min(6).required()}),h=n(231),v="SET_AUTH",g=h,E=function(e,t,n){var r=f.validate({username:e,password:t}).error;return!r||(n({type:v,auth:{status:"unauthorized"}}),m.b.error(r.message),!1)};var w=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth}));return a.a.createElement(p.a,null,a.a.createElement(p.a.Item,{header:!0},"User Management"),a.a.createElement(p.a.Menu,{position:"right"},"authorized"===t.status?a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a.Item,{name:"Users",icon:"users",as:i.b,to:"/users"}),a.a.createElement(p.a.Item,{name:"Logout",icon:"sign-out",onClick:function(){!function(e){e({type:v,auth:{status:"unauthorized"}}),e({type:"CLEAR_USERS"}),e({type:"CLEAR_POSTS"}),e({type:"CLEAR_COMMENTS"})}(e)}})):a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a.Item,{name:"Login",icon:"sign-in",as:i.b,to:"/login"}),a.a.createElement(p.a.Item,{name:"Register",icon:"signup",as:i.b,to:"/register"}))))},O=n(467),y=(n(381),n(468)),j=n(474),S=n(33),x=function(e){var t=Object(r.useState)(e),n=Object(S.a)(t,2),a=n[0],c=n[1];return{props:{value:a,onChange:function(e){c(e.target.value)}},reset:function(){c("")}}};function k(){var e=Object(u.b)(),t=x(""),n=x(""),r=Object(l.g)(),c=Object(u.c)((function(e){return e.auth}));return a.a.createElement(y.a,null,a.a.createElement(y.a.Field,null,a.a.createElement("label",null,"Username"),a.a.createElement(y.a.Input,t.props)),a.a.createElement(y.a.Field,null,a.a.createElement("label",null,"Password"),a.a.createElement(y.a.Input,Object.assign({type:"password"},n.props))),a.a.createElement(j.a,{loading:"loading"===c.status,onClick:function(){e({type:v,auth:{status:"loading"}}),function(e,t,n){if(!E(e,t,n))return!1;var r=g[e];return r?r!==t?(m.b.error("Wrong password"),n({type:v,auth:{status:"unauthorized"}}),!1):(n({type:v,auth:{status:"authorized"}}),!0):(m.b.error("User doesn't exist"),n({type:v,auth:{status:"unauthorized"}}),!1)}(t.props.value,n.props.value,e)&&r.push("/users")}},"Login"))}function T(){var e=Object(u.b)(),t=x(""),n=x(""),r=Object(l.g)(),c=Object(u.c)((function(e){return e.auth}));return a.a.createElement(y.a,null,a.a.createElement(y.a.Field,null,a.a.createElement("label",null,"Username"),a.a.createElement(y.a.Input,t.props)),a.a.createElement(y.a.Field,null,a.a.createElement("label",null,"Password"),a.a.createElement(y.a.Input,Object.assign({type:"password"},n.props))),a.a.createElement(j.a,{loading:"loading"===c.status,onClick:function(){e({type:v,auth:{status:"loading"}}),function(e,t,n){return!!E(e,t,n)&&(g[e]?(m.b.error("User already exists"),n({type:v,auth:{status:"unauthorized"}}),!1):(n({type:v,auth:{status:"authorized"}}),!0))}(t.props.value,n.props.value,e)&&r.push("/users")}},"Register"))}var _=n(255),C=n(74),I=n(8),P=n.n(I),L=n(18),M=n(159),U="https://jsonplaceholder.typicode.com",A=function(){var e=Object(L.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(U).concat(t));case 3:if(!(n=e.sent).ok){e.next=8;break}return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),m.b.error("Something went wrong when trying to call the api - get");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(L.a)(P.a.mark((function e(t,n){var r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(U).concat(t),{method:"POST",body:JSON.stringify(Object(M.a)({},n)),headers:{"Content-Type":"application/json"}});case 3:if(!(r=e.sent).ok){e.next=8;break}return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),m.b.error("Something went wrong when trying to call the api - post");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(L.a)(P.a.mark((function e(t,n){var r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(U,"/").concat(n,"/").concat(t),{method:"DELETE"});case 3:if(!(r=e.sent).ok){e.next=8;break}return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),m.b.error("Something went wrong when trying to call the api - post");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(L.a)(P.a.mark((function e(t,n){var r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(U).concat(t),{method:"PUT",body:JSON.stringify(Object(M.a)({},n)),headers:{"Content-Type":"application/json"}});case 3:if(!(r=e.sent).ok){e.next=8;break}return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),m.b.error("Something went wrong when trying to call the api - put");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),B=n(244),D=n.n(B),F=function(e){var t=D()(e);return"https://www.gravatar.com/avatar/".concat(t)},q=function(){var e=Object(L.a)(P.a.mark((function e(t){var n,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A("/users");case 3:n=e.sent,r=n.map((function(e){return e.avatar=F(e.email),e})),t({type:"SET_USERS",users:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m.b.error("Something went wrong when trying to get users");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(L.a)(P.a.mark((function e(t,n,r){var a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(t,"users");case 3:a=n.filter((function(e){return e.id!==t})),r({type:"SET_USERS",users:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m.b.error("Something went wrong when trying to delete the user");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r){return e.apply(this,arguments)}}(),H=function(){var e=Object(L.a)(P.a.mark((function e(t,n,r){var a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N("/users",t);case 3:(a=e.sent).avatar=F(a.email),n.unshift(a),c=n,r({type:"SET_USERS",users:Object(C.a)(c)}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),m.b.error("Something went wrong when trying to add a user");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n,r){return e.apply(this,arguments)}}(),V=function(){var e=Object(L.a)(P.a.mark((function e(t,n,r){var a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z("/users/".concat(t.id),t);case 3:(a=e.sent).avatar=F(a.email),c=n.find((function(e){return e.id===t.id})),Object.assign(c,a),r({type:"SET_USERS",users:Object(C.a)(n)}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),m.b.error("Something went wrong when trying to update a user");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n,r){return e.apply(this,arguments)}}(),X=function(){var e=Object(L.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A("/posts");case 3:n=e.sent,t({type:"SET_POSTS",posts:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m.b.error("Something went wrong when trying to get posts");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(L.a)(P.a.mark((function e(t,n,r){var a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(t,"posts");case 3:a=n.filter((function(e){return e.id!==t})),r({type:"SET_POSTS",posts:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m.b.error("Something went wrong when trying to delete the post");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r){return e.apply(this,arguments)}}(),W=function(){var e=Object(L.a)(P.a.mark((function e(t,n,r){var a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N("/posts",t);case 3:a=e.sent,n.unshift(a),c=n,r({type:"SET_POSTS",posts:Object(C.a)(c)}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),m.b.error("Something went wrong when trying to add a post");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,r){return e.apply(this,arguments)}}(),$=function(){var e=Object(L.a)(P.a.mark((function e(t,n,r){var a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z("/posts/".concat(t.id),t);case 3:a=e.sent,c=n.find((function(e){return e.id===t.id})),Object.assign(c,a),r({type:"SET_POSTS",posts:Object(C.a)(n)}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),m.b.error("Something went wrong when trying to update a post");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,r){return e.apply(this,arguments)}}(),K=function(){var e=Object(L.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A("/comments");case 3:n=e.sent,t({type:"SET_COMMENTS",comments:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m.b.error("Something went wrong when trying to get comments");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();function Q(e){var t=e.component,n=Object(_.a)(e,["component"]),c=Object(u.b)(),o=Object(u.b)(),s=Object(u.b)(),i=Object(u.c)((function(e){return e.auth}));return Object(r.useEffect)((function(){q(c),X(o),K(s)}),[c,o,s]),a.a.createElement(l.b,Object.assign({},n,{render:function(e){return"authorized"===i.status?a.a.createElement(t,e):a.a.createElement(l.a,{to:"/login"})}}))}var Y=n(472),Z=n(476),ee=n(114),te=n(469);function ne(e){var t=e.triggerProps,n=e.inputs,r=e.submitProps,c=e.update,o=e.modalState,s=e.loadingState,u=e.title;return a.a.createElement(te.a,{trigger:a.a.createElement(j.a,Object.assign({style:{marginBottom:10},onClick:function(){o.setOpenModal(!0)}},t)),closeOnDimmerClick:!1,closeIcon:!1,closeOnEscape:!1,open:o.openModal},a.a.createElement(te.a.Header,null,u),a.a.createElement(te.a.Content,null,a.a.createElement(y.a,null,n.map((function(e){return"field"===e.type?a.a.createElement(y.a.Field,{key:e.id},a.a.createElement("label",null,e.title),a.a.createElement(y.a.Input,e.props)):"textarea"===e.type?a.a.createElement(y.a.Field,{key:e.id},a.a.createElement("label",null,e.title),a.a.createElement(y.a.TextArea,e.props)):void 0})),a.a.createElement(j.a,Object.assign({loading:s.isLoading,onClick:c},r,{positive:!0})),a.a.createElement(j.a,{disabled:s.isLoading,onClick:function(){o.setOpenModal(!1)},icon:"cancel",content:"Cancel",negative:!0}))))}var re=b.a.object({id:b.a.number(),userId:b.a.number(),title:b.a.string().required(),body:b.a.string().required()});function ae(e){var t=Object(u.b)(),n=Object(u.c)((function(e){return e.posts})),c=Object(r.useState)(!1),o=Object(S.a)(c,2),s=o[0],i=o[1],l=Object(r.useState)(!1),p=Object(S.a)(l,2),d=p[0],b=p[1],f=x(""),h=x(""),v=function(){var r=Object(L.a)(P.a.mark((function r(){var a,c,o;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a={title:f.props.value,body:h.props.value,userId:e.userId},c=re.validate(a),!(o=c.error)){r.next=5;break}return m.b.error(o.message),r.abrupt("return",!1);case 5:return i(!0),r.prev=6,r.next=9,W(a,n,t);case 9:return i(!1),b(!1),f.reset(),h.reset(),r.abrupt("return",!0);case 16:return r.prev=16,r.t0=r.catch(6),i(!1),m.b.error("Something went wrong when trying to add a post"),r.abrupt("return",!1);case 21:case"end":return r.stop()}}),r,null,[[6,16]])})));return function(){return r.apply(this,arguments)}}();return a.a.createElement(ne,{title:"Add post",triggerProps:{icon:"add",content:"Add post",color:"green"},inputs:[{id:0,type:"field",title:"Title",props:f.props},{id:1,type:"textarea",title:"Body",props:h.props}],submitProps:{icon:"add",content:"Add post"},update:v,loadingState:{isLoading:s,setIsLoading:i},modalState:{openModal:d,setOpenModal:b}})}function ce(e){var t=Object(u.b)(),n=Object(u.c)((function(e){return e.posts})),c=Object(r.useState)(!1),o=Object(S.a)(c,2),s=o[0],i=o[1],l=Object(r.useState)(!1),p=Object(S.a)(l,2),d=p[0],b=p[1],f=x(e.post.title),h=x(e.post.body),v=function(){var r=Object(L.a)(P.a.mark((function r(){var a,c,o;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a={id:e.post.id,title:f.props.value,body:h.props.value,userId:e.post.userId},c=re.validate(a),!(o=c.error)){r.next=5;break}return m.b.error(o.message),r.abrupt("return",!1);case 5:return i(!0),r.prev=6,r.next=9,$(a,n,t);case 9:return i(!1),b(!1),r.abrupt("return",!0);case 14:return r.prev=14,r.t0=r.catch(6),i(!1),m.b.error("Something went wrong when trying to add a post"),r.abrupt("return",!1);case 19:case"end":return r.stop()}}),r,null,[[6,14]])})));return function(){return r.apply(this,arguments)}}();return a.a.createElement(ne,{title:"Edit post",triggerProps:{icon:"edit",content:"Edit post",color:"yellow"},inputs:[{id:0,type:"field",title:"Title",props:f.props},{id:1,type:"textarea",title:"Body",props:h.props}],submitProps:{icon:"edit",content:"Edit post"},update:v,loadingState:{isLoading:s,setIsLoading:i},modalState:{openModal:d,setOpenModal:b}})}function oe(e){var t=e.match.params.id,n=Number(t),r=Object(u.b)(),c=Object(ee.a)((function(e){return e.posts}),(function(e){return e.filter((function(e){return e.userId===n}))})),o=Object(u.c)(c),s=function(){var e=Object(L.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G(t,o,r);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),m.b.error("There was an issue trying to delete the user");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(Y.a.Group,{divided:!0},a.a.createElement(j.a,{icon:"arrow left",as:i.b,to:"/users",content:"Back to Users",style:{marginBottom:10}}),a.a.createElement(Z.a,{as:"h3"},"Posts"),a.a.createElement(ae,{userId:n}),o.map((function(e){return a.a.createElement(Y.a,{key:e.id},a.a.createElement(Y.a.Content,{verticalAlign:"middle"},a.a.createElement(Y.a.Header,null,e.title),a.a.createElement(Y.a.Description,null,e.body),a.a.createElement(Y.a.Extra,null,a.a.createElement(j.a,{icon:"comments",content:"View comments",as:i.b,to:"/comments/".concat(e.id)}),a.a.createElement(ce,{post:e}),a.a.createElement(j.a,{style:{marginTop:5},color:"red",onClick:function(){return s(e.id)},icon:"remove",content:"Delete"}))))})),0===o.length&&a.a.createElement("p",null,"No posts"))}var se=n(75);function ue(){return a.a.createElement(Z.a,{as:"h2",textAlign:"center",icon:!0},a.a.createElement(se.a,{name:"settings"}),"404",a.a.createElement(Z.a.Subheader,null,"Page not found"))}var ie=n(471);function le(e){var t=e.match.params.id,n=Number(t),r=Object(l.g)(),c=Object(ee.a)((function(e){return e.comments}),(function(e){return e.filter((function(e){return e.postId===n}))})),o=Object(u.c)(c);return a.a.createElement(ie.a.Group,null,a.a.createElement(j.a,{icon:"arrow left",onClick:function(){r.goBack()},content:"Back to Posts",style:{marginBottom:10}}),a.a.createElement(Z.a,{as:"h3",dividing:!0},"Comments"),o.map((function(e){return a.a.createElement(ie.a,{key:e.id},a.a.createElement(ie.a.Avatar,{src:F(e.email)}),a.a.createElement(ie.a.Content,null,a.a.createElement(ie.a.Author,null,e.email),a.a.createElement(ie.a.Text,null,e.body)))})),0===o.length&&a.a.createElement("p",null,"No comments"))}var pe=n(473),me=n(254),de=b.a.object({id:b.a.number(),name:b.a.string().min(2).max(32).required(),email:b.a.string().email({minDomainSegments:2,tlds:{allow:["com","net","biz","tv","info","ca","org","me","io"]}}).required()});function be(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.users})),n=Object(r.useState)(!1),c=Object(S.a)(n,2),o=c[0],s=c[1],i=Object(r.useState)(!1),l=Object(S.a)(i,2),p=l[0],d=l[1],b=x(""),f=x(""),h=function(){var n=Object(L.a)(P.a.mark((function n(){var r,a,c;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r={name:b.props.value,email:f.props.value},a=de.validate(r),!(c=a.error)){n.next=5;break}return m.b.error(c.message),n.abrupt("return",!1);case 5:return s(!0),n.prev=6,n.next=9,H(r,t,e);case 9:return s(!1),d(!1),b.reset(),f.reset(),n.abrupt("return",!0);case 16:return n.prev=16,n.t0=n.catch(6),s(!1),m.b.error("Something went wrong when trying to add a user"),n.abrupt("return",!1);case 21:case"end":return n.stop()}}),n,null,[[6,16]])})));return function(){return n.apply(this,arguments)}}();return a.a.createElement(ne,{title:"Add user",triggerProps:{icon:"add user",content:"Add user",color:"green"},inputs:[{id:0,type:"field",title:"Name",props:b.props},{id:1,type:"field",title:"Email",props:f.props}],submitProps:{icon:"add user",content:"Add user"},update:h,loadingState:{isLoading:o,setIsLoading:s},modalState:{openModal:p,setOpenModal:d}})}function fe(e){var t=e.user,n=Object(u.b)(),c=Object(u.c)((function(e){return e.users})),o=Object(r.useState)(!1),s=Object(S.a)(o,2),i=s[0],l=s[1],p=Object(r.useState)(!1),d=Object(S.a)(p,2),b=d[0],f=d[1],h=x(t.name),v=x(t.email),g=function(){var e=Object(L.a)(P.a.mark((function e(){var r,a,o;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={id:t.id,name:h.props.value,email:v.props.value},a=de.validate(r),!(o=a.error)){e.next=5;break}return m.b.error(o.message),e.abrupt("return",!1);case 5:return l(!0),e.prev=6,e.next=9,V(r,c,n);case 9:return l(!1),f(!1),e.abrupt("return",!0);case 14:return e.prev=14,e.t0=e.catch(6),l(!1),m.b.error("Something went wrong when trying to update a user"),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(ne,{title:"Update user",triggerProps:{icon:"edit",content:"Edit user",color:"yellow"},inputs:[{id:0,type:"field",title:"Name",props:h.props},{id:1,type:"field",title:"Email",props:v.props}],submitProps:{icon:"add user",content:"Update user"},update:g,loadingState:{isLoading:i,setIsLoading:l},modalState:{openModal:b,setOpenModal:f}})}function he(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.users})),n=function(){var n=Object(L.a)(P.a.mark((function n(r){return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,J(r,t,e);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),m.b.error("There was an issue trying to delete the user");case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e){return n.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement(Z.a,{dividing:!0,as:"h2"},"Users"),a.a.createElement(be,null),a.a.createElement(pe.a.Group,null,t.map((function(e){return a.a.createElement(pe.a,{key:e.id},a.a.createElement(me.a,{src:e.avatar,wrapped:!0,ui:!1}),a.a.createElement(pe.a.Content,null,a.a.createElement(pe.a.Header,null,e.name),a.a.createElement(pe.a.Meta,null,a.a.createElement("span",null,e.email))),a.a.createElement(pe.a.Content,{extra:!0},a.a.createElement(j.a,{as:i.b,to:"/posts/".concat(e.id),content:"View posts",icon:"list"}),a.a.createElement(fe,{user:e}),a.a.createElement(j.a,{style:{marginTop:5},color:"red",onClick:function(){return n(e.id)},icon:"remove",content:"Delete"})))})),0===t.length&&a.a.createElement("p",null,"No users")))}var ve=function(){return a.a.createElement(O.a,null,a.a.createElement(m.a,null),a.a.createElement(l.d,null,a.a.createElement(l.b,{exect:!0,path:"/login",component:k}),a.a.createElement(l.b,{exect:!0,path:"/register",component:T}),a.a.createElement(Q,{exect:!0,path:"/users",component:he}),a.a.createElement(Q,{exect:!0,path:"/posts/:id",component:oe}),a.a.createElement(Q,{exect:!0,path:"/comments/:id",component:le}),a.a.createElement(Q,{path:"/",to:"/users"}),a.a.createElement(l.b,{component:ue})))};var ge=function(){return a.a.createElement(i.a,{basename:""},a.a.createElement(w,null),a.a.createElement(l.d,null,a.a.createElement(l.b,{component:ve})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(456);var Ee={status:"unauthorized"},we=[],Oe=[],ye=[],je=Object(s.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return t.auth;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS":return t.users;case"CLEAR_USERS":return we;default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POSTS":return t.posts;case"CLEAR_POSTS":return Oe;default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COMMENTS":return t.comments;case"CLEAR_COMMENTS":return ye;default:return e}}}),Se=Object(s.c)(je,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(a.a.createElement(u.a,{store:Se},a.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[265,1,2]]]);
//# sourceMappingURL=main.3b0a3a51.chunk.js.map