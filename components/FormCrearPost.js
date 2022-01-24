const FormCrearPost = () => {
	return (
		<form className='bg-white max-w-screen-sm mx-auto shadow-md rounded-md p-10 space-y-4'>
			<div>
				<label htmlFor='titulo' className='sr-only'>
					Título
				</label>

				<input
					type='text'
					className='w-full focus:outline-none rounded p-2 focus:ring-2 focus:ring-sky-500/50 shadow shadow-sky-100'
					placeholder='Título'
				/>
			</div>

			<div>
				<label htmlFor='descripcion' className='sr-only'>
					Descripcion
				</label>

				<input
					type='text'
					className='w-full focus:outline-none rounded p-2 focus:ring-2 focus:ring-sky-500/50 shadow shadow-sky-100'
					placeholder='Descripción'
				/>
			</div>

			<div>
				<label htmlFor='archivo' className='sr-only'>
					Archivo
				</label>

				<input
					type='file'
					className='text-slate-500/0 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:shadow-md file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100 file:cursor-pointer p-2 '
				/>
			</div>

			<input
				type='submit'
				className='btn bg-sky-600 hover:bg-sky-700 w-full mt-4'
				value='Publicar'
			/>
		</form>
	);
};

export default FormCrearPost;
