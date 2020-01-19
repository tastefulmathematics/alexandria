import '/static_page/components/document_viewer.js';
import '/static_page/components/rote_learner.js';
import { completeProjectList } from '/static_page/data/project_list.js';

const view = `
<div>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu is-info">
      <div class="navbar-start is-info">
        <a class="navbar-item"  v-for="project in primaryProjectList" @click="setCurrentProject(project)">
          {{ project.title }}
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"  v-for="project in secondaryProjectList" @click="currentProject = project.key">
              {{ project.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <component v-bind:is="current" v-bind:project="currentProject"></component>
</div>
`

let model = {
  template: view,
  data: function () {
    return {
      currentProject: completeProjectList[0]
    }
  },
  computed: {
    primaryProjectList: function() {
      return completeProjectList;
    },
    secondaryProjectList: function() {
      return  [{key: "a", title: "A"}, {key: "b", title: "B"}]
    },
    current: function() {
      return this.currentProject.component
    }
  },
  methods: {
    setCurrentProject: function(project) {
      this.currentProject = project;
    }
  }
}

Vue.component('main-component', model)
