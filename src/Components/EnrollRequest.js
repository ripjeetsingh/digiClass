import {Component} from "react";
import { connect } from 'react-redux';

class EnrollReq extends Component{
    render(){
        return(
            <>
                Home
                {this.props.name}
            </>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		name: state.user.firstName,
	};

};

export default connect(mapStateToProps)(EnrollReq);