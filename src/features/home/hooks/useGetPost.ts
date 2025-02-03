import { computed, watch, type ComputedRef } from 'vue'
import { getApiQuery } from '@/services/helper'
import { getPost } from '@/services/post/api'
import { useQuery } from '@tanstack/vue-query'
import type { ApiQueryReactive } from '@/services/type'

const useGetPost = (apiQuery: ApiQueryReactive, isTrigger?: ComputedRef<boolean>) => {
  const queryKey = computed<[string, boolean]>(() => [
    'getPost' + getApiQuery(apiQuery.value),
    Boolean(isTrigger?.value)
  ])

  const getPostDetail = async () => {
    const response = await getPost(apiQuery.value)
    return response
  }

  const { refetch, ...rest } = useQuery({
    queryKey,
    queryFn: getPostDetail,
    enabled: Boolean(isTrigger?.value)
  })

  watch([queryKey, isTrigger], () => {
    if (isTrigger?.value) refetch()
  })

  return { refetch, ...rest }
}

export default useGetPost
