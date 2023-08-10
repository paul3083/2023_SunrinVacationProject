import React, {useState} from 'react';
import {Gap, Row, StyledSafeAreaView, SuitText} from '@components/Atomic';
import styled from 'styled-components/native';
import Icon from '@components/Icon';
import {TouchableOpacity} from 'react-native';
import {logIn} from '@/lib/auth';

const LogInScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <StyledSafeAreaView>
      <Container>
        <TitleContainer>
          <Icon name={'group'} size={32} color={'#1C1B1F'} />
          <SuitText weight={600} size={24}>
            로그인이 필요합니다
          </SuitText>
        </TitleContainer>
        <Gap height={48} />
        <FormContainer>
          <InputBox
            value={email}
            onChangeText={setEmail}
            placeholder={'이메일을 입력해주세요...'}
          />
          <InputBox
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholder={'비밀번호를 입력해주세요...'}
          />
          {/*<Row style={{justifyContent: 'flex-end', width: '100%'}}>*/}
          {/*  <TouchableOpacity onPress={() => {}}>*/}
          {/*    <SuitText weight={600} size={16}>*/}
          {/*      비밀번호 찾기*/}
          {/*    </SuitText>*/}
          {/*  </TouchableOpacity>*/}
          {/*</Row>*/}
          <LogInButton
            onPress={() => {
              logIn(email, password);
            }}>
            <SuitText weight={600} size={17} style={{color: 'white'}}>
              로그인
            </SuitText>
          </LogInButton>
          <Row>
            <SuitText weight={400} size={16} style={{color: '#1C1B1F4D'}}>
              계정이 없으신가요?
            </SuitText>
            <RegisterButton onPress={() => navigation.navigate('Register')}>
              <SuitText weight={600} size={16}>
                회원가입하기
              </SuitText>
            </RegisterButton>
          </Row>
        </FormContainer>
      </Container>
    </StyledSafeAreaView>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 136px 24px 0 24px;
`;

const TitleContainer = styled.View`
  align-self: center;
  align-items: center;
  gap: 8px;
`;

const InputBox = styled.TextInput`
  width: 100%;
  display: flex;
  border-radius: 15px;
  font-family: 'SUIT Variable';
  font-weight: 500;
  font-size: 16px;
  padding: 16px 20px;
  background-color: white;
`;

const FormContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const LogInButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-radius: 15px;
  background-color: #1c1b1f;
`;

const RegisterButton = styled.TouchableOpacity``;

export default LogInScreen;
