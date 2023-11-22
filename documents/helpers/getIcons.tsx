import { memoize } from '@fexd/tools'

const getIcons = memoize(({ ...Icons }) => {
  delete Icons.Icon
  delete Icons.default
  return Object.entries(Icons).filter(([, IconComponent]) => !!IconComponent)
})

export default getIcons
