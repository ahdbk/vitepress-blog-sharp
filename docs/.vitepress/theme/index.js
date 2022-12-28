import DefaultTheme from 'vitepress/theme'
import CustomLayout from './CustomLayout.vue'
import HomePage from './components/HomePage.vue'

export default {
  ...DefaultTheme,
  Layout: CustomLayout,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx)

    // register your custom global components
    ctx.app.component('HomePage',HomePage)
  }
}