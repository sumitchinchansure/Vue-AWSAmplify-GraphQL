<template>
  <layout name="LayoutDefault">
    <div class="myUser">
      <h1>My User Page</h1>
      <ul>
        UserName<input type="text" v-model="createMyUserType.username" />
      </ul>
      <ul>
        content<input type="text" v-model="createMyUserType.content" />
      </ul>
      <ul>
        age<input
          type="text"
          v-model="createMyUserType.age"
          placeholder="age"
        />
      </ul>
      <ul>
        email<input
          type="email"
          v-model="createMyUserType.email"
          placeholder="email"
        />
      </ul>
      <ul>
        <button type="button" v-on:click="create()">CreateUser</button>
      </ul>
      <div id="updateForm">
        <h1>Update Data</h1>
        <ul>
          UserName<input type="text" v-model="updateMyUserType.username" />
        </ul>
        <ul>
          content<input type="text" v-model="updateMyUserType.content" />
        </ul>
        <ul>
          age<input
            type="text"
            v-model="updateMyUserType.age"
            placeholder="age"
          />
        </ul>
        <ul>
          email<input
            type="email"
            v-model="updateMyUserType.email"
            placeholder="email"
          />
        </ul>
      </div>
      <ul>
        <button type="button" v-on:click="update()">UpdateUser</button>
      </ul>
      <ul>
        <button type="button" v-on:click="list()">ListUsers</button>
      </ul>

      <b-table :data="users">
        <template scope="props">
          <b-table-column field="username" label="User Name" sortable>
            {{ props.row.username }}
          </b-table-column>

          <b-table-column field="content" label="Content" sortable>
            {{ props.row.content }}
          </b-table-column>

          <b-table-column field="age" label="Age" sortable>
            {{ props.row.age }}
          </b-table-column>

          <b-table-column field="email" label="Email" sortable>
            {{ props.row.email }}
          </b-table-column>

          <b-table-column>
            <button class="button is-medium" v-on:click="edit(props.row)">
              <b-icon pack="fas" icon="edit" size="is-medium"></b-icon>
            </button>

            <button class="button is-medium" @click="remove(props.row)">
              <b-icon icon="delete" size="is-medium"></b-icon>
            </button>
          </b-table-column>
        </template>
      </b-table>
    </div>
  </layout>
</template>

<script>
import Layout from "../layouts/Layout";
import AmplifyStore from "../store";

import { listMyUserTypes } from "../graphql/queries.js";
import {
  createMyUserType,
  updateMyUserType,
  deleteMyUserType
} from "../graphql/mutations.js";

export default {
  name: "myUser",
  data() {
    return {
      logger: {},
      actions: {
        create: createMyUserType,
        list: listMyUserTypes,
        update: updateMyUserType,
        delete: deleteMyUserType
      },
      createMyUserType: {
        username: "",
        content: "",
        age: null,
        email: ""
      },
      updateMyUserType: {
        id: null,
        username: "",
        content: "",
        age: null,
        email: ""
      },
      deleteMyUserTypeInput: {
        id: null
      },
      users: []
    };
  },
  components: {
    Layout
  },

  computed: {
    user() {
      // console.log(AmplifyStore.state.user.username);
      return AmplifyStore.state.user;
    }
  },
  methods: {
    list() {
      this.$Amplify.API.graphql(
        this.$Amplify.graphqlOperation(this.actions.list, {})
      ).then(res => {
        //this.todos = res.data.listTodos.items;
        this.users = res.data.listMyUserTypes.items;
        this.items = this.users;
        console.log(`Users  listed`, res);
      });
    },

    update() {
      this.$Amplify.API.graphql(
        this.$Amplify.graphqlOperation(this.actions.update, {
          input: this.updateMyUserType
        })
      ).then(res => {
        this.updateMyUserType = {
                  id: null,
        username: "",
        content: "",
        age: null,
        email: ""
        };
        console.log("User Updated" + res);
        this.list();
      });
    },
    edit(user) {
      console.log(user);
      this.updateMyUserType.id = user.id;
      this.updateMyUserType.username = user.username;
      this.updateMyUserType.content = user.content;
      this.updateMyUserType.age = user.age;
      this.updateMyUserType.email = user.email;
      console.log("000");      
      console.log(this.updateMyUserType);

},
    remove(user) {
      this.deleteMyUserTypeInput.id = user.id;

      this.$Amplify.API.graphql(
        this.$Amplify.graphqlOperation(this.actions.delete, {
          input: this.deleteMyUserTypeInput
        })
      ).then(res => {
        console.log("User Deleted" + res);
        this.list();
      });
    },
    create() {
      this.$Amplify.API.graphql(
        this.$Amplify.graphqlOperation(this.actions.create, {
          input: this.createMyUserType
        })
      ).then(res => {
        //this.logger.info(`User created`, res);
        console.log("user created" + res);
        this.list();
        this.createMyUserType = {};
      });
    }
  }
};
</script>
