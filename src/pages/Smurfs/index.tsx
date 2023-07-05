import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import * as S from './styles';
import Carousel from '../../components/Carousel'
import apiStatus from '../../api/status';

const AnimatedCount = ({ value }: { value: number }) => {
    const animationProps = useSpring({
      from: { value: 1 },
      to: { value },
      config: { duration: 5000 },
      onFrame: ({ value }: { value: number }) => {}
    });
  
    return (
      <animated.span>
        {animationProps.value.to((val) => Math.round(val))}
      </animated.span>
    );
  };


const Smurfs: React.FC = () => {

    interface APIResponseStatus {
        membros: string;
        clientes: string;
        vendas: string;
    }

    const [dataStatus, setDataStatus] = useState<APIResponseStatus | null>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await apiStatus.get<APIResponseStatus>('/status'); 
            setDataStatus(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

    return (

        <>
            <S.GlobalContainer>

                <S.ColumnContainer id='Start'>
                
                </S.ColumnContainer>

                <S.Title>POR QUÊ ESCOLHER A RACCOON?</S.Title>
                <S.GridContainer id='About'>

                    <S.AboutCard>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck-delivery" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8B00FF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                    <path d="M3 9l4 0" />
                    </svg>
                    <S.TextAbout>Entrega automática</S.TextAbout>
                    </S.AboutCard>

                    <S.AboutCard>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck-delivery" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8B00FF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                    <path d="M3 9l4 0" />
                    </svg>
                    <S.TextAbout>Entrega automática</S.TextAbout>
                    </S.AboutCard>

                    <S.AboutCard>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck-delivery" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8B00FF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                    <path d="M3 9l4 0" />
                    </svg>
                    <S.TextAbout>Entrega automática</S.TextAbout>
                    </S.AboutCard>

                    <S.AboutCard>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck-delivery" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8B00FF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                    <path d="M3 9l4 0" />
                    </svg>
                    <S.TextAbout>Entrega automática</S.TextAbout>
                    </S.AboutCard>

                    <S.AboutCard>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck-delivery" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8B00FF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                    <path d="M3 9l4 0" />
                    </svg>
                    <S.TextAbout>Entrega automática</S.TextAbout>
                    </S.AboutCard>

                    <S.AboutCard>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck-delivery" width="56" height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8B00FF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                    <path d="M3 9l4 0" />
                    </svg>
                    <S.TextAbout>Entrega automática</S.TextAbout>
                    </S.AboutCard>

                </S.GridContainer>
                

                <S.Title>AVALIAÇÕES</S.Title>
                <S.ColumnContainer id='Rating'>
                    <Carousel></Carousel>
                </S.ColumnContainer>

                <S.Title>NOSSOS NÚMEROS</S.Title>

                    {dataStatus && (
                        <S.RowContainer id='Numbers'>
                            <S.NumberCard>
                                <S.TextAbout>Membros:</S.TextAbout>
                                <S.Number><AnimatedCount value={parseInt(dataStatus.membros)} /></S.Number>
                            </S.NumberCard>

                            <S.NumberCard>
                                <S.TextAbout>Clientes:</S.TextAbout>
                                <S.Number><AnimatedCount value={parseInt(dataStatus.clientes)} /></S.Number>
                            </S.NumberCard>
                            
                            <S.NumberCard>
                                <S.TextAbout>Vendas:</S.TextAbout>
                                <S.Number><AnimatedCount value={parseInt(dataStatus.vendas)}/>+</S.Number>
                            </S.NumberCard>
                        </S.RowContainer>
                    )}

                <S.Title>PRODUTOS</S.Title>
                <S.RowContainer>
                </S.RowContainer>

            </S.GlobalContainer>
            
        </>

    );
};

export default Smurfs;