import React from "react";
import { addUser, editUser, deleteUser } from "../action";
import { getUsers } from "../selector";
import { connect } from "react-redux";
import FormRenderer from "./FormRenderer";
import FormDetails from "./FormDetails";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: ""
    };
  }

  changeHandleName = event => {
    this.setState({ name: event.target.value });
  };
  changeHandleCity = event => {
    this.setState({ city: event.target.value });
  };

  onEdit = id => {
    const selectedUser = this.props.users.find(each => each.id === id);
    this.setState({
      name: selectedUser.name,
      city: selectedUser.city,
      id: selectedUser.id
    });
  };

  onDelete = id => {
    const { name, city } = this.state;
    const user = { name, city, id };
    this.props.deleteUser(user);
  };

  submitHandle = event => {
    event.preventDefault();
    const { name, city, id } = this.state;
    if (id === undefined) {
      const user = { name, city, id: Math.random() };
      this.props.addUser(user);
      this.setState({
        name: "",
        city: ""
      });
    } else {
      const user = { name, city, id };
      this.props.editUser(user);
      this.setState({ id: undefined, name: "", city: "" });
    }
  };

  render() {
    return (
      <div>
        <FormRenderer
          submitHandle={this.submitHandle}
          changeHandleName={this.changeHandleName}
          changeHandleCity={this.changeHandleCity}
          name={this.state.name}
          city={this.state.city}
        />
        {this.props.users && (
          <FormDetails
            users={this.props.users}
            onEdit={this.onEdit}
            onDelete={this.onDelete}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: getUsers(state)
});

const mapDispatchToProps = { addUser, editUser, deleteUser };

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
