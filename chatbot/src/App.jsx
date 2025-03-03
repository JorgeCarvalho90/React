import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { auth, db } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, onSnapshot, query } from 'firebase/firestore';

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: #4368bf;
  margin-bottom: 2rem;
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  color: #4368bf;
`;

const Wrapper = styled.section`
  padding: 4rem;
`;

const WrapperMessages = styled.section`
  padding: 0.5rem;
  display:flex;
  flex-direction: column;
  gap: 1rem;
`;

const Message = styled.p`
  padding: 0.5rem;
  background-color: #f0f0f0;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 0.5rem;
`;


const Form = styled.form`
  padding: 2rem;
  display:flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 300px;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  margin-bottom:0.5rem;

`;

const FormButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #4368bf;
  color: white;
  border: none;
  cursor: pointer;
`;

function App() {
  const [formValues, setFormValues] = useState({
      email: "",
      password: "",
  });

  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await signInWithEmailAndPassword(
      auth,
      formValues.email,
      formValues.password
    );
    setUser(response.user);
  };

  useEffect(() => {
    if (user) {
      const q = query(collection(db, "mensagens"), );
      const unsubscribe = onSnapshot(q, (Snapshot) => {
        const dbMessages = Snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(dbMessages);
      });
      return () => unsubscribe();
    }
  }
  , [user]);


  return (
    <Wrapper>
      <Title>Chatbot</Title>
      {!user ? (
        <Form onSubmit={handleSubmit}>
          <SubTitle>Login</SubTitle>
          <FormInput type="text" placeholder="Enter your email" onChange={(e)=> setFormValues({
            ...formValues,
            email:e.target.value
            })}/>
          <FormInput type="text" placeholder="Enter your password" onChange={(e)=> setFormValues({
            ...formValues,
            password:e.target.value
            })}/>
            {JSON.stringify(formValues)}
          <FormButton type="submit">Send</FormButton>
        </Form>
      ) : (
        <div>
          <SubTitle>Welcome {user.email}</SubTitle>
          <WrapperMessages> 
            {messages.map((message,key) => (
              <Message key={`message-${message.id}-${key}`}>{message.text}</Message>
            ))}
          </WrapperMessages>
        </div>
      )}
    </Wrapper>
  )
}

export default App
