import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Input({ children, ...props }) {
    return (
        <input type='text' className='text-black w-full p-2 m-2 border-2 border-red-200 rounded-md hover:border-red-400' {...props}>{children}</input>
    )
}
export const Paper = ({ children, ...props }) => {
    return (
        <div {...props}>{children}</div>
    )
}
export const Button = ({ children }) => {
    return (
        <button className='m-2 w-fit bg-red-600 px-6 py-2 rounded-full text-white'>{children}</button>
    )
}

export const ReadMore = () => {
    return (
        <button className='text-red-400 flex items-center gap-2 hover:text-red-600'>Read more<ArrowRightIcon width={20} /></button>
    )
}
