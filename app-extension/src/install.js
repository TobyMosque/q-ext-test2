/**
 * Quasar App Extension install script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/install-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

module.exports = function (api) {
  if (!api.hasPackage('@tobymosque/quasar-app-extension-ext-test1')) {
    throw new Error('please install the @tobymosque/quasar-app-extension-ext-test1 extension')
  }
}
