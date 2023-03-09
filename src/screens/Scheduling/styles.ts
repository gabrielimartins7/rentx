import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    width: 100%;
    height: 325px;

    background-color: ${({theme}) => theme.colors.header};

    justify-content: center;
    padding: 25px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.secondary_600};
    font-size: ${RFValue(34)}px;
    margin-top: 24px;
`;

export const RentalPeriod = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const DateInfo = styled.View`
    width: 30%;
`;

export const DateTitle = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
`;
