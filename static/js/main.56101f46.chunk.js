(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),l=n.n(r),c=n(6),i=n(7),s=n(5),u=n(1),m=n(2),f=n(4),h=n(3),d=(n(16),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"ToDo List"),o.a.createElement("h2",null,t," more to do, ",n," done"))}),g=n(10),p=(n(17),function(e){var t=e.important,n=e.done,a=e.label,r=e.onToggleImportant,l=e.onToggleDone,c=e.onDelete,i="todo-list-item";return t&&(i+=" important"),n&&(i+=" done"),o.a.createElement("span",{className:i},o.a.createElement("span",{className:"todo-list-item-label",onClick:l},a),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:r},o.a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 16 16",className:"bi bi-exclamation-triangle",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"}),o.a.createElement("path",{d:"M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"}))),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:c},o.a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 16 16",className:"bi bi-trash",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}))))}),b=(n(18),function(e){var t=e.items,n=e.onToggleImportant,a=e.onToggleDone,r=e.onDelete,l=t.map((function(e){var t=e.id,l=Object(g.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(p,Object.assign({},l,{onToggleImportant:function(){return n(t)},onToggleDone:function(){return a(t)},onDelete:function(){return r(t)}})))}));return o.a.createElement("ul",{className:"todo-list list-group"},l)}),v=(n(19),function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={term:""},e.onTermChange=function(t){var n=e.props.onSearchChange,a=void 0===n?function(){}:n;e.setState({term:t.target.value}),a(t.target.value.trim())},e}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"Type to search",value:this.state.term,onChange:this.onTermChange})}}]),n}(a.Component)),E=function(e){var t=e.filter,n=e.onFilterChange,a=void 0===n?function(){}:n,r=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}].map((function(e){var n=e.name,r=e.label,l="btn "+(n===t?"btn-info":"btn-outline-secondary");return o.a.createElement("button",{key:n,type:"button",onClick:function(){return a(n)},className:l},r)}));return o.a.createElement("div",{className:"btn-group item-status-filter"},r)},y=(n(20),function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={label:""},e.onLabelChange=function(t){e.setState({label:t.target.value})},e.onSubmit=function(t){t.preventDefault();var n=e.props.onItemAdded,a=void 0===n?function(){}:n,o=e.state.label;e.setState({label:""}),o.trim()&&a(o)},e}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{className:"item-add-form d-flex ",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control new-todo-label",value:this.state.label,onChange:this.onLabelChange,placeholder:"What needs to be done?"}),o.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"Add"))}}]),n}(a.Component)),C=(n(21),function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).maxId=100,e.state={items:[e.createItem("Drink Tea"),e.createItem("Learn React"),e.createItem("Make App")],filter:"all",search:""},e.onItemAdded=function(t){e.setState((function(n){var a=e.createItem(t);return{items:[].concat(Object(s.a)(n.items),[a])}}))},e.toggleProperty=function(e,t,n){var a=e.findIndex((function(e){return e.id===t})),o=!e[a][n],r=Object(i.a)(Object(i.a)({},e[a]),{},Object(c.a)({},n,o));return[].concat(Object(s.a)(e.slice(0,a)),[r],Object(s.a)(e.slice(a+1)))},e.onToggleDone=function(t){e.setState((function(n){return{items:e.toggleProperty(n.items,t,"done")}}))},e.onToggleImportant=function(t){e.setState((function(n){return{items:e.toggleProperty(n.items,t,"important")}}))},e.onDelete=function(t){e.setState((function(e){var n=e.items.findIndex((function(e){return e.id===t}));return{items:[].concat(Object(s.a)(e.items.slice(0,n)),Object(s.a)(e.items.slice(n+1)))}}))},e.onFilterChange=function(t){e.setState({filter:t})},e.onSearchChange=function(t){e.setState({search:t})},e}return Object(m.a)(n,[{key:"createItem",value:function(e){return{id:++this.maxId,label:e,important:!1,done:!1}}},{key:"filterItems",value:function(e,t){return"all"===t?e:"active"===t?e.filter((function(e){return!e.done})):"done"===t?e.filter((function(e){return e.done})):void 0}},{key:"searchItems",value:function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1}))}},{key:"render",value:function(){var e=this.state,t=e.items,n=e.filter,a=e.search,r=t.filter((function(e){return e.done})).length,l=t.length-r,c=this.searchItems(this.filterItems(t,n),a);return o.a.createElement("div",{className:"todo-app"},o.a.createElement(d,{toDo:l,done:r}),o.a.createElement("div",{className:"search-panel d-flex"},o.a.createElement(v,{onSearchChange:this.onSearchChange}),o.a.createElement(E,{filter:n,onFilterChange:this.onFilterChange})),o.a.createElement(b,{items:c,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone,onDelete:this.onDelete}),o.a.createElement(y,{onItemAdded:this.onItemAdded}))}}]),n}(a.Component));n(22);l.a.render(o.a.createElement(C,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.56101f46.chunk.js.map