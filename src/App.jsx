import { RouterView } from 'noctes.jsx-router'
import Navbar from './components/navbar.jsx'

export default {
  render() {
    return (
      <>
        <Navbar>
          <slot name='header'>Test Header</slot>
          <slot name='footer'>Test Footer</slot>
        </Navbar>
        <div class="pageContainer">
          <RouterView></RouterView>
        </div>
      </>
    )
  }
}