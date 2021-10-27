import { useState } from 'react';

function IsWin(statusGame) {
    const [isWin, setWinner] = useState(null);

    function handleStatusChange(status) {
        setWinner(status.IsWin)
    }

    return isWin;

}

export default IsWin;

