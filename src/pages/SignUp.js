import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

import { ContentContainer } from '../styles/ContentContainer';
import { Title, TextError, Text } from '../styles/SignInStyles';
import Button from '../components/Button';
import Input from '../components/Input';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [able, setAble] = useState(false);
    const [error, setError] = useState(true);
    return (
        <ContentContainer>
            <Title>
                MyWallet
            </Title>
            <form>
                <Input 
                    type='text'
                    placeholder={'Nome'}
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    error={error}
                />
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
                  <Input 
                    type='password'
                    placeholder={'Confrime a senha'}
                    value={passwordCheck}
                    onChange={(event) => setPasswordCheck(event.target.value)}
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
                <Link to='/'>
                    Já tem uma conta? Entre agora!
                </Link>
            </Text>
    </ContentContainer>
    );
}
