import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@material-ui/core';

import './PageNotFound.scss';


const PageNotFound = () => {

    return (
        <div className="page-not-found-wrapper">
            <Card className="card">
                <CardContent className="card-content">
                    <h1>Page Not Found !!!</h1>
                    <Link to="/">Return Home</Link>
                </CardContent>
            </Card>
        </div>
    );

};

export default PageNotFound;