import CartIcon from "./CartIcon"

const Card = () => {
	return (
		<div className='bg-white flex flex-col basis-[560px] rounded-lg overflow-hidden min-[600px]:flex-row'>
			<img
				src='/image-product-mobile.jpg'
				alt='product'
				className='w-full h-full object-cover min-[600px]:hidden'
			/>

			<img
				src='/image-product-desktop.jpg'
				alt='product'
				className='w-1/2 h-full object-cover hidden min-[600px]:block'
			/>

			<div className='p-6'>
				<p className='text-darkgrayishblue text-sm font-medium tracking-[.25em] mb-4'>
					PERFUME
				</p>

				<h1 className='text-verydarkblue font-serif text-3xl font-bold mb-4'>
					Gabrielle Essence Eau De Parfum
				</h1>

				<p className='text-sm font-medium text-darkgrayishblue mb-4 leading-6'>
					A floral, solar and voluptuous interpretation composed by Olivier
					Polge, Perfumer-Creator for the House of CHANEL.
				</p>

				<div className='flex items-center gap-4 mb-4'>
					<span className='text-darkcyan font-serif text-3xl font-bold'>
						$149.99
					</span>
					<span className='text-darkgrayishblue line-through text-xs font-medium'>
						$169.99
					</span>
				</div>

				<button className='bg-darkcyan text-white font-medium text-sm flex items-center justify-center gap-2 py-3 rounded-lg hover:bg-darkcyan/80 w-full'>
					<CartIcon />
					Add to Cart
				</button>
			</div>
		</div>
	)
}

export default Card
