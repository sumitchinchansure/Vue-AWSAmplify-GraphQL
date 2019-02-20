<template>
  <layout name="LayoutTop">
    <div class="top">
      <h1>This is an top page</h1>
      <amplify-authenticator
        v-bind:authConfig="authConfig"
      ></amplify-authenticator>
    </div>
  </layout>
</template>

<script>
import Layout from "../layouts/Layout";

export default {
  name: "top",
  data() {
    return {
      authConfig: {
        signUpConfig: {
          hiddenDefaults: "phone_number, email",
          signUpFields: [
            {
              label: "名前",
              key: "name",
              required: false,
              type: "string"
            }
          ]
        }
      }
    };
  },
  components: {
    Layout
  }
};
</script>

<style>
:root {
  --amazonOrange: #5628ac;
  --lightAmazonOrange: #ffac31;
  --darkAmazonOrange: #e88b01;
  --squidInk: #232f3e;
  --lightSquidInk: #31465f;
  --deepSquidInk: #152939;
  --grey: #828282;
  --lightGrey: #c4c4c4;
  --silver: #e1e4ea;
  --darkBlue: #31465f;
  --red: #dd3f5b;
  --white: #ffffff;
  --light-blue: #00a1c9;
}

.button {
  min-width: 153px;
  display: inline-block;
  margin-bottom: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background-image: none;
  color: var(--button-color);
  background-color: var(--button-background-color);
  border-color: #ccc;
  text-transform: uppercase;
  padding: 14px 0;
  letter-spacing: 1.1px;
  border: none;
  border-radius: 12px;
}
</style>
