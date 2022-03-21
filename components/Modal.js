import Plyr from 'plyr-react'
const Modal = ({ src, setShowModal }) => {
    const videoSrc = {
        type: "video",
        sources: [
            {
                src: src,
                provider: "youtube"
            }
        ]
    };
    return (
        <div onClick={() => setShowModal(false)} style={{width: '100vw'}}>
            <div style={{ 'maxWidth': '855px', margin: '0 auto'}} onClick={e => e.stopPropagation()}>
                <Plyr source={videoSrc} />
            </div>
        </div>
    )
}

export default Modal