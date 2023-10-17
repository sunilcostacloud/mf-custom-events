import { useEffect, useState } from "react";

const Section2 = () => {
    const [data, setData] = useState("");

    const dispatchSection2 = () => {
        const eventData = "Section 2";
        const event = new CustomEvent('newEvent2', {
            detail: {
                type: 'newType2',
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
            <h3>Section2</h3>
            <button onClick={dispatchSection2}>Section 2</button>
            {data}
        </div>
    )
}

export default Section2