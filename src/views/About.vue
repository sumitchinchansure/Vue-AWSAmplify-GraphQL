<template>
  <layout name="LayoutDefault">
    <div class="about">
      <h1>This is an about page</h1>
      <amplify-sign-out v-if="user"></amplify-sign-out>
    </div>
  </layout>
</template>

<script>
import Layout from "../layouts/Layout";
import AmplifyStore from "../store";

export default {
  name: "About",
  components: {
    Layout
  },
  computed: {
    user() {
      // console.log(AmplifyStore.state.user.username);
      return AmplifyStore.state.user;
    }
  }
};
</script>
