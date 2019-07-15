/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// require('./src/assets/css/layout.css')
require('bootstrap/dist/css/bootstrap.min.css')
require('./src/assets/css/style.css')
require('./src/assets/css/animate.css')

exports.onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `The Alkemy website has been updated. ` +
      `Would you like to reload and display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}

exports.onRouteUpdate = () => {
  window.location.action === "PUSH" && window.scrollTo(0, 0)
}
