import { RouterLink } from "noctes.jsx-router"

export default {
  render() {
    return <>
    <div style="display: flex; flex-direction: column;">
      <RouterLink to='/projects/vinlotteri'>Olga (Vin Lotteri)</RouterLink>
      <RouterLink to='/projects/sandefjord'>Driftsmelding System (Sandefjord Frisbeeklub)</RouterLink>
    </div>
    </>
  }
}