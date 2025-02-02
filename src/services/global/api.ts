import Fetch from '..'
import globalApiPaths from './path'

export const connection = async () => {
  const response = await Fetch.Get<any>(globalApiPaths.connection)
  return response
}
