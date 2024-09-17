
import { ProgressBar } from '@primer/react';

function Status({ className, message = '', percent = 0 }) {
    return (
        <ProgressBar aria-valuenow={percent} aria-label="Upload test.png">
            <ProgressBar.Item progress={percent} />
            <ProgressBar.Item
                progress={percent}
                sx={{
                    backgroundColor: 'danger.emphasis',
                }}
            />
            
        </ProgressBar>
    );
}

export default Status;