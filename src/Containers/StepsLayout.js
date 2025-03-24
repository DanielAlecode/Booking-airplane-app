import React from 'react';
import { Welcome } from '../Components/Welcome';

const StepsLayout = ({state, send}) => {
    const renderContent = () => {
        return <Welcome />
    }
    return(
        <div className='StepsLayout'>
            {renderContent()}
        </div>
    )
}

export default StepsLayout; 