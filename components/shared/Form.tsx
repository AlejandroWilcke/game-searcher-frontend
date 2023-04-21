import { useForm } from 'react-hook-form';

type InputType = {
  type: string;
  placeholder: string;
  required: boolean;
  accept?: string;
  min?: number;
  max?: number;
}

interface FormProps {
  inputs: InputType[];
  onSubmit(data: any): any;
  submitText: string;
}

export default function Form({ inputs, onSubmit, submitText }: FormProps){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return(
    <form 
      className='mt-6 px-12 py-8 bg-slate-600/20 rounded-lg w-min justify-center'
      encType="multipart/form-data"
      onSubmit={handleSubmit(onSubmit)}>
      {inputs.map( ({ type, placeholder, required, accept, min ,max }, i) => {
        return(
          <input
            className='p-2 my-4 rounded-lg inline-block text-black min-w-full'
            key={i}
            type={type}
            placeholder={placeholder}
            min={min}
            max={max}
            accept={accept}
            {...register(placeholder.toLocaleLowerCase(), { required })}
          />
        )
      })}
      <div className='flex justify-center'>
        <button className='bg-sky-300/10 p-4 rounded-full border-2 border-transparent hover:border-2 hover:border-white' type="submit">{submitText}</button>
      </div>
    </form>
  )
}