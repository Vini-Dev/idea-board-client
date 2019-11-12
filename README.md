# Projeto base para aplicações ReactJS

Sem muita conversa, apenas o essencial para um desenvolvimento conciso e limpo. E algumas coisinhas configuradas ;)

## O que vem?

ESLINT, Root Import, Prettier, Redux, Polished, Axios, além de uma configuração para <i>Dark Theme</i>!
Basta definir as cores no arquivo themes.js em styles e está tudo certo! Importe onde precisar, utilizando no styled-components fica ainda melhor!

```jsx
// Em um arquivo de estilos
import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({theme}) => theme.button.background};
`
````

O style-guide utilizado é do airbnb, bem popular.

### Uso

Clone o projeto

```
  git clone https://github.com/Vini-Dev/react-base-project.git
```

E após isso execute


```
  yarn
```
ou

```
  npm install
```
