import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfileThunkCreator, updateStatus} from "../../redux/profile-reducer";
import { withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 14752;
        }
        this.props.getUserProfileThunkCreator(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profle={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose (connect(mapStateToProps, {getUserProfileThunkCreator, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
) (ProfileContainer)