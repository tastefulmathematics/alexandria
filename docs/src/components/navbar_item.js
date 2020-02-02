let view = `
<a class="navbar-item">
  {{ item.title }}
</a>
`;


let model = {
  template: view,
  props: ["item"],
  data: function () {
    return {
    }
  }
}

Vue.component('navbar-item', model)
