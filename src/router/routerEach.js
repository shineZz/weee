import router from './index'
router.beforeEach(async(to, from, next) => {
    console.log(`测试路由守卫：我从 ${from.path} 来，到${to.path}`)
    next()
})