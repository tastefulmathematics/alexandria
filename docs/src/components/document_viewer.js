const view = `
<div class="tile is-ancestor">
  <div class="tile">
    <div class="tile is-vertical">
      <div class="tile control has-icons-left">
        <input class="input" type="text" placeholder="Search">
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </div>
      <div class="tile" v-for="document in project.documentList">
        <div class="tile is-parent">
          <a class="tile is-child box" @click="currentDocument = document">
          <p class="card-header-title">
            {{ document.title}}
          </p>
          {{ document.summary }}
          </a>
        </div>
      </div>
    </div>
    <div class="tile is-10 is-vertical">
      <div class="tile">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">{{ currentDocument.title }}</p>
            <p class="subtitle">{{ currentDocument.description }}</p>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <iframe v-if="documentLocation" :src="documentLocation"></iframe>
        </article>
      </div>
    </div>
  </div>
</div>
`;

let model = {
  template: view,
  props: ["project"],
  data: function () {
    return {
      currentDocument: this.project.documentList[0] || {location: false},
      // documentLocation: "https://www.w3schools.com"
    }
  },
  computed: {
    documentLocation: function() {
      if (false){
        return false;
      }
      else{
        return "../../documents/".concat(this.currentDocument.location);
      }
    }
  },
  methods: {

  }

}

Vue.component('document-viewer', model)
