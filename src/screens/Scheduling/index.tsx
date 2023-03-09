import React from 'react';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';

import ArrowSVG from '../../../assets/arrow.svg';

import { 
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
} from './styles';

export function Scheduling(){
    const theme = useTheme();

    return(
        <Container>
            <Header>
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
                        <DateValue />
                    </DateInfo>

                    <ArrowSVG />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue />
                    </DateInfo>
                </RentalPeriod>

            </Header>
        </Container>
    );
}