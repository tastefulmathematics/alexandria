const view = `
<div class="tile is-ancestor">
  <div class="tile is-vertical">
    <div class="tile">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Options</p>
          <p class="subtitle">{{ project.title }}</p>
          <div class="content">
          </div>
        </article>
      </div>
      <div class="tile is-10 is-vertical">
        <div class="tile">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Progress</p>
              <p class="subtitle">Subtitle</p>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Workspace</p>
            <p class="subtitle">Subtitle</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</div>
`;

let model = {
  template: view,
  data: function () {
    return {}
  },
  props: ["project"]
}

Vue.component('rote-learner', model)
