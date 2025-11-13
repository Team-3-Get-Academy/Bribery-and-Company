import { RouterLink } from "noctes.jsx-router"

export default {
  render() {
    return <>
    <div class="projectLinks">
      <h1>Prosjekter</h1>
      <RouterLink class="link" to='/projects/vinlotteri'>Vinlotteri (Olga)</RouterLink>
      <RouterLink class="link" to='/projects/sandefjord'>Driftsmelding System (Sandefjord Frisbeeklub)</RouterLink>
    </div>
    </>
  }
}