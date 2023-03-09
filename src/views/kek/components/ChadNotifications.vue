<template>
  <div>
    <div
      v-for="(notification, index) in value"
      v-bind:key=index
      v-bind:class="['Notification', ...notification.type]">
      <span>{{notification.message}}</span>
      <a href="#" v-on:click="Dismiss(notification)" v-if="notification.dismissable">X</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array[Object],
      default: () => [],
      required: true,
    },
  },
  data() {
    const data = {
    };
    return data;
  },
  methods: {
    Dismiss(notification) {
      const newValue = this.value.filter((n) => n !== notification);
      this.$emit('input', newValue);
    },
  },
};
</script>

<style>
.Notification {
  height: 17px;
  width: 500px;
  padding: 5px;
  border-radius: 10px;
  margin: 5px auto;
  color: white;
}

.Notification a {
  display: block;
  widows: 20px;
  float: right;
  color: white;
  text-decoration: none;
  font-style: normal;
  font-weight: bolder;
}

.Notification a:hover {
  color: gray;
}

.Info {
  background: blue;
}

.Success {
  background: green;
}

.Warning {
  background: orange;
}

.Error {
  background: red;
}
</style>
