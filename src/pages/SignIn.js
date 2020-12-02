import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ContentContainer } from '../styles/ContentContainer';
import { Title, TextError, Text } from '../styles/SignInStyles';
import Input from '../components/Input';
import Button from '../components/Button';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [able, setAble] = useState(false);
    const [error, setError] = useState(false);
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
                    error={error}
                />
                <Input 
                    type='password'
                    placeholder={'Senha'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    error={error}
                />
                {error && 
                    <TextError>
                        Wrong email or password
                    </TextError>
                }
                <Button 
                    onClick={() => console.log('ai ai ')}
                    label={'Entrar'}
                    disabled={able}
                />
            </form>
            <Text>  
                <Link to='/signUp'>
                    Primeira vez? Cadastre-se!
                </Link>
            </Text>
        </ContentContainer>
    );
}