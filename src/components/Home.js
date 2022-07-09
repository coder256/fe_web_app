import React, {useEffect, useState} from 'react';
import ListItem from "./ListItem";

const Home = () => {

    // const [items, setItems] = useState([]);
    const [items, setItems] = useState(localStorage.getItem('items')? JSON.parse(localStorage.getItem('items')):[]);
    const [newItem, setNewItem] = useState([]);

    useEffect(() => {
        console.log('use effect hook ran ::', items);
    },[items]);

    const newItemOnChange = (event) => {
        setNewItem(event.target.value);
    };

    const saveItem = (event) => {
        event.preventDefault();
        console.log('New item to be saved ::', newItem);
        setItems([...items, newItem]);
        localStorage.setItem('items', JSON.stringify(items));
        setNewItem('');
    };

    const deleteItem = (index) => {
        console.log("tryna delete item ::" + index);
    };

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" value={newItem} placeholder="New Task" onChange={newItemOnChange}/>
                        </div>
                        <button className="btn btn-dark mt-2 w-100" onClick={saveItem}>Save</button>
                    </form>
                </div>
            </div>

            <div className="items mt-5">
                {
                    items.length ?
                        items.map((item, index) => {
                            return <ListItem item={item} index={index} onDelete={deleteItem} key={index}/>
                        })
                        :
                        <div className="text-muted"><h5>No items</h5></div>
                }
            </div>
        </div>
    );
};

export default Home