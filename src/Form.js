import React from "react";
import FormDetails from "./FormDetails";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      city: "",
      users: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeCity = event => {
    this.setState({ city: event.target.value });
  };

  onEdit = id => {
    const selectedUser = this.state.users.find(each => each.id === id);
    this.setState({
      name: selectedUser.name,
      city: selectedUser.city,
      id: selectedUser.id
    });
  };

  onDelete = id => {
    const updatedUsers = this.state.users.filter(each => each.id !== id);
    this.setState({ users: updatedUsers });
  };

  handleSubmit(event) {
    const { name, city, id, users } = this.state;
    event.preventDefault();
    if (name === "" || city === "") {
      alert("Fill all fields!!!");
    } else {
      if (id === undefined) {
        const user = { name, city, id: Math.random() };
        this.setState({
          users: [...users, user],
          name: "",
          city: ""
        });
      } else {
        users.map(each => {
          if (each.id === id) {
            each.name = name;
            each.city = city;
          }
          return each;
        });

        this.setState({ id: undefined, name: "", city: "" });
      }
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              value={this.state.city}
              onChange={this.handleChangeCity}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.users && (
          <FormDetails
            users={this.state.users}
            onEdit={this.onEdit}
            onDelete={this.onDelete}
          />
        )}
      </div>
    );
  }
}

export default Form;
