import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Pagination = (props) => {
    const {items, onChangePage} = props;
    const {id} = useParams();
    const [page, setPage] = useState((id) ? id : 1);
    const [pages, setPages] = useState((id) ? id : 1);
    const perPage=5;

    useEffect(() => {
        const pgs =  (items.length%perPage > 0) ? Math.floor(items.length/perPage) + 1 : Math.floor(items.length/perPage);
        setPages(pgs);
        if (page <= pages) {
            onChangePage(page);
        } else {
            onChangePage(pages);
        }
    },[items,page]);

    const renderPages = () => {
        let pgs = [];

        let p_c = '';
        if (page == 1) {
            p_c = 'disabled';
        }
        pgs.push(<li className={`page-item ${p_c}`} key={0}><Link className="page-link" onClick={()=>setPage(page-1)} to={`/${page-1}`}><span aria-hidden="true">&laquo;</span></Link></li>);
        for (let i=1; i<=pages; i++){
            if (i == page) {
                pgs.push(<li className="page-item active" key={i}><Link className="page-link" onClick={()=>setPage(i)} to={`/${i}`}>{i}</Link></li>);
            } else {
                pgs.push(<li className="page-item" key={i}><Link className="page-link" onClick={()=>setPage(i)} to={`/${i}`}>{i}</Link></li>);
            }
        }

        let n_c = '';
        if(page >= pages) {
            n_c = 'disabled';
        }
        pgs.push(<li className={`page-item ${n_c}`} key={pages+1}><Link className="page-link" onClick={()=>setPage(page+1)} to={`/${page+1}`}> <span aria-hidden="true">&raquo;</span></Link></li>);

        return pgs;
    };

    return (
        <div className="pt-3">
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    {renderPages()}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination