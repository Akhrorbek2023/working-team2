const Navbar = () => {
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
		</>
	)
}

export default Navbar
