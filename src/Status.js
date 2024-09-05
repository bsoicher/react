
import ProgressBar from 'react-bootstrap/ProgressBar';

function Status({ className, message = '', percent = 0 }) {
    return (
        <>
            <ProgressBar>
                <ProgressBar variant="success" now={percent} />
                <ProgressBar variant="info" now={20} />
                <ProgressBar variant="danger" now={2} />
            </ProgressBar>
            
            <p>{message}</p>
        </>
    );
}

export default Status;