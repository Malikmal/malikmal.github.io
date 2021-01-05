// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    /* config options here */
    // options: {
    //     dist: 'dist'
    //   }
    // distDir: 'out',
    // assetPrefix: '/', //isProd ? 'https://cdn.statically.io/gh/Malikmal/malikmal.github.io/gh-pages/' : '',
    env : {
      DISPATCH_GITHUB_TOKEN : process.env.DISPATCH_GITHUB_TOKEN,
    }
  }