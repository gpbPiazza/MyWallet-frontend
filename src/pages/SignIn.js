import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';

import { useUserContext } from '../context/UserContext';
import { ContentContainer } from '../styles/ContentContainer';
import { Title, TextError, Text } from '../styles/SignInStyles';
import Input from '../components/Input';
import Button from '../components/Button';
import SignInService from '../service/SignInService';

export default function SignIn() {
    const { user, setUser } = useUserContext();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

        const body = {email,password};
        setWaiting(true);
        const data = await SignInService.signIn(body);
        setWaiting(false);

        if(data.success) {
            setUser({...data.success});
        }else if (data.response.status !== 202){
            setError(true);
            setErrorMessage(data.response.data.error);
            return;
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
                    type='email'
                    placeholder={'E-mail'}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    onFocus={() => setError(false)}
                    error={error}
                />
                <Input 
                    type='password'
                    placeholder={'Senha'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    onFocus={() => setError(false)}
                    error={error}
                />
                {error && 
                    <TextError>
                        {errorMessage}
                    </TextError>
                }
                <Button 
                    onClick={(event) => onSubmit(event)}
                    label={'Entrar'}
                    disabled={waiting}
                    loading={waiting}
                />
            </form>
            <Text disable={waiting}>  
                <Link to='/signUp'>
                    Primeira vez? Cadastre-se!
                </Link>
            </Text>
        </ContentContainer>
    );
}