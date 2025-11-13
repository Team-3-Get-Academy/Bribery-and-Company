import { RouterView } from 'noctes.jsx-router'
import Navbar from './components/Navbar.jsx'

export default {
  render() {
    return (
      <>
        <Navbar>Bribery & Co.</Navbar>
        <div class="pageContainer">
          <RouterView></RouterView>
        </div>
      </>
    )
  }
}