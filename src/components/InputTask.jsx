export const InputTask = ({placeholder,onchange,value})=>{
    return(
        <>
        <input value={value} placeholder={placeholder} onChange={onchange} type="text" />
        </>
    )
}