<template>
  <div class="LayoutDefault">
    <section class="hero is-primary is-fullheight">
      <!-- <div class="LayoutDefault">
      <nav class="LayoutDefault__nav">
        <router-link to="/home">Home</router-link> |
        <router-link to="/secret">Secret</router-link> |
        <router-link to="/about">About</router-link>

        <div class="LayoutDefault__user">
          {{ user.name }}
        </div>
      </nav>
      <main class="LayoutDefault__main">
        <slot />
      </main>
      <footer class="LayoutDefault__footer">
        &copy; Awesome Company
      </footer>
    </div> -->
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                />
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active">
                  Home
                </a>
                <a class="navbar-item">
                  Examples
                  <!--<router-link to="/secret">Examples</router-link>-->
                </a>
                <a class="navbar-item">
                  Documentation
                </a>
                <span class="navbar-item">
                  <a class="button is-primary is-inverted">
                    <span class="icon">
                      <i class="fab fa-github"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <slot />
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs">
          <div class="container">
            <ul>
              <!-- <li class="is-active"><a>Overview</a></li> -->
              <li><router-link to="/home">Home</router-link></li>
              <li><router-link to="/secret">Secret</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/myUser">myUser</router-link></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
import AmplifyStore from "../store";

export default {
  name: `LayoutDefault`,
  // data() {
  //   return {
  //     user: null,
  //   };
  // },
  computed: {
    user() {
      // console.log(AmplifyStore.state.user.username);
      return AmplifyStore.state.user;
    }
  }
};
</script>

<style lang="scss">
// .LayoutDefault {
//   max-width: 42em;
//   margin-right: auto;
//   margin-left: auto;
//   padding-right: 1em;
//   padding-left: 1em;

//   &__nav {
//     padding-top: 1em;
//     padding-bottom: 1em;
//     border-bottom: 1px solid #c0c0c0;
//   }

//   &__user {
//     float: right;
//   }

//   &__main {
//     padding-top: 1.5em;
//     padding-bottom: 2em;
//   }

//   &__footer {
//     padding-top: 1em;
//     padding-bottom: 1em;
//     border-top: 1px solid #c0c0c0;
//   }
// }
</style>
