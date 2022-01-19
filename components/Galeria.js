import Image from 'next/image';

const Galeria = () => {
	return (
		<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
			<div className='relative h-56'>
				<Image
					src={
						'https://images.unsplash.com/photo-1439402702863-6434b61e6392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFzaWFuJTIwd29tYW4lMjBiZWF0aWZ1bCUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
					}
					alt='imagen 1'
					width={500}
					height={500}
					layout='fill'
					objectFit='cover'
				/>
			</div>

			<div className='relative h-56'>
				<Image
					src={
						'https://images.unsplash.com/photo-1611439766571-e19f48603f72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
					}
					alt='imagen 2'
					width={500}
					height={500}
					layout='fill'
					objectFit='cover'
				/>
			</div>

			<div className='relative h-56'>
				<Image
					src={
						'https://images.unsplash.com/photo-1618414142969-109490ad83b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBsYXlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
					}
					alt='imagen 3'
					width={500}
					height={500}
					layout='fill'
					objectFit='cover'
				/>
			</div>

			<div className='relative h-56'>
				<Image
					src={
						'https://images.unsplash.com/photo-1574322768273-b301a11a1d0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNvbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
					}
					alt='imagen 4'
					width={500}
					height={500}
					layout='fill'
					objectFit='cover'
				/>
			</div>

			<div className='relative h-56'>
				<Image
					src={
						'https://images.unsplash.com/photo-1546487858-272c3f1e10e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFpc2FqZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
					}
					alt='imagen 5'
					width={500}
					height={500}
					layout='fill'
					objectFit='cover'
				/>
			</div>

			<div className='relative h-56'>
				<Image
					src={
						'https://images.unsplash.com/photo-1518965723674-44cd4aff50d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFpc2FqZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
					}
					alt='imagen 6'
					width={500}
					height={500}
					layout='fill'
					objectFit='cover'
				/>
			</div>
		</div>
	);
};

export default Galeria;
