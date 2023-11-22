// import { version } from './package.json'

export default {
  mode: 'site',
  title: `Fexd Icons`,
  logo: process.env.NODE_ENV === 'production' ? '/icons/logo.png' : '/logo.png',
  outputPath: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/icons/' : '/',
  history: { type: 'hash' },
  resolve: {
    includes: ['documents', 'packages'],
  },
  // navs: [null, { title: `v${version}` }],
}
