import React from 'react'

const SectionSlider = ({name="Section Name",data=[]}) => {
    return (
        <section className="sectionSlider">
        <div className="sectionSlider__header">
            <h2>{{name}}</h2>
        </div>

        </section>
    )
}

export default SectionSlider
