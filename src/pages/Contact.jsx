import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./Contact.css";

const ProfileContent = () => {
  // State for form values
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  // State for form errors
  const [formErrors, setFormErrors] = useState({
    emailError: null,
    passwordError: null,
    addressError: null,
    cityError: null,
    stateError: null,
    zipError: null,
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("FORM SUBMITTED", formValues);
      // You can send the form data to an API or perform other actions here
    } else {
      console.log("Form has errors");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form values
    setFormValues({
      ...formValues,
      [name]: value,
    });

    // Update form errors
    if (name === "email") {
      setFormErrors({
        ...formErrors,
        emailError:
          value.length === 0
            ? "Email is required"
            : !/\S+@\S+\.\S+/.test(value)
            ? "Email is invalid"
            : null,
      });
    }

    if (name === "password") {
      setFormErrors({
        ...formErrors,
        passwordError:
          value.length === 0
            ? "Password is required"
            : value.length < 6
            ? "Password must be at least 6 characters"
            : null,
      });
    }

    if (name === "address") {
      setFormErrors({
        ...formErrors,
        addressError: value.length === 0 ? "Address is required" : null,
      });
    }

    if (name === "city") {
      setFormErrors({
        ...formErrors,
        cityError: value.length === 0 ? "City is required" : null,
      });
    }

    if (name === "state") {
      setFormErrors({
        ...formErrors,
        stateError:
          value.length === 0 || value === "Choose..."
            ? "State is required"
            : null,
      });
    }

    if (name === "zip") {
      setFormErrors({
        ...formErrors,
        zipError:
          value.length === 0
            ? "Zip is required"
            : !/^\d{5}$/.test(value)
            ? "Zip must be 5 digits"
            : null,
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {
      emailError:
        formValues.email.length === 0
          ? "Email is required"
          : !/\S+@\S+\.\S+/.test(formValues.email)
          ? "Email is invalid"
          : null,
      passwordError:
        formValues.password.length === 0
          ? "Password is required"
          : formValues.password.length < 6
          ? "Password must be at least 6 characters"
          : null,
      addressError:
        formValues.address.length === 0 ? "Address is required" : null,
      cityError: formValues.city.length === 0 ? "City is required" : null,
      stateError:
        formValues.state.length === 0 || formValues.state === "Choose..."
          ? "State is required"
          : null,
      zipError:
        formValues.zip.length === 0
          ? "Zip is required"
          : !/^\d{5}$/.test(formValues.zip)
          ? "Zip must be 5 digits"
          : null,
    };

    setFormErrors(errors);
    return Object.values(errors).every((error) => error === null); // Return true if no errors
  };

  return (
    <Container className="profileContent mt-5">
      <h1 className="mx-auto">Profile Information</h1>
      <p>This is the main content area.</p>
      <Form onSubmit={handleSubmit}>
        {/* Email */}
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            isInvalid={!!formErrors.emailError}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.emailError}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Password */}
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            isInvalid={!!formErrors.passwordError}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.passwordError}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Address */}
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="1234 Main St"
            value={formValues.address}
            onChange={handleChange}
            isInvalid={!!formErrors.addressError}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.addressError}
          </Form.Control.Feedback>
        </Form.Group>

        {/* City */}
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={formValues.city}
            onChange={handleChange}
            isInvalid={!!formErrors.cityError}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.cityError}
          </Form.Control.Feedback>
        </Form.Group>

        {/* State */}
        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control
            as="select"
            name="state"
            value={formValues.state}
            onChange={handleChange}
            isInvalid={!!formErrors.stateError}
          >
            <option>Choose...</option>
            <option>Alexanderia</option>
            <option>Cairo</option>
            <option>Mansoura</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {formErrors.stateError}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Zip */}
        <Form.Group>
          <Form.Label>Zip</Form.Label>
          <Form.Control
            type="text"
            name="zip"
            value={formValues.zip}
            onChange={handleChange}
            isInvalid={!!formErrors.zipError}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.zipError}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Submit Button */}
        <Button type="submit" variant="primary" className="mt-3">
          Sign in
        </Button>
      </Form>
    </Container>
  );
};

export default ProfileContent;
