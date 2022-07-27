import {
  fileURLToPath,
  URL
} from 'url'

import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',
        import.meta.url))
    }
  }
})
// module.exports = {
//   module: {
//     rules: [
//       // ... other rules omitted

//       // this will apply to both plain `.scss` files
//       // AND `<style lang="scss">` blocks in `.vue` files
//       {
//         test: /\.scss$/,
//         use: [
//           'vue-style-loader',
//           'css-loader',
//           'sass-loader'
//         ]
//       }
//     ]
//   },
//   // plugin omitted
// }