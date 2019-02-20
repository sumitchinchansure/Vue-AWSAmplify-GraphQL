import Vue from "vue";
import Router from "vue-router";
import { AmplifyEventBus, AmplifyPlugin } from "aws-amplify-vue";
import * as AmplifyModules from "aws-amplify";
import AmplifyStore from "./store";

import { About, Home, Secret, Top, myUser } from "./views";
//import { Notes, Note } from "./notes/components/";

Vue.use(Router);
Vue.use(AmplifyPlugin, AmplifyModules);

let user;

getUser().then(user => {
  if (user) {
    router.push({ path: "/home" });
  }
});

AmplifyEventBus.$on("authState", async state => {
  console.log(
    `Here is the auth event that was just emitted by an Amplify component: ${state}`
  );
  if (state === "signedOut") {
    user = null;
    AmplifyStore.commit("setUser", null);
    router.push({ path: "/" });
  } else if (state === "signedIn") {
    user = await getUser();
    router.push({ path: "/home" });
  }
});

function getUser() {
  return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
    .then(data => {
      if (data && data.signInUserSession) {
        AmplifyStore.commit("setUser", data);
        return data;
      }
    })
    .catch(() => {
      AmplifyStore.commit("setUser", null);
      return null;
    });
}

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Top",
      component: Top
    },
    {
      path: "/about",
      name: "About",
      component: About,
      meta: { requiresAuth: true }
    },
    {
      path: "/secret",
      name: "Secret",
      component: Secret,
      meta: { requiresAuth: true }
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: "/myUser",
      name: "myUser",
      component: myUser,
      meta: { requiresAuth: true }
    }
    // {
    //   path: "/notes",
    //   name: "Notes",
    //   component: Notes,
    //   params: {
    //     foo: "bar"
    //   },
    //   meta: { requiresAuth: true }
    // },
    // {
    //   path: "/menu",
    //   name: "Menu",
    //   component: Menu,
    //   meta: { requiresAuth: true }
    // },
    // {
    //   path: "/profile",
    //   name: "Profile",
    //   component: Profile,
    //   meta: { requiresAuth: true }
    // },
    // {
    //   path: "/auth",
    //   name: "Authenticator",
    //   component: components.Authenticator
    // }
  ]
});

router.beforeResolve(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    user = await getUser();
    if (!user) {
      return next({
        path: "/"
        // query: {
        //   redirect: to.fullPath
        // }
      });
    }
    return next();
  }
  return next();
});

export default router;

// export default new Router({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: Home
//     },
//     {
//       path: "/about",
//       name: "about",
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () =>
//         import(/* webpackChunkName: "about" */ "./views/About.vue")
//     }
//   ]
// });
