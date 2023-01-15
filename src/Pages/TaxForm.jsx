import React, {useState} from 'react'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
const TaxForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
  
    const submitForm = (event) => {
      event.preventDefault();
      // submit formData to a server
      navigate("/result", { state: { formData } });
    };
  return (
    <div>
      <Container>
        <h1>คำนวณเงินเดือน</h1>
        <hr/>
    <Form onSubmit={submitForm}>
      <FormGroup>
        <Label for="name">เงินเดือน</Label>
        <Input 
        type="number" 
        name="income" 
        id="income"
        placeholder="฿"
        required
        onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="name">โบนัส</Label>
        <Input 
        type="number" 
        name="bonus" 
        id="bonus"
        placeholder="฿"
        required
        onChange={handleChange}
        />
      </FormGroup>
    <Button color="primary">คำนวณ</Button>
    </Form>
    </Container>
    </div>
  )
}
export default TaxForm
