import { App, root, usePlugin } from 'noctes.jsx'
import './style.css'
import AppRoot from './App.jsx'
import router from 'noctes.jsx-router'
import HomePage from './components/HomePage.jsx'
import LoginPage from './components/LoginPage.jsx'
import aboutUsPage from './components/AboutUs.jsx'
import employeesPage from './components/Employees.jsx'
import Vinlotteri from './components/Vinlotteri.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'
import Sandefjord from './components/Sandefjord.jsx'

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
      path: "/aboutUs",
      component: aboutUsPage,
      children: [
        {
          path: "employees",
          component: employeesPage
        }
      ]
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
          component: Sandefjord
        }
      ]
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
