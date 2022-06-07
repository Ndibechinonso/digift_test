const Button = ({ className, text, clickfxn, icon }) => {
    return (
        <button onClick={clickfxn} className={`flex flex-row items-center rounded ${className}`}><span>{text}</span><span><img src={icon} alt="" /></span></button>
    )
}

export default Button