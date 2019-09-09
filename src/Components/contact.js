import React from "react";
import { Route, Link } from "react-router-dom";


//const Contact = ({ match }) => <p> {match.params.id} </p>;

class Contact extends React.Component {
    render() {
         const { url } = this.props.match;
        return (
            <div>
                <h1> Contacts</h1>
                 <strong>  Select Contact</strong>
                <ul>
                    <li> <Link to="/contact/1"> Contact 1  </Link> </li>
                    <li> <Link to="/contact/2"> Contact 2  </Link> </li>
                    <li> <Link to="/contact/3"> Contact 3  </Link> </li>
                    <li> <Link to="/contact/4"> Contact 4  </Link> </li>
                </ul>
                <Route path ="/contact/:id" Component={Contact} />
            </div>
        )
    }
}
export default Contact;