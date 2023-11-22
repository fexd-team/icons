import React from 'react'
// @ts-ignore
import { FixedSizeGrid as Grid } from 'react-window'
import { useSize } from 'ahooks'
import { copy } from '@fexd/tools'
import { message } from 'antd'
import 'antd/dist/antd.css'

import getIcons from './getIcons'

const Preview = ({ icons: iconSet }: any) => {
  const ref = React.useRef<any>()
  const size = useSize(ref)
  const width = size?.width ?? 960
  const columnCount = Math.floor(width / 120)
  const icons = React.useMemo(() => getIcons(iconSet), [])

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid
        columnCount={columnCount}
        columnWidth={120}
        height={600}
        rowCount={Math.floor(icons?.length / columnCount)}
        rowHeight={120}
        width={columnCount * 120 + 6}
        style={{
          outline: 'solid 1px #f2f2f2',
        }}
      >
        {({ columnIndex, rowIndex, style }: any) => {
          const [iconName, Icon] = icons?.[rowIndex * columnCount + columnIndex]

          return (
            <div
              style={{
                ...style,
                outline: 'solid 1px #f2f2f2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 40,
                cursor: 'pointer',
              }}
              onClick={() => {
                const copyContent = `<${iconName} />`
                copy(copyContent)
                message.info(`已复制 ${copyContent}`)
              }}
            >
              <Icon />
            </div>
          )
        }}
      </Grid>
    </div>
  )
}

export default Preview
