import { App, root, usePlugin } from 'noctes.jsx'
import './style.css'
import AppRoot from './App.jsx'
import router from 'noctes.jsx-router'
import HomePage from './components/HomePage.jsx'
import aboutUsPage from './components/AboutUs.jsx'
import Vinlotteri from './components/Vinlotteri.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'
import ContactPage from './components/Contact.jsx'
import Sandefjord from './components/Sandefjord.jsx'
import SandefjordReferat from './components/Sandefjord-Referat.jsx'
import Page404 from './components/404.jsx'
import Presentation from './components/Presentation.jsx'

usePlugin(router, {
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/aboutUs",
      component: aboutUsPage
    },
    {
      path: "/projects",
      children: [
        {
          path: "",
          component: ProjectsPage
        },
        {
          path: "vinlotteri",
          component: Vinlotteri
        },
        {
          path: "sandefjord",
          children: [
            {
              path: "",
              component: Sandefjord
            },
            {
              path: "referat",
              component: SandefjordReferat
            }
          ]
        }
      ]
    },
    {
      path: "contact",
      component: ContactPage
    },
    {
      path: "presentation",
      component: Presentation
    },
    {
      path: "*",
      component: Page404
    }
  ]
})

new App(
  root(AppRoot, "#app")
).render()
