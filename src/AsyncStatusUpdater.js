import React, { useState } from 'react';

import { ProgressBar, Link } from '@primer/react';

function AsyncStatusUpdater() {
    const [status, setStatus] = useState(['Waiting...', 0]);
    const [isLoading, setIsLoading] = useState(false);

    const performAsyncTask = async () => {
        setIsLoading(true);
        setStatus(['Starting task...', 0, 0]);

        try {
            // Simulate async task with a timeout
            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus(['Fetching beans', 30, 20]);

            await new Promise(resolve => setTimeout(resolve, 2000));
            setStatus(['Counting beans', 50, 5]);

            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus(['Beans counted', 80, 10]);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus(['Beans counted', 100, 0]);

        } catch (error) {
            setStatus(['Task failed!', 0, 0]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <ProgressBar aria-label="Upload test.png">
                <ProgressBar.Item progress={status[1]}
                    sx={{
                        backgroundColor: 'info.muted',
                        transition: 'width 0.5s ease'
                    }
                } 
          
                />
                <ProgressBar.Item
                    progress={status[2]}
                    sx={{
                        backgroundColor: 'success.muted',
                        transition: 'width 0.5s ease'
                    }}
                />
                
            </ProgressBar>
            <Link variant="link" disabled={isLoading} onClick={performAsyncTask} >
                Status: {status[0]}
            </Link>
        </>
    );
}

export default AsyncStatusUpdater;