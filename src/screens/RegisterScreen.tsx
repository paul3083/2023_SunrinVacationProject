import React, {useState} from 'react';
import {Column, Gap, StyledSafeAreaView, SuitText} from '@components/Atomic';
import styled from 'styled-components/native';
import Icon from '@components/Icon';
import { logOut, register } from "@/lib/auth";

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <StyledSafeAreaView>
      <Container>
        <TitleContainer>
          <Icon name={'group_add'} size={32} color={'#1C1B1F'} />
          <SuitText weight={600} size={24}>
            로그인이 필요합니다
          </SuitText>
        </TitleContainer>
        <Gap height={48} />
        <RegisterContainer>
          <Column style={{gap: 8}}>
            <SuitText weight={600} size={16}>
              이메일 입력
            </SuitText>
            <InputBox
              value={email}
              onChangeText={setEmail}
              placeholder={'인증가능한 이메일 입력'}
            />
          </Column>
          <Column style={{gap: 8}}>
            <SuitText weight={600} size={16}>
              비밀번호 생성
            </SuitText>
            <InputBox
              value={password}
              onChangeText={setPassword}
              placeholder={'8자 이상, 특수문자 포함'}
            />
          </Column>
          <Column style={{gap: 8}}>
            <SuitText weight={600} size={16}>
              비밀번호 확인
            </SuitText>
            <InputBox
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder={'8자 이상, 특수문자 포함'}
              secureTextEntry={true}
            />
          </Column>
          <RegisterButton
            onPress={() => {
              if (password === confirmPassword) {
                register(email, password);
              }
            }}>
            <SuitText weight={600} size={17} style={{color: 'white'}}>
              가입하기
            </SuitText>
          </RegisterButton>
        </RegisterContainer>
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

const RegisterContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
`;

const InputBox = styled.TextInput.attrs({
  placeholderTextColor: '#BBBBBC',
})`
  width: 100%;
  display: flex;
  border-radius: 15px;
  font-family: 'SUIT Variable';
  font-weight: 500;
  font-size: 16px;
  padding: 16px 20px;
  background-color: white;
`;

const RegisterButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-radius: 15px;
  background-color: #1c1b1f;
`;

export default RegisterScreen;
