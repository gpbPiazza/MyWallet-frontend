import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';

import { useUserContext } from '../context/UserContext';
import { ContentContainer } from '../styles/ContentContainer';
import { Title, TextError, Text } from '../styles/SignInStyles';
import SignUpService from '../service/SignUpService';
import SignInService from '../service/SignInService';
import Button from '../components/Button';
import Input from '../components/Input';

export default function SignUp() {
    const { user, setUser } = useUserContext();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [waiting, setWaiting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (user) {
            history.push(`/home`);
        }
      }, [user]);

    const onSubmit = async (event) => {
        event.preventDefault();

        const bodySingUp = {
            username,
            email,
            password,
            passwordConfirmation
        };
        const bodySingIn = {
            email,
            password,
        };

        setWaiting(true);
        const data = await SignUpService.signUp(bodySingUp);
        setWaiting(false);

        if(data.success) {
            signIn(bodySingIn)
        }else if (data.response.status !== 201){
            setError(true);
            setErrorMessage(data.response.data.error);
            return;
        }else {
            setError(true);
            setErrorMessage('Please Check you internet conexation');
            return;
        }
    };

    const signIn = async (body) => {
        setWaiting(true);
        const data = await SignInService.signIn(body);
        setWaiting(false);

        if(data.success) {
            setUser({...data.success});
        }else {
            setError(true);
            setErrorMessage('Please Check you internet conexation');
            return;
        }  
    };

    return (
        <ContentContainer>
            <Title>
                MyWallet
            </Title>
            <form>
                <Input 
                    type='text'
                    placeholder={'Name'}
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    error={error}
                    onFocus={() => setError(false)}
                />
                <Input 
                    type='email'
                    placeholder={'E-mail'}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    error={error}
                    onFocus={() => setError(false)}
                />
                <Input 
                    type='password'
                    placeholder={'Password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    error={error}
                    onFocus={() => setError(false)}
                />
                  <Input 
                    type='password'
                    placeholder={'Confirm password'}
                    value={passwordConfirmation}
                    onChange={(event) => setPasswordConfirmation(event.target.value)}
                    error={error}
                    onFocus={() => setError(false)}
                />
                {error && 
                    <TextError>
                       {errorMessage}
                    </TextError>
                }
                <Button 
                    onClick={(event) => onSubmit(event)}
                    label={'Entrar'}
                    loading={waiting}
                    disabled={waiting}
                />
            </form>
            <Text disable={waiting}>  
                <Link to='/'>
                    Have accounty? Entre agora!
                </Link>
            </Text>
    </ContentContainer>
    );
}
