import { QueryClient, type VueQueryPluginOptions } from '@tanstack/vue-query'

const myClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 3600, refetchInterval: 0, refetchOnWindowFocus: false } }
})

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClient: myClient
}

export default vueQueryPluginOptions
