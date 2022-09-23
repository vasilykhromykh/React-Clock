import React from 'react';
import './App.css';


function App() {
    const [time, setTime] = React.useState({seconds: 0, minutes: 0, hours: 0})
    React.useEffect(() => {
        const interval = setInterval(() => {
            let a = new Date()
            setTime({
                seconds: a.getSeconds(),
                minutes: a.getMinutes(),
                hours: a.getHours(),
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="App">
            <div className='watchWrap'>
                <div className='blop'> </div>
                <div style={{zIndex: '3', transform: `rotateZ(${time.seconds * 6 + 90 + 'deg'})`}} className='stick'>
                    <div className='f'> </div>
                    <div className='s'> </div>
                </div>
                <div style={{
                    position: 'absolute',
                    width: '650px',
                    zIndex: '2',
                    transform: `rotateZ(${time.minutes * 6 + 90 + 'deg'})`
                }} className='stick'>
                    <div style={{height: '10px', width: '300px'}} className='f'> </div>
                    <div style={{height: '10px', width: '300px'}} className='s'> </div>
                </div>
                <div style={{
                    position: 'absolute',
                    zIndex: '1',
                    transform: `rotateZ(${time.hours * 30 + time.minutes * 0.5 + 90 + 'deg'})`
                }}
                     className='stick'>
                    <div style={{height: '15px', width: '250px', backgroundColor: "red"}} className='f'> </div>
                    <div style={{width: '250px'}} className='s'> </div>
                </div>

            </div>

        </div>
    );
}

export default App;
