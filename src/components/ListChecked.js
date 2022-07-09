import {useState} from 'react';
import {Link} from 'react-router-dom';

const ListChecked = (props) => {
    const {item, index, onDelete, onUncheck} = props;
    const [checked, setChecked] = useState(true);

    const uncheck = () => {
        console.log("uncheck item ::", index);
        setChecked(!checked);
        onUncheck(index);
    };

    return (
        <div className="container list-item py-2">
            <div className="row">
                <div className="col-1">
                    {/*<input className="" type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)}></input>*/}
                    <input className="form-check-input me-1 bg-secondary" type="checkbox" checked={checked} onChange={uncheck}></input>
                </div>
                <div className="col-8 col-md-9 text-start">{item}</div>
                <div className="col-2 col-md-1">
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => onDelete(index)}>
                        <span className="bi-trash"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListChecked