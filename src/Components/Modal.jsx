import React from 'react'

const Modal = ({ project, onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div onClick={handleOverlayClick} className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className='bg-white rounded border-2 border-black w-[60%] h-[80%]'>
                <div className='flex justify-center items-center'>
                    <img 
                    src={project.image}
                    alt="Error loading project Image" />
                </div>
                <div className='flex justify-center items-center'>
                    <p>
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Modal