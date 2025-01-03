import { ELang } from '@/common/enum'
import type { ApiQuery } from './type'

export const getApiQuery = (query: ApiQuery) => {
  let {
    langCode = ELang.EN,
    page,
    limit,
    keywords,
    sortBy,
    ids,
    userId,
    userInfoId,
    userWorkId,
    userEducationId,
    userLivedId,
    postId,
    friendId,
    eventId,
    followId,
    followedId,
    followerId,
    mediaId,
    albumId,
    savedId,
    collectionId,
    commentId,
    likeId,
    cityId,
    districtId,
    wardId,
    cityCode,
    districtCode,
    hasLike,
    convertLang,
    role,
    gender,
    fileType
  } = query

  let rs = '?'

  page && page < 1 && (page = 1)
  limit && limit < 10 && (limit = 12)
  limit && limit > 100 && (limit = 12)

  langCode && (rs += `langCode=${langCode}`)
  page && (rs += `&page=${page}`)
  limit && (rs += `&limit=${limit}`)
  keywords && (rs += `&keywords=${keywords}`)
  sortBy && (rs += `&sortBy=${sortBy}`)

  ids && (rs += `&ids=${ids}`)
  userId && (rs += `&userId=${userId}`)
  userInfoId && (rs += `&userInfoId=${userInfoId}`)
  userWorkId && (rs += `&userWorkId=${userWorkId}`)
  userEducationId && (rs += `&userEducationId=${userEducationId}`)
  userLivedId && (rs += `&userLivedId=${userLivedId}`)
  postId && (rs += `&postId=${postId}`)
  friendId && (rs += `&friendId=${friendId}`)
  eventId && (rs += `&eventId=${eventId}`)
  followId && (rs += `&followId=${followId}`)
  followedId && (rs += `&followedId=${followedId}`)
  followerId && (rs += `&followerId=${followerId}`)
  mediaId && (rs += `&mediaId=${mediaId}`)
  albumId && (rs += `&albumId=${albumId}`)
  savedId && (rs += `&savedId=${savedId}`)
  collectionId && (rs += `&collectionId=${collectionId}`)
  commentId && (rs += `&commentId=${commentId}`)
  likeId && (rs += `&likeId=${likeId}`)
  cityId && (rs += `&cityId=${cityId}`)
  cityCode && (rs += `&cityCode=${cityCode}`)
  districtId && (rs += `&districtId=${districtId}`)
  districtCode && (rs += `&districtCode=${districtCode}`)
  wardId && (rs += `&wardId=${wardId}`)
  hasLike && (rs += `&hasLike=${hasLike}`)
  convertLang && (rs += `&convertLang=${convertLang}`)
  role && (rs += `&role=${role}`)
  gender && (rs += `&gender=${gender}`)
  fileType && rs + `&fileType=${fileType}`

  return rs
}
