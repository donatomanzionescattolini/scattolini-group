import React from 'react'
import ProjectTemplate from '../ProjectTemplate'
import Jem from '../../../objects/desarrollos/Downtown/Jem'

export default function JemProject() {
    document.querySelectorAll("section ul li").forEach(ul => {
        ul.classList.add("list")
    })
    return (
        <ProjectTemplate desarrollo={Jem()}/>
    )
}
