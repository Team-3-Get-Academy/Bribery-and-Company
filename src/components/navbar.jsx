export default {
  methods: {
    navigateLogin() {
      this.$router.navigate("/login");
    }
  },
  render(ctx, props, slots) {
    return <>
        <div class="navBar">
            {slots.header?.()}
            <div>{slots.default?.() || "No Text"}</div><div>NAVIGATION BAR</div>
            <button onClick={ctx.methods.navigateLogin}>Go to login</button>
            {slots.footer?.()}
        </div>
    </>
  }
}