import React from 'react'
import SectionOneImg from "../assets/SectionOneImg.png"

function SectionOne() {
  return (
    <div className="w-[100%] bg-[black]">
        <div className="max-w-[1440px] w-[90%] m-auto mt-0">
            <div className="flex items-center justify-evenly gap-[200px] py-10">
                <div className="">
                    <img src={SectionOneImg} className="w-[530px] h-[440px] bg-contain transition ease-linear hover:scale-[1.05]" alt="Users_Feelings" />
                </div>
                <div className="">
                    <h1 className="text-[35px] text-white">What is <span className="bg-gradient-to-r from-[#b17ff7] to-[#58d3f6] bg-clip-text text-transparent">Metaverse</span></h1>
                    <p className="text=[18px] text-white">Adipiscing at in tellus integer. Pellentesque massa<br />placerat duis ultricies lacus. Nisi porta lorem mollis<br />aliquam ut porttitor leo. Venenatis cras..</p>
                    <button className="btn text-white rounded-md p-3 bg-gradient-to-r from-fuchsia-600 to-sky-600 mt-8">Know More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionOne
