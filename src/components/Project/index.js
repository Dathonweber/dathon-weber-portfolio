import './index.scss'
import React from 'react';
import ImageCarousel from '../ImageCarousel';

class Project extends React.Component {
    render() {
        const { projectName, projectURL, projectImages, description } = this.props.project;

        return (
            <div className='project'>
                <div className='project-left'>
                    <a href={projectURL} className='project-url' target='_blank' rel='noreferrer'><h1 className='project-name'>{projectName}</h1></a>
                    <p className='project-description'>{description}</p>
                </div>
                <div className='project-right'>
                    <ImageCarousel imageUrls={projectImages} />
                </div>
            </div>
        );
    }
}

export default Project;
