import React, { useEffect, useState } from 'react';

const MainPage = () => {
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/posts/1')
            .then(res => res.json())
            .then(data => setPostData(data))
            .catch(error => console.error("Произошла ошибка:", error));
    }, []);

    return (
        <div>
            {postData ? (
                <div>
                    <h1>{postData.title}</h1>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MainPage;



