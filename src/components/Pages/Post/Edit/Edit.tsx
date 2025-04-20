import Layout from '../../../Layout/Layout/Layout';
import useEdit from './useEdit';
import { IEditProps } from './IEditProps';

const Edit = ({ post }: IEditProps) => {
	const { title, body, error, handleSubmit, mutation, setTitle, setBody } = useEdit(post);

	return (
		<Layout>
			<h1 className='text-xl font-bold mb-4'>Edit Post</h1>

			<form
				onSubmit={handleSubmit}
				className='space-y-4'
			>
				{error && <p className='text-red-500'>{error}</p>}

				<div>
					<label
						className='block mb-1'
						htmlFor='title'
					>
						Title
					</label>
					<input
						id='title'
						type='text'
						className='w-full p-2 border rounded'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder='Enter post title'
					/>
				</div>

				<div>
					<label
						className='block mb-1'
						htmlFor='body'
					>
						Body
					</label>
					<textarea
						id='body'
						className='w-full p-2 border rounded'
						value={body}
						onChange={(e) => setBody(e.target.value)}
						placeholder='Enter post body'
						rows={6}
					/>
				</div>

				<button
					type='submit'
					className='bg-blue-500 text-white px-4 py-2 rounded'
					disabled={mutation.isPending}
				>
					{mutation.isPending ? 'Updating Post...' : 'Update Post'}
				</button>
			</form>
		</Layout>
	);
};

export default Edit;
