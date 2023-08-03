import {SafeAreaView} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import Icon from '@components/Icon';
import { StyledSafeAreaView } from "@components/Atomic";

const CalendarScreen = () => {
  return (
    <StyledSafeAreaView>
      <Container>
        <TopBar>
          <Title>캘린더</Title>
        </TopBar>
        <Schedule>
          <Date>7월 30일</Date>
          <ButtonField>
            <Button>
              <TextBox>
                <Name>주변 공원 산책하기</Name>
                <Time>12:30</Time>
              </TextBox>
              {/*<Icon name={''} size={} color={}/>*/}
            </Button>
          </ButtonField>
        </Schedule>
      </Container>
    </StyledSafeAreaView>
  );
};

const Container = styled.View`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-left: 24px;
`;

const TopBar = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 186px;
`;

const Title = styled.Text`
  color: #1c1b1f;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.12px;
`;

const Schedule = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Date = styled.Text`
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.64px;
`;

const ButtonField = styled.View`
  width: 342px;
  height: 77px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #fff;
`;

const Button = styled.TouchableOpacity`
  display: inline-flex;
  justify-content: start;
  align-items: start;
  gap: 152px;
  margin: 12px;
`;

const TextBox = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Name = styled.Text`
  color: #1c1b1f;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;

const Time = styled.Text`
  color: rgba(0, 0, 0, 0.3);
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export default CalendarScreen;
