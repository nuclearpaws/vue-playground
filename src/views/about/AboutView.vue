<template>
  <div class="about">
    <h1>This is an about page</h1>
    <my-tab-control
      v-bind:tabs="tabs"
      v-bind:activeTab.sync="activeTab">
      <template slot="Data Set 1">
        <h2>Data Set 1</h2>
        <my-table v-bind:content="data1">
          <template v-slot:somethingElse="{ data }">
            <button v-on:click="coolAlertOrSomething(`${data.firstName} ${data.lastName}`)">{{data.something}}</button>
          </template>
        </my-table>
      </template>
      <template slot="Data Set 2">
        <h2>Data Set 2</h2>
        <my-table v-bind:content="data2">
          <template v-slot:lolwut="{ data }">
            <span class="red"><em><strong>{{data.lolwut}}</strong></em></span>
          </template>
          <template v-slot:actions="{ data }">
            <button v-on:click="coolAlertOrSomething(data.jobName)">{{data.lolwut}}</button>
          </template>
        </my-table>
      </template>
      <template slot="Data Set 3">
        <h2>Data Set 2</h2>
        <my-table v-bind:content="data3" />
      </template>
    </my-tab-control>
    <my-tab-control
      v-bind:tabs="tabs2"
      v-bind:activeTab.sync="activeTab2">
      <template slot="Cool Cool">
        <h1>Cool Cool!</h1>
      </template>
      <template slot="Less Cool">
        <h2>Less Cool :(</h2>
        <button v-on:click="coolAlertOrSomething('You saved or something, idk...')">Save</button>
      </template>
    </my-tab-control>
  </div>
</template>

<script>
import MyTabControl from '@/components/_generic/MyTabControl.vue';

export default {
  components: { MyTabControl },
  data() {
    return {
      activeTab: 'Data Set 1',
      tabs: [
        'Data Set 1',
        'Data Set 2',
        'Data Set 3',
      ],
      activeTab2: 'Cool Cool',
      tabs2: [
        'Cool Cool',
        'Less Cool',
      ],
      data1: [
        {
          firstName: 'Zbigniew',
          lastName: 'Pyszczuk',
          age: '28',
          something: 'kek',
          somethingElse: undefined,
          somethingEvenMoreElse: '456',
        },
        {
          firstName: 'Jay',
          lastName: 'I am sorry',
          age: '35',
          something: 'poggers',
          somethingElse: undefined,
          somethingEvenMoreElse: '123',
        },
      ],
      data2: [
        {
          jobName: 'Software Developer',
          salary: 'Clearly underpaid',
          lolwut: 'ikr!',
          actions: null,
        },
        {
          jobName: 'Chef',
          salary: 'cool af',
          lolwut: 'idk!',
          actions: null,
        },
      ],
      data3: [
        {
          column1: 'Row 1',
          column2: 'Some Text?',
        },
        {
          column1: 'Row 2',
          column2: 'Some More Text?',
        },
      ],
    };
  },
  methods: {
    coolAlertOrSomething(jobtitle) {
      console.log(jobtitle);
    },
  },
};
</script>

<style scoped>
.red {
  color:red;
}
</style>
