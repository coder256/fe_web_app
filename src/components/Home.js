import React, {useEffect, useState} from 'react';
import ListItem from "./ListItem";
import ListChecked from "./ListChecked";
import Pagination from "./Pagination";

const Home = () => {
    const [items, setItems] = useState(localStorage.getItem('items')? JSON.parse(localStorage.getItem('items')):[]);
    const [checked, setChecked] = useState(localStorage.getItem('checked')? JSON.parse(localStorage.getItem('checked')):[]);
    const [newItem, setNewItem] = useState('');
    const [displayItems, setDisplayItems] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        console.log('use effect hook ran ::', items);
        console.log('use effect hook page ::', page);
        localStorage.setItem('items', JSON.stringify(items));
        localStorage.setItem('checked', JSON.stringify(checked));
        if (page > 0) {
            changePage(page);
        }
    },[items, checked, page]);

    const newItemOnChange = (event) => {
        setNewItem(event.target.value);
    };

    const saveItem = (event) => {
        event.preventDefault();
        console.log('New item to be saved ::', newItem);
        setItems([...items, newItem]);
        // localStorage.setItem('items', JSON.stringify(items));
        setNewItem('');
    };

    const deleteItem = (index) => {
        console.log("tryna delete item ::" + index);
        let itemsCopy = Object.assign([], items);
        itemsCopy.splice(index, 1);
        setItems(itemsCopy);
    };

    const checkItem = (index) => {
        console.log("tryna check item ::" + index);
        let checkedCopy = Object.assign([], checked);
        checkedCopy.push(items[index]);
        setChecked(checkedCopy);
        let itemsCopy = Object.assign([], items);
        itemsCopy.splice(index, 1);
        setItems(itemsCopy);
    };

    const deleteChecked = (index) => {
        console.log("tryna delete checked ::" + index);
        let checkedCopy = Object.assign([], checked);
        checkedCopy.splice(index, 1);
        setChecked(checkedCopy);
    };

    const uncheckItem = (index) => {
        console.log("tryna uncheck item ::" + index);
        let itemsCopy = Object.assign([], items);
        itemsCopy.push(checked[index]);
        setItems(itemsCopy);
        let checkedCopy = Object.assign([], checked);
        checkedCopy.splice(index, 1);
        setChecked(checkedCopy);
    };

    const changePage = (pg) => {
        console.log("go to page ::", pg);
        setPage(pg);
        let itemsCopy = Object.assign([], items);
        // console.log(itemsCopy.slice((pg-1)*5,5));
        setDisplayItems(itemsCopy.slice((pg-1)*5,pg*5));
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
                        displayItems.map((item, index) => {
                            return <ListItem item={item} index={index} onDelete={deleteItem} onChecked={checkItem} key={index}/>
                        })
                        :
                        <div className="text-muted"><h5>No items</h5></div>
                }
            </div>

            <Pagination items={items} onChangePage={changePage} />

            <hr className="divider mt-5"/>

            <div className="checked-items mt-5">
                <h5>Completed items</h5>
                {
                    checked.length ?
                        checked.map((ci, index) => {
                            return <ListChecked item={ci} index={index} onDelete={deleteChecked} onUncheck={uncheckItem} key={index}/>
                        })
                        :
                        <div className="text-muted"><h6>No completed items yet</h6></div>
                }
            </div>
        </div>
    );
};

export default Home