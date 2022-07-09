import React, {useEffect, useRef} from 'react';

const Edit = () => {

    useEffect(() => {
        //focus input
        console.log('use effect hook ran on edit');
    },[]);

    return (
        <div>
            <h3>Edit</h3>
        </div>
    );
};

export default Edit