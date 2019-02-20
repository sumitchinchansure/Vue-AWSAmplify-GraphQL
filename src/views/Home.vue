<template>
  <layout name="LayoutDefault">
    <div class="home">
      <h1>This is an home page</h1>
    </div>
  </layout>
</template>

<script>
import Layout from "../layouts/Layout";
// import { Auth } from "aws-amplify";
// import { AmplifyEventBus } from "aws-amplify-vue";

export default {
  name: "home",
  components: {
    Layout
  }
  // async beforeCreate() {
  //   try {
  //     await Auth.currentAuthenticatedUser();
  //     console.log("aaa");
  //     // this.signedIn = true
  //   } catch (err) {
  //     // this.signedIn = false
  //   }
  //   AmplifyEventBus.$on("authState", info => {
  //     console.log(`info: ${info}`);
  //   });
  //   AmplifyEventBus.$on("authData", data => {
  //     console.log(`data: ${data}`);
  //   });
  //   AmplifyEventBus.$on("loginUser", user => {
  //     console.log(`user: ${user}`);
  //   });
  // }
};
</script>
