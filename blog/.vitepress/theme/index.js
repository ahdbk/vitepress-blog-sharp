import DefaultTheme from 'vitepress/theme'
import CustomLayout from './CustomLayout.vue'
import BlogCard from './components/BlogCard.vue'
import BlogsGrid from './components/BlogsGrid.vue'
import './custom.css'
export default {
  ...DefaultTheme,
  Layout: CustomLayout,
  enhanceApp(ctx) {
    // extend default theme custom behaviour.
    DefaultTheme.enhanceApp(ctx)

    // register your custom global components
    ctx.app.component('BlogsGrid',BlogsGrid)
    ctx.app.component('BlogCard',BlogCard)
  }
}