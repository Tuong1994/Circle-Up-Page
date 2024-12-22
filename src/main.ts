import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSpinner,
  faXmark,
  faUser,
  faAngleUp,
  faAngleDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
  faEye,
  faEyeSlash,
  faTrash,
  faSearchMinus,
  faSearchPlus,
  faRotate,
  faCheck,
  faPlus,
  faMinus,
  faCloudUpload,
  faBoxArchive,
  faList,
  faCircleCheck,
  faXmarkCircle,
  faCircleInfo,
  faCircleExclamation,
  faCalendar,
  faUpload,
  faCaretRight,
  faArrowsLeftRightToLine,
  faBell,
  faHouse,
  faSearch,
  faEllipsisH,
  faGear,
  faLightbulb,
  faSignOut,
  faUserGroup,
  faBookmark,
  faThumbsUp,
  faMessage,
  faShare,
  faImage,
  faTag,
  faLaugh,
  faMapMarkerAlt,
  faGlobe,
  faLock,
  faPaperPlane,
  faPencilAlt,
  faSlidersH,
  faPhone,
  faEnvelope,
  faBirthdayCake,
  faTransgender,
  faBriefcase,
  faGraduationCap,
  faHeart,
  faHardDrive,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'
import './style/tailwind.css'
import './style/main.scss'

library.add(
  faSpinner,
  faXmark,
  faUser,
  faAngleUp,
  faAngleDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
  faEye,
  faEyeSlash,
  faTrash,
  faRotate,
  faSearchMinus,
  faSearchPlus,
  faCheck,
  faPlus,
  faMinus,
  faBoxArchive,
  faList,
  faCircleCheck,
  faXmarkCircle,
  faCircleInfo,
  faCircleExclamation,
  faCalendar,
  faCloudUpload,
  faUpload,
  faCaretRight,
  faArrowsLeftRightToLine,
  faBell,
  faHouse,
  faSearch,
  faEllipsisH,
  faGear,
  faLightbulb,
  faSignOut,
  faUserGroup,
  faBookmark,
  faThumbsUp,
  faMessage,
  faShare,
  faImage,
  faTag,
  faLaugh,
  faMapMarkerAlt,
  faGlobe,
  faLock,
  faPaperPlane,
  faPencilAlt,
  faSlidersH,
  faPhone,
  faEnvelope,
  faBirthdayCake,
  faTransgender,
  faBriefcase,
  faGraduationCap,
  faHeart,
  faHardDrive,
  faLayerGroup,
)

const app = createApp(App)

app.component('fa', FontAwesomeIcon)

app.use(createPinia())

app.use(router)

app.mount('#app')
