import { useState, useContext } from 'react'
import { ReRenderContext } from '../../contexts/ReRenderContext';
import { AxiosError } from 'axios'

import videoApi from '../../apis/video';

import Input from '../Input'
import Button from '../Button';


const initialInputError = {
  category_id: '',
  src: '',
  thumbnail: ''
};

export default function AddVideoForm({ category_id, onSuccess }) {
  const { reRender } = useContext(ReRenderContext)

  const initialInput = {
    category_id,
    src: '',
    thumbnail: ''
  };

  const [input, setInput] = useState(initialInput);
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)

  const handleChangeInput = e => setInput({ ...input, [e.target.name]: e.target.value });
  const handleFileChange = e => setFile(e.target.files[0])

  const handleSubmitForm = async e => {
    e.preventDefault();
      setUploading(true)
    try {
      // const error = validateLogin(input);
      // if (error) return setInputError(error);
      // setInputError(initialInputError);

      const formData = new FormData();
      if (file) Object.keys({ ...input, thumbnail: file }).forEach(key => formData.append(key, { ...input, thumbnail: file }[key]));
      else Object.keys(input).forEach(key => formData.append(key, input[key]));

      await videoApi.addVideo(formData)
      onSuccess()
      reRender()

    } catch (err) {
      console.log(err);

      if (err instanceof AxiosError) {
        const message =
          err.response.status === 400
            ? 'Invalid input'
            : 'Internal server error';
        // Handle error (e.g., show a toast notification)
      }
    } finally {
      setUploading(false); // Reset loading state
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm} >
        <div className='grid gap-10 '>
        <Input 
          label="Category ID" 
          name="category_id" 
          value={input.category_id} 
          onChange={handleChangeInput} 
          error={initialInputError.category_id}
        />
        <Input 
          label="Source" 
          name="src" 
          value={input.src} 
          onChange={handleChangeInput} 
          error={initialInputError.src}
        />
        <Input 
          label="Thumbnail" 
          name="thumbnail" 
          value={input.thumbnail} 
          onChange={handleChangeInput} 
          error={initialInputError.thumbnail}
        />
        <div>
          <label htmlFor="file">Upload Thumbnail:</label>
          <input type="file" id="file" name="file" onChange={handleFileChange} />
        </div>
        
        <div className='mt-5 flex justify-center'>
          <Button bg='black' disabled={uploading}>
            {uploading ? 'Uploading...':'Submit'}
          </Button>
        </div>
        </div>
      </form>
    </div>
  )
}
