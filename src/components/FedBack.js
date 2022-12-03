import { NavLink } from "react-router-dom"
import { Container, FormWrap, Icon, FormContent, Form,FormInput,FormH1,FormLabel,FormButton,FormLabel1,FormInputMessage} from './Elements.jsx'
import Headert from "./Header.jsx"

export default function FedBack() {
  return (
    <>
      <section className="home">
      <Container>
<Headert/>
      <FormWrap>
        <FormContent>
        <Form action='https://getform.io/f/aa3b883e-957f-4ac5-bda2-781cf36a2951' method="POST">
            <FormH1>Feedback</FormH1>
            <FormLabel type="email" name="email">Email</FormLabel>
              <FormInput type="email" name="email" required />
            <FormLabel type="text" name="name">Name</FormLabel>
              <FormInput type="text" name="name"required/>
              <FormLabel1 input type="text" name="message">Message</FormLabel1>
              <FormInputMessage type="Text" name="message" required />
            <FormButton type='submit'>Send</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
    </section>
  </>
  )
}
