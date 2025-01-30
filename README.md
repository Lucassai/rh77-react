<div align="center">
  
[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript
[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript
[REACT__BADGE]: https://img.shields.io/badge/React-005CFE?style=for-the-badge&logo=react
  
</div>

<h1 align="center" style="font-weight: bold;">Projeto Front-End RH 77 💻</h1>

<div align="center">
  
![react][REACT__BADGE]
![typescript][TYPESCRIPT__BADGE]
![javascript][JAVASCRIPT__BADGE]

</div>

<p align="center">
 <a href="#about">Sobre</a> • 
 <a href="#started">Primeiros Passos</a> • 
  <a href="#colab">Colaboradores</a> •
</p>


<h2 id="about">📌 Sobre</h2>

O Projeto RH foi desenvolvido com o objetivo de criar um sistema de gerenciamento de recursos humanos eficiente e intuitivo. Utilizando tecnologias modernas, como **React**, **Tailwind CSS** e **React Router DOM**, a aplicação oferece uma interface amigável e responsiva, facilitando o acesso e a manipulação de dados importantes para a administração de temas e produtos.
Utilizamos o TypeScript com Vite, com suporte ao Tailwind Css, Axios, Phosphor Icons, React Router, React Loader Spinner, React Icons, Framer Motion, e na escolha de paleta de cores utilizamos Freepik e Colorzilla, 

Como fizemos esse projeto pela ONG Generation Brasil, nós precisávamos atender alguns requisitos, quais foram eles: 

- Componentes de **menu** e **rodapé**.
- **CRUD completo de Categoria e Produto**.
- Definição e funcionamento adequado das **rotas**.
- Uso adequado de **margens**, **padding** e **alinhamento** para garantir uma interface limpa.
- Utilização de **Flexbox** e **Grid** para criar layouts responsivos e flexíveis.
- **Funcionalidade especial** do desafio 2 backend.


<h2 id="started">🚀Primeiros Passos</h2>

1. **Requisitos**
   
 - [🟢 Node.js](https://nodejs.org/)
 - [🧶 Yarn](https://yarnpkg.com/)
   
2. **Clone o repositório**
   - Abra o terminal e execute o comando:
     ```sh
     git clone https://github.com/grupo2generation77/rh77-react.git
     ```
   - Navegue até o diretório do projeto:
     ```sh
     cd rh77-react
     ```

3. **Instale as dependências**
   - Certifique-se de ter o Node.js e npm (Node Package Manager) instalados em sua máquina.
   - Instale as dependências do projeto executando:
     ```sh
     yarn
     ```

4. **Execute o projeto**
   - Inicie o servidor de desenvolvimento:
     ```sh
     🧶 dev
     ```
   - O projeto estará disponível no navegador no endereço `http://localhost:3000`.

5. **Configuração adicional**
 ```sh
🧶 add axios
🧶 add phosphor-icons
🧶 add react-router-dom
🧶 add react-loader-spinner
🧶 add @types/react-icons
🧶 add framer-motion
```
   - Verifique se há algum arquivo de configuração específico (como `.env`) que precisa ser configurado para o ambiente local. Esse arquivo geralmente contém variáveis de ambiente necessárias para a aplicação.

6. **Verifique as rotas**
 - Certifique-se de que todas as rotas estão configuradas corretamente e acessíveis através da aplicação React Router DOM.
     
7. **Configurando Tailwind CSS**
  - Instale o 🎨 Tailwind CSS e seu plugin para ⚡ Vite:

```sh
📦 install tailwindcss @tailwindcss/vite
```

- Edite o arquivo **vite.config.ts** para incluir o plugin:

```ts
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
});
```

- No arquivo **index.css**, importe o 🎨 Tailwind:

```css
@import "tailwindcss";
```
   
8. **Teste a aplicação**
- Navegue pelo projeto para garantir que todas as funcionalidades estão funcionando conforme esperado.

Seguindo esses passos, você conseguirá executar o projeto localmente. Se tiver alguma dúvida ou encontrar algum problema, me avise! Estou aqui para 

<h2 id="colab">🤝 Calaboradores</h2>

Agradecimento especial a todas as pessoas que contribuíram para este projeto.

<table>
  <tr>
    <td align="center">
      <a href="#">
<img src="https://media.licdn.com/dms/image/v2/D4D03AQHhaZoYRKxtsg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729899450213?e=1743638400&v=beta&t=IQKOLXKYW-dgsyhahqEpHNtViFOnW2zfsPOA8NClOq4" width="100px;" alt="Perfil do LinkedIn"/><br>
        <sub>
          <b>Jaqueline Costa</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
       <img src="https://media.licdn.com/dms/image/v2/D4D03AQFjWcNyZu2Ptg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719620770969?e=1743638400&v=beta&t=TkPfs7_n5gGAVjFBBEHTix6uUAa1aVLMqLk-5_1s7z0" width="100px;" alt="Perfil do LinkedIn"/><br>
        <sub>
          <b>Ivan Barbosa</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
       <img src="https://media.licdn.com/dms/image/v2/D4D03AQEkBH9bPMiTKw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729541301387?e=1743638400&v=beta&t=qXKzsccrOWR6kEaqt_g-pcOy39RU19i5VALw0aiSv-Q" width="100px;" alt="Perfil do LinkedIn"/><br>
        <sub>
          <b>Lucas Oliveira</b>
        </sub>
      </a>
    </td>
     <td align="center">
      <a href="#">
<img src="https://media.licdn.com/dms/image/v2/D4D03AQETZvl8qd4Dyg/profile-displayphoto-shrink_800_800/B4DZQfUeEyHcAc-/0/1735692248536?e=1743638400&v=beta&t=G8wBsIqockdUyoIf_p09bQsP56ZAWLXYq7J8oQFmuqM" width="100px;" alt="Perfil do LinkedIn"/><br>
        <sub>
          <b>Nina Raquel</b>
        </sub>
      </a>
    </td>
     <td align="center">
      <a href="#">
<img src="https://media.licdn.com/dms/image/v2/D4D03AQGNuaxckRDF7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730742826051?e=1743638400&v=beta&t=OEz6bMOclSK3-my6MjeIFoOdt5dcR_8m6Q_6aSdu_hk" width="100px;" alt="Perfil do LinkedIn"/><br>
        <sub>
          <b>Matheus Queiroz</b>
        </sub>
      </a>
    </td>
     <td align="center">
      <a href="#">
<img src="https://media.licdn.com/dms/image/v2/D4D03AQFLw_w4gY3BXQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724398107767?e=1743638400&v=beta&t=QIed63iRmZxdOK0Dq-KZiN7ESOIK9QQg8uQ9FN14Qnc" width="100px;" alt="Perfil do LinkedIn"/><br>
        <sub>
          <b>Vitória Manuela</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

