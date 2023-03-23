import React from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../@types/navigation';

import LogoSvg from '../../../assets/logo_background_gray.svg';
import DoneSvg from '../../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import { 
    Container,
    Content,
    Title,
    Message,
    Footer
} from './styles';

type DashboardProps = StackScreenProps<RootStackParamList, 'Scheduling'>;

export function SchedulingComplete({ navigation }: DashboardProps){
    const { width } = useWindowDimensions();

    return (
        <Container>
            <StatusBar 
                barStyle='light-content'
                translucent
                backgroundColor='transparent'
            />
            <LogoSvg width={width} />

            <Content>
                <DoneSvg width={80} height={80} />
                <Title>Carro alugado!</Title>

                <Message>
                    Agora você só precisa ir {'\n'}
                    até a concessionária da RENTX {'\n'}
                    pegar o seu automóvel.
                </Message>
            </Content>

            <Footer>
                <ConfirmButton title='OK' onPress={() => navigation.navigate('Home')} />
            </Footer>
        </Container>
    );
}