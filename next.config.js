module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: ''
  },
  trailingSlash: 'true',
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
