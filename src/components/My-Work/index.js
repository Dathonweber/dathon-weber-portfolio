import './index.scss'
import React from "react"
import Project from "../Project"
import { projects } from "../../projectData"
import Loader from 'react-loaders'

const MyWork = () => {
    return (
        <>
            <div className='mywork-page'>
                <h1 className='mywork-header'>My Work</h1>
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
            <Loader type='ball-pulse-sync' />
        </>
    )
}

export default MyWork