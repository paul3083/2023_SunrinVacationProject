import React, {useState} from 'react';
import {Row, StyledSafeAreaView, SuitText} from '@components/Atomic';
import styled from 'styled-components/native';
import Icon from '@components/Icon';
import {TouchableOpacity} from 'react-native';
import {logIn} from '@/lib/auth';

const LogInScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resultMessages = {
    'auth/email-already-in-use': '이미 가입된 이메일입니다.',
    'auth/wrong-password': '잘못된 비밀번호입니다.',
    'auth/user-not-found': '존재하지 않는 계정입니다.',
    'auth/invalid-email': '유효하지 않은 이메일 주소입니다.',
  };

  return (
    <StyledSafeAreaView>
      <Container>
        <TitleContainer>
          <Icon name={'group'} size={32} color={'#1C1B1F'} />
          <SuitText fontWeight={600} fontSize={24}>
            로그인이 필요합니다
          </SuitText>
        </TitleContainer>
        <Space />
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
          <Row style={{justifyContent: 'flex-end', width: '100%'}}>
            <TouchableOpacity onPress={() => {}}>
              <SuitText fontWeight={600} fontSize={16}>
                비밀번호 찾기
              </SuitText>
            </TouchableOpacity>
          </Row>
          <LogInButton onPress={() => logIn(email, password)}>
            <SuitText weight={600} size={17} style={{color: 'white'}}>
              로그인
            </SuitText>
          </LogInButton>
          <Row>
            <SuitText
              fontWeight={400}
              fontSize={16}
              style={{color: 'rgba(28, 27, 31, 0.30)'}}>
              계정이 없으신가요?
            </SuitText>
            <RegisterButton onPress={() => navigation.navigate('Register')}>
              <SuitText fontWeight={600} fontSize={16}>
                회원가입하기
              </SuitText>
            </RegisterButton>
          </Row>
        </FormContainer>
      </Container>
    </StyledSafeAreaView>
  );
};

const Space = styled.View`
  height: 48px;
`;

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
