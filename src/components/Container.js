import React from 'react'

export default function Container({ children, ...props }) {
    return (
        <div className='container mx-auto px-5'{...props}>{children}</div>
    )
}
