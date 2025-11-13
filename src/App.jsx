import { RouterView } from 'noctes.jsx-router'
import Navbar from './components/Navbar.jsx'

export default {
  render() {
    return (
      <>
        <Navbar>Bribery & Co.</Navbar>
        <div class="pageContainer">
          <Transition>
            <RouterView></RouterView>
          </Transition>
        </div>
      </>
    )
  }
}