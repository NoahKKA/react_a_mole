import molehill from '../embedded/molehill.png'
import { useEffect } from 'react'

export default function Empty({ setIsShowing }){
    useEffect(() => {
        let randMillis = Math.ceil(Math.random() * 3000 + 500)
        let timer = setTimeout(() => {
            setIsShowing(true)
        }, randMillis)

        return () => clearTimeout(timer)

    }, [])

    return(
        <div>
        <img style={{width: '30vw'}}
             src={molehill} />
        </div>
    )
}