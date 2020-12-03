import React, { useState, useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';

import { useUserContext } from '../context/UserContext';
import { ContentContainer } from '../styles/ContentContainer';
import Header from '../components/Header';

export default function Home() {
    const { user, setUser } = useUserContext();
    const history = useHistory();
  
    useEffect(() => {
        if (user) {
            history.push(`/home`);
        }
      }, [user]);



    return (
        <ContentContainer>
            <Header name={'aai ai zape'} onClick={() => console.log('zip zop')} />

            
        
        </ContentContainer>
    );
}
