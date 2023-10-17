import { useEffect, useState } from "react";

const Section3 = () => {
    const [data, setData] = useState("");

    const dispatchSection3 = () => {
        const eventData = "Section 3";
        const event = new CustomEvent('newEvent3', {
            detail: {
                type: 'newType3',
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
            <h3>Section3</h3>
            <button onClick={dispatchSection3}>Section 3</button>
            {data}
        </div>
    )
}

export default Section3