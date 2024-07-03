import React from 'react'

function UTCtime() {
    const [time, setTime] =
        React.useState(new Date().toUTCString());

        React.useEffect(() => { const intervalId = setInterval(() => {
            setTime(new Date().toUTCString());
        }, 1000); //updates every second
        
        return () => clearInterval(intervalId);
    }, []);

    return <div>Current UTC time: {time} </div>;
}

export default UTCtime;
