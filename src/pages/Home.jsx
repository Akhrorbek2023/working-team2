const Home = () => {
	return (
		<>
			<header className='container h-[80px] flex items-center justify-between bg-gray-800 text-white'>
				<h1 className='font-[orbitron] text-[22px] font-[700] cursor-pointer'>
					MetaV
				</h1>
				<nav>
					<ul className='flex items-center gap-4 font-[poppins] text-[16px] font-[400] cursor-pointer'>
						<li>Home</li>
						<li>Resource</li>
						<li>Pricing</li>
						<li>About us</li>
					</ul>
				</nav>
			</header>
			<section className='container bg-gray-800 text-white'>
				<div>
					<h1 className='font-[orbitron] text-[45px] font-[600]'>
						Explore the future of the
						<span className='text-[55px] font-[700] bg-gradient-to-r from-[#F86CF8] to-[#64CEF5] bg-clip-text text-transparent'>
							Metaverse
						</span>
					</h1>
				</div>
			</section>
		</>
	)
}

export default Home
