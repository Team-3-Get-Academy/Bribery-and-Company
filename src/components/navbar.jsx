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
          <RouterLink to='/projects'>Prosjekter</RouterLink>
          <span>|</span>
          <RouterLink to='/aboutUs'>Om oss</RouterLink>
          <span>|</span>
          <RouterLink to='/contact'>Kontakt oss</RouterLink>
        </div>
    </>
  }
}