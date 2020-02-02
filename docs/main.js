!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){let n={template:'\n<div class="tile is-ancestor">\n  <div class="tile">\n    <div class="tile is-vertical">\n      <div class="tile control has-icons-left">\n        <input class="input" type="text" placeholder="Search">\n        <span class="icon is-left">\n          <i class="fas fa-search" aria-hidden="true"></i>\n        </span>\n      </div>\n      <div class="tile" v-for="document in project.document_list">\n        <div class="tile is-parent">\n          <a class="tile is-child box" @click="currentDocument = document">\n          <p class="card-header-title">\n            {{ document.title}}\n          </p>\n          {{ document.summary }}\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class="tile is-10 is-vertical">\n      <div class="tile">\n        <div class="tile is-parent">\n          <article class="tile is-child box">\n            <p class="title">{{ currentDocument.title }}</p>\n            <p class="subtitle">{{ currentDocument.description }}</p>\n          </article>\n        </div>\n      </div>\n      <div class="tile is-parent">\n        <article class="tile is-child box">\n          <p class="title">Eight</p>\n          <p class="subtitle">Subtitle</p>\n        </article>\n      </div>\n    </div>\n  </div>\n</div>\n',props:["project"],data:function(){return{currentDocument:this.project[0]||{}}},methods:{}};Vue.component("document-viewer",n)},function(t,e){let n={template:'\n<div class="tile is-ancestor">\n  <div class="tile is-vertical">\n    <div class="tile">\n      <div class="tile is-parent">\n        <article class="tile is-child box">\n          <p class="title">Options</p>\n          <p class="subtitle">{{ project.title }}</p>\n          <div class="content">\n          </div>\n        </article>\n      </div>\n      <div class="tile is-10 is-vertical">\n        <div class="tile">\n          <div class="tile is-parent">\n            <article class="tile is-child box">\n              <p class="title">Progress</p>\n              <p class="subtitle">Subtitle</p>\n            </article>\n          </div>\n        </div>\n        <div class="tile is-parent">\n          <article class="tile is-child box">\n            <p class="title">Workspace</p>\n            <p class="subtitle">Subtitle</p>\n          </article>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n',data:function(){return{}},props:["project"]};Vue.component("rote-learner",n)},function(t,e,n){"use strict";n.r(e);n(0),n(1);const i=[{title:"Fermat",summary:"How to prove Fermat's Last Theorem",description:"This is a long description",location:"fermats_last_theorem.html"},{title:"Fermat",summary:"How to prove Fermat's Last Theorem",description:"This is b long description",location:"fermats_last_theorem.html"},{title:"Fermat",summary:"How to prove Fermat's Last Theorem",description:"This is c long description",location:"fermats_last_theorem.html"},{title:"Fermat",summary:"How to prove Fermat's Last Theorem",description:"This is d long description",location:"fermats_last_theorem.html"},{title:"Fermat",summary:"How to prove Fermat's Last Theorem",description:"This is e long description",location:"fermats_last_theorem.html"},{title:"Fermat",summary:"How to prove Fermat's Last Theorem",description:"This is f long description",location:"fermats_last_theorem.html"}],r=[{key:"tastefulmathematics",title:"Tasteful Mathematics",component:"document-viewer",created_ts:"20200118",status:"primary",document_list:i,directory:"./../tasteful_mathematics/"},{key:"highlytechnicaldata",title:"Highly Technical Data",component:"document-viewer",created_ts:"20200118",status:"primary",document_list:["third"],directory:"./../highly_technical_data/"},{key:"basic",title:"b.ASIC",component:"document-viewer",created_ts:"20200118",status:"primary",document_list:["second"],directory:"./../basic/"},{key:"rotelearning",title:"Rote Learning",component:"rote-learner",created_ts:"20200118",status:"primary",document_list:i}];let a={template:'\n<div>\n  <nav class="navbar is-info" role="navigation" aria-label="main navigation">\n    <div class="navbar-brand">\n\n      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">\n        <span aria-hidden="true"></span>\n        <span aria-hidden="true"></span>\n        <span aria-hidden="true"></span>\n      </a>\n    </div>\n\n    <div class="navbar-menu is-info">\n      <div class="navbar-start is-info">\n        <a class="navbar-item"  v-for="project in primaryProjectList" @click="setCurrentProject(project)">\n          {{ project.title }}\n        </a>\n\n        <div class="navbar-item has-dropdown is-hoverable">\n          <a class="navbar-link">\n            More\n          </a>\n\n          <div class="navbar-dropdown">\n            <a class="navbar-item"  v-for="project in secondaryProjectList" @click="currentProject = project.key">\n              {{ project.title }}\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nav>\n  <component v-bind:is="current" v-bind:project="currentProject"></component>\n</div>\n',data:function(){return{currentProject:r[0]}},computed:{primaryProjectList:function(){return r},secondaryProjectList:function(){return[{key:"a",title:"A"},{key:"b",title:"B"}]},current:function(){return this.currentProject.component}},methods:{setCurrentProject:function(t){this.currentProject=t}}};Vue.component("main-component",a);new Vue({el:"#app",data:function(){return{message:"Hello Friend!"}}})}]);