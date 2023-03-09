<!-- eslint-disable -->
<template>
  <div class="kek">
    <h1>KEK</h1>
    <chad-notifications v-model="notifications" />
    <form v-on:submit="AddNotification($event)">
      <label>Type:</label>
      <chad-drop-down v-model="type" v-bind:options="types" />
      <br />
      <label>Message:</label>
      <input v-model="message" type="text" />
      <br />
      <label>Make Dismissable:</label>
      <input v-model="dismissable" type="checkbox" />
      <br />
      <input value="Add" type="submit" />
    </form>
  </div>
</template>

<script>
import ChadDropDown from '@/views/kek/components/ChadDropDown.vue';
import ChadNotifications from '@/views/kek/components/ChadNotifications.vue';

export default {
  components: {
    ChadDropDown,
    ChadNotifications,
  },
  data: () => {
    const data = {
      type: 'Info',
      types: ['Info', 'Success', 'Warning', 'Error'],
      message: '',
      dismissable: true,
      notifications: [],
      expiredNotifications: [],
    };
    return data;
  },
  methods: {
    AddNotification(event) {
      event.preventDefault();
      const notification = {
        type: this.type,
        message: this.message,
        dismissable: this.dismissable,
      };
      this.notifications.push(notification);
      // setTimeout(() => {
      //   this.notifications = this.notifications.filter((n) => n !== notification);
      // }, 5000);
      this.type = 'Info';
      this.message = '';
      this.dismissable = true;
    },
  },
};
</script>
