// For Nuxt 3
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDatabase, fas } from '@fortawesome/free-solid-svg-icons'
import { faAndroid, faCss3, faGithub, faGithubSquare, faGolang, faHtml5, faJs, faLaravel, faLinkedin, faPhp, faRust, faSymfony, faVuejs } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

//library.add(fas, faGithubSquare, faGithub, faLinkedin, faPhp, faLaravel, faJs, faHtml5, faCss3, faSymfony, faAndroid, faBootstrap, faRust, faGolang, faDatabase, faVuejs)
library.add(fas);


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})