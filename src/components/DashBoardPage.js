import React from 'react';
import {Link} from 'react-router-dom';


export default () => (<div>Dashboard
                        <Link to='/general-tasks-page'>GeneralTasksPage</Link>
                        <Link to='/sales-tasks-page'>SalesTaskPage</Link>
                    </div>)