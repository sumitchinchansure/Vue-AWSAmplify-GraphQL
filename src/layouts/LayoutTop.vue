<template>
  <div class="LayoutTop">
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <slot />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: `LayoutTop`
};
</script>

<style lang="scss">
// @import "./assets/scss/app.scss";

// div {
//   .error {
//     color: $danger;
//   }
// }
</style>
