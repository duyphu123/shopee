import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props {
 type:React.HTMLInputTypeAttribute
 errorMessage?: string
 classNameInput?: string
 classNameError?: string
 placeholder?: string
 className?: string
 name: string
 register: UseFormRegister<any>
 rules?: RegisterOptions
 autoComplete?:string
}
export default function Input({
  autoComplete,
  type,
  placeholder,
  errorMessage,
  className,
  name,
  register,
  rules,
  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
  classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
  // classNameEye = 'absolute top-[8px] right-[5px] h-5 w-5 cursor-pointer',
  ...rest
}: Props) {
  return(
    <div className={className}>
        <input type={type}
        className='p-3 w-full outline-none border border-gray-300 forcus:border-gray-500 rounded-sm focus:shadow-sm'
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name,rules)} />
        <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm' >{errorMessage}</div>
    </div>
  )
 }