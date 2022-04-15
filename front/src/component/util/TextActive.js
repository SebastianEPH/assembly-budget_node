export const TextActive = ({data={state: 0}}) =>{
    const {state, center} = data


    return(
        <>
            {center?
                <span className={state==="1"||  state===1? "text-active ms-1 me-1":" text-disable ms-1 me-1 "} >
                    {state==="1"||  state===1? ' Active ':' Disable '}
                </span>
            :
                <span className={state==="1"||  state===1? "text-active ms-3 me-3 mb-2 ":"text-disable ms-3 me-3 mb-2"} >
                    {state==="1"||  state===1? ' Active ':' Disable '}
                </span>
            }
        </>
    )
}