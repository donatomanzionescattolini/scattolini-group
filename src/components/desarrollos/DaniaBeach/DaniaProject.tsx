import React from 'react'
import DesarrolloTemplate from '../DesarrolloTemplate.tsx'
import createDaniaProject from '../../../objects/desarrollos/DaniaBeach/DaniaProject'

export default function DaniaProject() {
  return (
    <><DesarrolloTemplate desarrollo={createDaniaProject()}/></>
  )
}
