import React, {useState, useEffect, useContext} from 'react';
import { Link,useParams, Navigate } from 'react-router-dom';


function Edit () {
    const [item, setItem] = useState('');
    const {id} = useParams();
    const [oldItem,updateOldItem] = useState(JSON.parse(localStorage.getItem('items'))[id]);
    const [notFound, setNotFound] = useState(false);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        if (!oldItem) {
            setNotFound(true);
        }
        if (item) {
            const items = JSON.parse(localStorage.getItem('items'));
            items.splice(id, 1, item);
            localStorage.setItem('items', JSON.stringify(items));
        }
    },[item]);

    const onValueChange = (event) => {
        setUpdated(false);
        updateOldItem(event.target.value);
    };

    const updateItem = (event) => {
        event.preventDefault();
        setItem(oldItem);
        setUpdated(true);
    };

    return (
        <div>
            <div className="clearfix">
                <Link to="/" className="float-start"><button className="btn btn-dark"><span className="bi-arrow-left"></span>Back</button></Link>
            </div>
            <h5>Update Item({id})</h5>
            <form>
                <textarea type="text" className="form-control" value={oldItem} onChange={e => onValueChange(e)}/>
                <button className="btn btn-info w-100 mt-2" onClick={updateItem}>UPDATE</button>
            </form>
            {updated && <div className="alert alert-success mt-2">Update Successful</div>}
            {notFound && <Navigate replace to="/NotFound" />}
        </div>
    );
}

export default Edit