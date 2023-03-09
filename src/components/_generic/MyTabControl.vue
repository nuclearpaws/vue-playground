<template>
  <div>
    <ul>
      <li
        v-for="tab, index in tabs"
        v-bind:key="index">
        <a v-bind:class="tab === activeTab ? 'active-tab' : ''" href="#" v-on:click="changeTab(tab)">
          <span>{{ tab }}</span>
        </a>
      </li>
    </ul>
    <div
      v-for="tab, index in tabs"
      v-bind:key="index">
      <slot
        v-bind:name="tab"
        v-if="tab === activeTab">
        <span>Content for tab {{ tab }}.</span>
      </slot>
    </div>
    <button
      v-if="activeTab !== tabs[0]"
      v-on:click="previousTab()">
      Previous Tab
    </button>
    <button
      v-if="activeTab !== tabs[tabs.length-1]"
      v-on:click="nextTab()">
      Next Tab
    </button>
  </div>
</template>

<script>
export default {
  props: {
    activeTab: {
      type: String,
      required: true,
    },
    tabs: {
      type: String(Array),
      required: true,
    },
  },
  methods: {
    changeTab(tab) {
      this.$emit('update:activeTab', tab);
    },
    previousTab() {
      const previousTabIndex = this.tabs.indexOf(this.activeTab) - 1;
      const previousTab = this.tabs[previousTabIndex];
      this.changeTab(previousTab);
    },
    nextTab() {
      const previousTabIndex = this.tabs.indexOf(this.activeTab) + 1;
      const previousTab = this.tabs[previousTabIndex];
      this.changeTab(previousTab);
    },
  },
};
</script>

<style>
.active-tab {
  color: red;
}
</style>
