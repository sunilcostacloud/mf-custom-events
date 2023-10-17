import { useEffect, useState } from "react";

const Section1 = () => {
    const [data, setData] = useState("");

    const dispatchSection1 = () => {
        const eventData = "Section 1";
        const event = new CustomEvent('newEvent1', {
            detail: {
                type: 'newType1',
                data: eventData,
            },
        });

        window.dispatchEvent(event);
    }

    useEffect(() => {
        const handleEvent = (event) => {
            if (event.detail.type === 'newType1') {
                setData(event.detail.data)
            }
        };

        window.addEventListener('newEvent1', handleEvent);

        return () => {
            window.removeEventListener('newEvent1', handleEvent);
        };
    }, []);

    useEffect(() => {
        const handleEvent = (event) => {
            if (event.detail.type === 'newType2') {
                setData(event.detail.data)
            }
        };

        window.addEventListener('newEvent2', handleEvent);

        return () => {
            window.removeEventListener('newEvent2', handleEvent);
        };
    }, []);

    useEffect(() => {
        const handleEvent = (event) => {
            if (event.detail.type === 'newType3') {
                setData(event.detail.data)
            }
        };

        window.addEventListener('newEvent3', handleEvent);

        return () => {
            window.removeEventListener('newEvent3', handleEvent);
        };
    }, []);

    return (
        <div>
            <h3>HOST</h3>
            <button onClick={dispatchSection1} >Section 1</button>
            {data}
        </div>
    )
}

export default Section1