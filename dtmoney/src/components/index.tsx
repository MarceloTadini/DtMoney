import logoImg from '../assets/logo.svg' //O nome da imagem é importado como o nome seguido de img dentro do seu diretório 
import { Container, Content } from './Header/styles';

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="submit">
                    Nova Transação
                </button>
            </Content>
        </Container>
    );
}