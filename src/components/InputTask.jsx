export const InputTask = ({placeholder,onchange,value,classe})=>{
    return(
        <>
        <input className={classe} value={value} placeholder={placeholder} onChange={onchange} type="text" />
        </>
    )
}