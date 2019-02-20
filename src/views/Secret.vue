<template>
  <layout name="LayoutDefault">
    <div class="secret">
      <h1>This is an secret page</h1>
      <!-- <amplify-sign-out v-if="user"></amplify-sign-out> -->
    </div>
  </layout>
</template>

<script>
import Layout from "../layouts/Layout";
import AmplifyStore from "../store";

export default {
  name: "Secret",
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
