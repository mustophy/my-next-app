module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: ''
  },
  exportTrailingSlash: 'true',
  exportPathMap: async function (
    defaultPathMap,
    {dev, dir, outDir, distDir, buildId}
  ){
    return {
      '/': {page: '/'},
      '/about': {page: '/about'}
    }
  }
}
