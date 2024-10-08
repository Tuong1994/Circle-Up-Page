import common_vn from './common'
import friends_vn from './friends'
import home_vn from './home'

const vn = {
  common: common_vn,
  home: home_vn,
  friends: friends_vn
}

export type VN = typeof vn

export default vn
