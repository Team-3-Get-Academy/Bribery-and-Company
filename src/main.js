import { App, root, usePlugin } from 'noctes.jsx'
import './style.css'
import AppRoot from './App.jsx'
import router from 'noctes.jsx-router'
import HomePage from './components/HomePage.jsx'
import LoginPage from './components/LoginPage.jsx'

usePlugin(router, {
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/login",
      component: LoginPage
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
