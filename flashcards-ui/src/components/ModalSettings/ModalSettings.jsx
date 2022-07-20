import React from 'react'

export default function ModalSettings({showSettingsModal}) {
  return (
    <div className={showSettingsModal?"":"hidden"}>ModalSettings</div>
  )
}
