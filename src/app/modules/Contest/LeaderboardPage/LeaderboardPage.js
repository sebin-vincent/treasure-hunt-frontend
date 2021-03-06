import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';

import { getLeaderboard } from '../Contest.service';
import { formatDate } from '../../../../config/Utils';
import AppContainer from '../../../components/AppContainer/AppContainer';

import './LeaderboardPage.scss';


const LeaderboardPage = () => {

    const DEFAULT_PAGE = 1;
    const DEFAUT_PAGE_SIZE = 100;

    const params = useParams();
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        let contestId = params.id;
        getLeaderboardList(contestId);
        window.scrollTo(0, 0);
    }, [params.id]);

    const getLeaderboardList = (id, page = DEFAULT_PAGE, limit = DEFAUT_PAGE_SIZE) => {
        getLeaderboard(id, page, limit)
            .then(res => {
                if (res && res.contestName) {
                    setTitle(res.contestName);
                }
                setLeaderboard(res.leaderBoard);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const gotoPlay = () => {
        history.push(`/contest/${params.id}`);
    };

    return (
        <AppContainer>
            <div className="leaderboard-wrapper">
                <article className="leaderboard-card-wrapper">
                    <div className="card-header-wrapper">
                        <h1 className="title">{`${title} Leaderboard`}</h1>
                        <Button variant="contained" color="primary" onClick={gotoPlay}>Play</Button>
                    </div>
                    <ul className="leaderboard-list-wrapper">
                        <li className="list-item-container">
                            <span className="rank">Rank</span>
                            <span className="name">Name</span>
                            <span className="level">Level</span>
                            <span className="time">Time Completed</span>
                        </li>
                        {
                            leaderboard &&
                            leaderboard.map((person, index) =>
                                <li className="list-item-container" key={index}>
                                    <span className="rank">{`${index + 1}.`}</span>
                                    <span className="name">{person.name}</span>
                                    <span className="level">{person.level}</span>
                                    <span className="time">{formatDate(person.completedIn, "MMM D, YYYY, hh : mm a")}</span>
                                </li>
                            )
                        }
                    </ul>
                </article>
            </div>
        </AppContainer>
    );

};

export default LeaderboardPage;