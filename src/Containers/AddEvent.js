import React, { Component } from 'react';
import SimpleBox from '../Components/SimpleBox';
import InputField from '../Components/InputField';
import FooterFormButton from '../Components/FooterFormButton';
import { addEvent} from '../Actions/UserActions';
import { connect } from 'react-redux';
import ErrorAlert from '../Components/ErrorAlert';
import { Field, reduxForm } from 'redux-form';
import {required } from '../Helpers/ReduxFormValidation';
import Header from '../Containers/Header';
class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onSubmit(data) {
    console.log(data);
    console.log(this.props.userData[this.props.uid]);
    // this.props.addEvent(uid, data).catch((err) => {
    //     this.setState({
    //       error: err
    //     });
    //   }
    // );
  }


  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Header loggedIn={true}/>
        <SimpleBox title="Add Event">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="card-body">
              <Field
                name="Title"
                component={InputField}
                label="Title"
                validate={[required]}
                required={true}
                type="title"
              />
              <Field
                name="Date"
                component={InputField}
                label="Date"
                validate={required}
                required={true}
                type="date"
              />
              <Field
                name="Location"
                component={InputField}
                label="Location"
                validate={[required]}
                required={true}
                type="location"
              />
              <Field
                name="Description"
                component={InputField}
                label="Description"
                validate={required}
                required={true}
                type="description"
              />
              {this.state.error && <ErrorAlert>Error Occured</ErrorAlert>}
              <FooterFormButton submitLabel="Create Event" otherLabel="Events"
                                goToLink="/Events" {...this.props}
              />
            </div>
          </form>
        </SimpleBox>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const checkedUser = state.user || {};
  return {
    uid: checkedUser.uid,
    userData: state.dbUsers};
}

let form = reduxForm({
  form: 'AddEventForm'
})(AddEvent);

form = connect(mapStateToProps, {})(form);

export default form;
