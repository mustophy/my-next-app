module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: '/',
  },
  exportPathMap: async function (
    defaultPathMap,
    {dev, dir, outDir, distDir, buildId}
  ){
    return {
      '/': {page: '/'},
      '/about': {page: '/about'},
      '/portfolio': {page: '/portfolio'}
    }
  }
}
