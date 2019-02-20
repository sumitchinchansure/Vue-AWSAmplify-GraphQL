import Vue from "vue";

export default {
  name: `Layout`,
  props: {
    name: {
      type: String,
      required: true
    }
  },
  created() {
    console.log(`created ${this.name}`);
    // Check if layout component
    // has already been registered.
    if (!Vue.options.components[this.name]) {
      Vue.component(this.name, () => import(`../layouts/${this.name}.vue`));
    }

    this.$parent.$emit(`update:layout`, this.name);
  },
  render() {
    console.log(`render ${this.$slots.default[0]}`);
    return this.$slots.default[0];
  }
};
