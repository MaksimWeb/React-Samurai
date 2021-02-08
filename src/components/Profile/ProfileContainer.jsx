import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfileThunkCreator(userId);
    }

    render() {
        return (
            <Profile {...this.props} profle={this.props.profile}/>
        )
    }

}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {getUserProfileThunkCreator})(withUrlDataContainerComponent);