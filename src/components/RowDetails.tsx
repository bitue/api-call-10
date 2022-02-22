import React from 'react';
import { useLocation } from 'react-router-dom';
import { apiPost } from '../model/apiPost';

const RowDetails = () => {
 
    const {state} = useLocation<apiPost>();
 
    return (
        <div data-testid="row">
         <code>
             {
              JSON.stringify(state)
             }
         </code>
      </div>
    );
};

export default RowDetails;