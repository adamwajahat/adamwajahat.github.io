import React from 'react'
import EmptyNote from '../../components/EmptyNote'
import somewhereinGaza from '../../assets/imgs/somewhereinGaza_notes.png'
import '../../styles/SomewhereInGaza2023.css'

function SomewhereInGaza2023() {
  return (
    <EmptyNote noteImages={[somewhereinGaza]} links={['https://somewhereingaza.github.io']}></EmptyNote>
  )
}

export default SomewhereInGaza2023