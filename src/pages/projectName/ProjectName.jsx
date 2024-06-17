import React from 'react'
import GalleryContainer from  '../../components/Gallery/GalleryContainer'
import SelectModels from './SelectModels'
import XrOverlayContainer from '../../components/domOverlay/OverlayContainer'
import Navbar from '../../components/Navbar/Navbar'
import ProjectNameBar from '../../components/ProjectNameBar/ProjectNameBar'


const ProjectName = () => {
  return (
    <div>       
      <ProjectNameBar/> 
        <div className=' flex'>
          <div className=' w-[25%] border-r-2'>
            <SelectModels/>
          </div>
          <div className=' w-[75%] h-[100vh]'>
            {/* <GalleryContainer/> */}
            <XrOverlayContainer/>
          </div>
        </div>
    </div>
  )
}

export default ProjectName