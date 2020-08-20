import React from 'react';
import Header from './header'
import Footer from "./footer";
import Main from "./main";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./user/register.component";


function Layout() {
    return (
        <React.Fragment>
            <Router>
                <Header/>
                <Main>
                    {/*<Route path="/" exact component={ExercisesList}/>*/}
                    {/*<Route path="/edit/:id" exact component={EditExercise}/>*/}
                    {/*<Route path="/create" exact component={CreateExercise}/>*/}
                    <Route path="/login" exact component={Register}/>
                </Main>

                <Footer/>
            </Router>
        </React.Fragment>
    );
}

// <Container fluid >
//     <Row> testt tarrtret</Row>
// </Container>

export default Layout;
