import { RouterLink } from "noctes.jsx-router"

export default {
  render() {
    return <>
    <div key="projects" class="projectLinks">
      <h1>Prosjekter</h1>
      <RouterLink class="link" to='/projects/vinlotteri'>Vinlotteri (Olga)</RouterLink>
      <RouterLink class="link" to='/projects/sandefjord'>Driftsmelding System (Sandefjord Frisbeeklub)</RouterLink>
      <RouterLink class="link" to='/presentation'>Oppsummering av Emne 2</RouterLink>
    </div>
    </>
  }
}