import React, {useEffect, useState} from 'react'

const MainPage = () => {
    const [postData, setPostData] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => setPostData(data.posts))
    }, [])
    console.log(postData)
    return (
        <div>
            {postData ? (
                <div>
                    {postData.map((item) => (
                        <div>
                            <h1>{item.title}</h1>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default MainPage