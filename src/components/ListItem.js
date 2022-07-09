import React, {useState,} from 'react';
import {Link, useParams} from 'react-router-dom';

const ListItem = (props) => {
    const {item, index, onDelete, onChecked} = props;
    const [checked, setChecked] = useState(false);
    const {id} = useParams();

    return (
        <div className="container list-item py-2">
            <div className="row">
                <div className="col-1">
                    <input className="form-check-input me-1" type="checkbox" checked={checked}  onChange={() => onChecked(index)} />
                </div>
                <div className="col-8 col-md-9 text-start">{item}</div>
                <div className="col-3 col-md-2">
                    <Link to={`/edit/${index}`}>
                        <button className="btn btn-sm btn-outline-secondary me-1">
                            <span className="bi-pencil"></span>
                        </button>
                    </Link>
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => onDelete(index)}>
                        <span className="bi-trash"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListItem