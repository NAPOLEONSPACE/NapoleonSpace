
import { Container, FormWrap, FormContent, Form,FormInput,FormH1,FormLabel,FormButton,FormLabel1 } from './Elements.jsx'
import Headert from "./Header.jsx"

export default function Reservation() {
  return (
    <>
      <section className="home">
      <Container>
<Headert/>
      <FormWrap>
        <FormContent>
        <Form action='https://getform.io/f/e9a3c914-15df-4cb9-ad22-c30bd16b463a' method="POST">
            <FormH1><h3>Reservation</h3></FormH1>
            <FormLabel type="email" name="email">Email</FormLabel>
              <FormInput type="email" name="email" required />
            <FormLabel type="text" name="name">Name</FormLabel>
              <FormInput type="text" name="name"required/>
              <FormLabel type="text" name="name">Age</FormLabel>
              <FormInput type="number" name="age"required/>
              <FormLabel1>Choose a destination</FormLabel1>
              <>
              <select id="Destination" name="plante">
              <option value="Moon">Moon</option>
              <option value="Mars">Mars</option>
              <option value="Europa">Europa</option>
              <option value="Titan">Titan</option>
              </select>
              </>
            <FormButton type='submit'>Send</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
    </section>
  </>
  )
}
