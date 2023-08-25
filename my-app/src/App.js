import React, { Component } from "react";

// class based component
class App extends Component {
  state = {
    firstName: "alina",
    age: 20,
    designation: "developer",
    city: "pune",
    arr: [90, 30, 39],
    contact: {
      email: "admin@gmail.com",
    },
    employeeData: [
      {
        name: "",
        age: 22,
        id: 3,
      },
      {
        name: "",
        age: 24,
        id: 2,
      },
      {
        name: "",
        age: 25,
        id: 1,
      },
    ],
    products: [
      { id: 1, name: 'Product A', price: 19.99 },
      { id: 2, name: 'Product B', price: 29.99 },
      { id: 3, name: 'Product C', price: 9.99 },
    ],
    userProfile: {
      id: 1,
      username: "user123",
      status: "active",
    },
  };

  handleUpdate = () => {
    // this is referring to App
    // to update state
    this.setState({
      designation: "manager",
      age: 30,
    });
  };

  handleProfileUpdate = () => {
    this.setState(prevState => ({
      userProfile: {
        ...prevState.userProfile,
        status: "inactive",
      },
    }));
  };

  render() {
    return (
      // this is referring to App
      // JSX
      <div>
        <p>
          My name is {this.state.firstName} age: {this.state.age}, working as a{" "}
          {this.state.designation}
        </p>
        <p>Contact: {this.state.contact.email}</p>
        <p>
          {this.state.arr.map((e) => {
            return <p>{e}</p>;
          })}
        </p>

        <button onClick={this.handleUpdate}>Submit</button>
        <button onClick={this.handleProfileUpdate}>Update Profile Status</button>

        <h1>Product List</h1>
        <ul>
          {this.state.products.map(product => (
            <li key={product.id}>
              <strong>Name:</strong> {product.name} | <strong>Price:</strong> ${product.price.toFixed(2)}
            </li>
          ))}
        </ul>

        <h1>User Profile</h1>
        <p>
          <strong>ID:</strong> {this.state.userProfile.id} |{" "}
          <strong>Username:</strong> {this.state.userProfile.username} |{" "}
          <strong>Status:</strong> {this.state.userProfile.status}
        </p>
      </div>
    );
  }
}

export default App;
