import { RouterLink } from "noctes.jsx-router";

export default {
  methods: {
    navigateLogin() {
      this.$router.navigate("/login");
    }
  },
  render(ctx, props, slots) {
    return <>
        <div class="navBar">
          <img src='/logo.png' />
          <RouterLink to='/'>Bribery & Co.</RouterLink>
          <span>|</span>
          <RouterLink to='/aboutUs'>About Us</RouterLink>
          <span>|</span>
          <RouterLink to='/projects'>Prosjekter</RouterLink>
        </div>
    </>
  }
}