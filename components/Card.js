import Image from 'next/image';

const Card = () => {
	return (
		<div className='max-w-md mx-auto bg-white p-4 rounded-md shadow-md'>
			<h3 className='text-xl mb-4'>Sharon A. Goss</h3>

			<div className='relative'>
				<Image
					src={
						'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNwYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
					}
					width={500}
					height={350}
					layout='responsive'
					objectFit='cover'
					objectPosition='center'
				/>
			</div>

			<div>
				<svg
					className='w-6 h-6 fill-sky-600 cursor-pointer my-2'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
						clipRule='evenodd'
					/>
				</svg>

				<p>Titulo</p>
				<p className='text-sm mb-4'>Esta es una excelente fotografía</p>

				<input type='text' placeholder='Agrega un comentario' />
			</div>
		</div>
	);
};

export default Card;
