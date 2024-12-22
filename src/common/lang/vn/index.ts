import common_vn from './common'
import friends_vn from './friends'
import home_vn from './home'
import media_vn from './media'
import profile_vn from './profile'
import saved_vn from './saved'

const vn = {
  common: common_vn,
  home: home_vn,
  friends: friends_vn,
  profile: profile_vn,
  media: media_vn,
  saved: saved_vn
}

export type VN = typeof vn

export default vn
