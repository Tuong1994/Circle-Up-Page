import auth_en from './auth'
import common_en from './common'
import friends_en from './friends'
import home_en from './home'
import media_en from './media'
import profile_en from './profile'
import saved_en from './saved'

const en = {
  common: common_en,
  home: home_en,
  friends: friends_en,
  profile: profile_en,
  media: media_en,
  saved: saved_en,
  auth: auth_en
}

export type EN = typeof en

export default en
