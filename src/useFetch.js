import { useEffect, useState } from "react"

const useFetch = (URL) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const abortController = new AbortController()
        setTimeout(() => {
          fetch(URL, {signal: abortController.signal})
            .then(res => {
                if(!res.ok) throw Error('Could not fetch the data')
                return res.json();
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)

            })
            .catch((e) => {
                if(e.name === 'AbortError') { 
                    console.log("fetch aborted")
                } else {
                    setError(e.message)
                    setIsPending(false)
                }
            })
        }, 1000);

        return () => abortController.abort()
    }, [URL])

    return {data, isPending, error}

}
export default useFetch