import React from 'react'

const Footer = () => {
  return (
<div>
<div className='flex bg-[#090823] text-white justify-between p-12 '>
      <div>
      <h1 className='text-2xl  mb-4 text-purple-400 font-[orbitron] font-bold bg-gradient-to-r from-[#F86CF8] to-[#64CEF5] bg-clip-text text-transparent'>Meta V</h1>
        <p>Adipiscing at in tellus integer. Pellentesque massa <br /> placerat duis ultricies lacus. Nisi porta lorem mollis <br /> aliquam ut porttitor</p>
      </div>

      {/* About us */}

      <div> 
        <ul>
            <li className='text-2xl font-semibold mb-4 font-[orbitron]'>About Us</li>
            <li>About MetaV</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
        </ul>
      </div>

      {/* Sevices */}

      <div> 
        <ul>
            <li className='text-2xl font-semibold mb-4 font-[orbitron]'>NFT Marketplace</li>
            <li>Virtual Concert</li>
            <li>Gaming</li>
            <li>Artwork</li>
            <li>Online Travel</li>
        </ul>
      </div>

      {/* Contact */}

      <div>
        <div className='flex gap-[10px] mb-4' >
            <img src="/LinkedIn.png" alt="" />
            <img src="/Twitter Squared.png" alt="" />
            <img src="/Instagram.png" alt="" />
            <img src="/Facebook.png" alt="" />
        </div>
        <h1>2022 © MetaV.com All right <br /> reserved.</h1>
      </div>

    </div>
</div>
  )
}

export default Footer
