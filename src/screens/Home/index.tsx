import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../@types/navigation';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTOS';

import Logo from '../../../assets/logo.svg';

import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

import { 
    Container, 
    Header, 
    TotalCars, 
    HeaderContent, 
    CarList 
} from './styles';

export function Home(){
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const { navigate } = useNavigation<HomeScreenNavigationProp>();

    const carData = {
        brand: 'audi',
        name: 'RS 5 Coupé',
        rent: {
            period: 'AO DIA',
            price: 120
        },
        thumbnail: 'https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png'
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/cars');
                setCars(response.data);
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false);
            }
        }

        fetchCars();
    }, []);

    return(
        <Container>
            <StatusBar 
                barStyle='light-content'
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>

            { loading ? <Load /> : 

                <CarList
                    data={cars}
                    keyExtractor={item => item.id} 
                    renderItem={({ item }) => 
                        <Car data={item}
                            onPress={() => navigate('CarDetails')}
                        />
                    }
                />
            }
        </Container>
    );
}