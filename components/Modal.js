"use client";
import dynamic from 'next/dynamic'
const Plyr = dynamic(() => import("plyr-react"), { ssr: false });
const Modal = ({ src, setShowModal }) => {
    return (
        <div onClick={() => setShowModal(false)} style={{width: '100vw'}}>
            <div style={{ 'maxWidth': '855px', margin: '0 auto'}} onClick={e => e.stopPropagation()}>
                <Plyr source={src} src={src}/>
            </div>
        </div>
    )
}

export default Modal