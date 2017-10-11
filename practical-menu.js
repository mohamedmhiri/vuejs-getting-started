Vue.component('moom-menu', {
  template: `
    <div class="row collapse">
      <div class="medium-3 columns">
        <ul class="vertical tabs" data-tabs id="example-tabs">
          <li class="firstTitleTab" @click="activeTab(1)">
            <a href="#">Tab 1</a>
          </li>
          <li class="secondTitleTab" @click="activeTab(2)">
            <a href="#">Tab 2</a>
          </li>
        </ul>
      </div>
      <div class="medium-9 columns">
        <div class="tabs-content" data-tabs-content="example-tabs">
          <div class="firstTabContent">
            <p>One</p>
            <p>Check me out! I'm a super cool Tab panel with text content!</p>
          </div>
          <div class="secondTabContent">
            <p>Two</p>
            <img class="thumbnail" src="http://i2.cdn.turner.com/cnnnext/dam/assets/160614135229-01-kepler-1647b-super-169.jpg">
          </div>
        </div>
      </div>
    </div>

    `,
  data() {
    return {
      firstTitleTab: 'tabs-title',
      secondTitleTab: 'tabs-title',
      firstTitleContent: 'tabs-panel',
      secondTitleContent: 'tabs-panel'
    }
  },
  methods: {
    activeTab(data) {
      switch (data) {
        case 1:
          this.firstTitleTitle = 'tabs-title is-active'
          this.firstTitleContent = 'tabs-panel is-active'
          this.secondTitleTab = 'tabs-title'
          this.secondTitleContent = 'tabs-panel'
          break;
        case 2:
          this.secondTitleTab = 'tabs-title is-active'
          this.secondTitleContent = 'tabs-panel is-active'
          this.firstTitleTitle = 'tabs-title'
          this.firstTitleContent = 'tabs-panel'
          break;
        default:
          break;
      }
    }
  }
})

new Vue({
  el: "#root"
})