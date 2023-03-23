import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../@types/navigation';


import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

import ArrowSVG from '../../../assets/arrow.svg';

import { 
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Footer,
    Content,
} from './styles';

type DashboardProps = StackScreenProps<RootStackParamList, 'Scheduling'>;

export function Scheduling({ navigation }: DashboardProps){
    const theme = useTheme();

    return(
        <Container>
            <Header>
                <StatusBar 
                    barStyle="light-content"
                    translucent
                    backgroundColor='transparent'
                />
                <BackButton 
                    onPress={() => {}} 
                    color={theme.colors.shape}
                />

                <Title>
                    Escolha uma {'\n'} 
                    data de início e {'\n'} 
                    fim do aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false}></DateValue>
                    </DateInfo>

                    <ArrowSVG />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false}></DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar />
            </Content>

            <Footer>
                <Button title='Confirmar' onPress={() => navigation.navigate('SchedulingDetails')} />
            </Footer>
        </Container>
    );
}