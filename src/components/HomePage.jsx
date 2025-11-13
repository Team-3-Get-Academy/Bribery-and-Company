import { RouterLink } from "noctes.jsx-router"

export default {
  render(ctx, props) {
    return (
      <>
        <div style="height: 100%; width: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column;">
          <img src='/logo.png' style="height: 200px" />
          <h1 style="margin-bottom: 0">Velkommen til Bribery & Co.</h1>
          <h2 style="margin-top: 0; font-weight: 500; font-style: italic;">Lobby virksomhet for alle.</h2>
          <div style="display: flex; gap: 8px;">
            <RouterLink class="button" to='/projects'>Se våre prosjekter</RouterLink>
            <RouterLink class="button" to='/aboutUs'>Om oss</RouterLink>
          </div>
        </div>
      </>
    )
  }
}