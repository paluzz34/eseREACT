import { useEffect , useState } from "react"

export function GitHubUser({username}){
    
    const [data , setData] = useState(null)
    const [loading , setLoading] = useState(false)
    
    async function getData(){
        
        setLoading(true)

        try {
            const res = await fetch(`https://api.github.com/users/${username}`)
            const data = await res.json()
            setData(data)
            console.log(data);
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(()=>{
        getData(username)
    },[username])

    return (
        <div>
            {loading && <h1>Loading..</h1>}
            {data && <div className='container'>
                <h1>Welcome: {data.name}!</h1>
                <p>Your username is: {data.login}</p>
                <p>Your avatar is:</p>
                <img src={data.avatar_url} alt='avatar' width="300px"/>
            </div>}
        </div>
    )
}