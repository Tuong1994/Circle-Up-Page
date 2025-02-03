import { computed, watch, type ComputedRef, type Ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { getApiQuery } from '@/services/helper'
import { getPosts } from '@/services/post/api'
import type { ApiQueryReactive } from '@/services/type'

const useGetPostsPaging = (apiQuery: ApiQueryReactive) => {
  const queryKey = computed<string[]>(() => ['getPosts' + getApiQuery(apiQuery.value)])

  const getPostsPaging = async () => {
    const response = await getPosts(apiQuery.value)
    return response
  }

  const { refetch, ...rest } = useQuery({ queryKey, queryFn: getPostsPaging })

  watch(queryKey, () => refetch())

  return { refetch, ...rest }
}

export default useGetPostsPaging
