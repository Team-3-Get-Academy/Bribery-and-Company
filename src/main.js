import { App, root, usePlugin } from 'noctes.jsx'
import './style.css'
import AppRoot from './App.jsx'
import router from 'noctes.jsx-router'
import HomePage from './components/HomePage.jsx'

usePlugin(router, {
  hash: true,
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
})

new App(
  root(AppRoot, "#app")
).render()
