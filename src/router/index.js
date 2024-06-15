import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const loadRouteModules = () => {
  const routeModuleFiles = import.meta.glob('../views/**/*.router.js', {
    eager: true,
    import: 'default'
  })
  const routeModules = []
  Object.entries(routeModuleFiles).forEach(([filePath, itm]) => {
    if (Array.isArray(itm)) {
      routeModules.push(...itm)
    } else {
      routeModules.push(itm)
    }
  })

  return routeModules
}

const router = new VueRouter({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    ...loadRouteModules()
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
