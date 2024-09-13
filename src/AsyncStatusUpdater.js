import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

function AsyncStatusUpdater() {
    const [status, setStatus] = useState(['Waiting...', 0]);
    const [isLoading, setIsLoading] = useState(false);

    const performAsyncTask = async () => {
        setIsLoading(true);
        setStatus(['Starting task...', 0]);

        try {
            // Simulate async task with a timeout
            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus(['Fetching beans', 30]);

            await new Promise(resolve => setTimeout(resolve, 2000));
            setStatus(['Counting beans', 50]);

            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus(['Beans counted', 100]);
        } catch (error) {
            setStatus(['Task failed!', 0]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <ProgressBar variant="success" now={status[1]} />
            <Button variant="link" disabled={isLoading} onClick={performAsyncTask} >
                Status: {status[0]}
            </Button>
        </>
    );
}

export default AsyncStatusUpdater;