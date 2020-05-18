import React from 'react';
import RegisterForm from './RegisterForm.jsx';
import AttendeeList from './AttendeeList.jsx';


class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        beginner: [],
        intermediate: [],
        expert: [],
    }
}



render () {
    return (
        <div className="main">
            <RegisterForm />
            <AttendeeList />
        </div>
    )
}
}

export default App;
