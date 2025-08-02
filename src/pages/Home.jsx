const Home = () => {
	return (
		<>
			<section className='pt-10 container bg-gray-800 text-white flex flex-row justify-between items-center'>
				<div>
					<h1 className='font-[orbitron] text-[45px] font-[600]'>
						Explore the future of the
						<span className='ml-3 text-[55px] font-[700] bg-gradient-to-r from-[#F86CF8] to-[#64CEF5] bg-clip-text text-transparent'>
							Metaverse
						</span>
					</h1>
					<p className='font-[poppins] text-[20px] font-[400]'>
						Let's explore and create your experience with metaverse.
					</p>
					<div className='flex flex-row items-center gap-4 mt-4'>
						<button className='bg-gradient-to-r from-[#D10ED1] to-[#10A3DA] text-white font-[poppins] text-[20px] font-[500] py-2 px-4 rounded'>
							Get Started
						</button>
						<button className='relative inline-block p-[1px] rounded bg-gradient-to-r from-[#F86CF8] to-[#64CEF5]'>
							<span className='block px-4 py-2 font-[poppins] text-[20px] font-[500] rounded bg-black text-white'>
								Explore Now
							</span>
						</button>
					</div>
					<div className='flex flex-row items-center '>
						<div className='px-6 py-4 rounded-md text-center'>
							<div className='text-2xl font-bold'>29K+</div>
							<div className='text-sm opacity-80'>Artworks</div>
						</div>
						<div className='px-6 py-4 rounded-md text-center'>
							<div className='text-2xl font-bold'>18K+</div>
							<div className='text-sm opacity-80'>Artists</div>
						</div>
						<div className='px-6 py-4 rounded-md text-center'>
							<div className='text-2xl font-bold'>25K+</div>
							<div className='text-sm opacity-80'>Auction</div>
						</div>
					</div>
				</div>
				<img
					className='w-[800px] h-[800px] object-cover'
					src='Group 48095504.png'
					alt='img of metaverse'
				/>
			</section>
		</>
	)
}

export default Home
