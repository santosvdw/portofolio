import '../scss/overlays.scss'

export default function Overlays () {
    return (
        <div className='overlays'>
            <div id='overlay-left'>
                <i className="bi bi-github"></i>
                <i className="bi bi-envelope-fill"></i>
            </div>
            <div id='overlay-right'></div>
        </div>
    )
}