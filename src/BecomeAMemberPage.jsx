import { Row, Col } from 'react-bootstrap';
import { useFormDefaults } from './hooksAndUtils/useFormDefaults';
import { useState } from 'react';
import { useGet } from './hooksAndUtils/useFetch';

export default function BecomeAMember() {

  let { defaults, formData } = useFormDefaults();

  const [people, setPeople] = useState([]);
  useGet('/api/people', setPeople);
  console.log('people', people);

  return <form>
    <Row><Col>
      <h1>Become a member</h1>
      <input {...defaults('firstName', 'First name')} />
      <input {...defaults('lastName', 'Last name')} />
      <input {...defaults(
        'phone', 'Phone', { minLength: 8, type: 'tel' },
        val => /^\d*$/.test(val), 'Only use digits in your phone number!'
      )} />
      <input {...defaults('email', 'E-mail', { type: 'email' })} />
      <select {...defaults('howDidYouHear', '', { className: 'form-select mt-3' })}>
        <option value="">How did you hear about us?</option>
        <option>From a friend</option>
        <option>On an Internet forum</option>
        <option>Somewhere else </option>
      </select>
      <input {...defaults(
        'password', 'Choose a password',
        { minLength: 8, type: 'password' },
        val => /\d/.test(val) && /[A-Z]/.test(val) && /[a-z]/.test(val),
        'The password must contain a capital letter, a lowercase letter and a digit!'
      )} />
      <input {...defaults(
        'confirmPassword', 'Confirm your password',
        { minLength: 8, type: 'password' },
        val => val === formData.password, 'You must match the password!'
      )} />
      <button className="d-block mt-3 btn btn-primary" type="submit">
        Become a member
      </button>
    </Col></Row>
  </form>;
}