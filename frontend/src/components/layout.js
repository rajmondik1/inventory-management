import React from 'react';
import Header from './layout/header'
import Footer from "./layout/footer";
import Main from "./layout/main";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./user/login.component";
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
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
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
