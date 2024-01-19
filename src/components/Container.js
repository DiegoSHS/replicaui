export default function Container({ children, ...props }) {
    return (
        <div className='container mx-auto px-5 bg-gray-100'{...props}>{children}</div>
    )
}
