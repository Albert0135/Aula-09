# Aula 10

Durante a aula, aprendemos a:

 - Atualizar o componente Menu para exibir informações usando Cards do Reactstrap.
 - Gerenciar o estado do prato selecionado com o hook useState.
 - Separar os dados dos pratos (dishes) em um arquivo próprio.
 - Estruturar o componente App para integrar o Menu com os pratos carregados.

---
## MenuComponent.js

**Descrição**

O arquivo MenuComponent.js é responsável por exibir a lista de pratos (menu) e os detalhes do prato selecionado. Ele organiza as informações usando componentes estilizados do Reactstrap.

---

## 1. Imports utilizados

```javascript
import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
```
 - React e useState: Criam o componente e gerenciam o estado do prato selecionado.
 - Card e seus elementos: Estilizam a apresentação de cada prato e seus detalhes.

 ---

## 2. Componentes
O principal componente definido é Menu.

 - **Responsabilidade:**

    - Renderizar a lista de pratos.
    - Exibir os detalhes do prato selecionado.

 - **Elementos principais dentro de Menu:**

 - onDishSelect: 
    - Define qual prato está selecionado.
 - renderDish: 
    - Renderiza os detalhes do prato selecionado.
 - props.dishes.map: 
    - Gera dinamicamente a lista de pratos com base nos dados recebidos via props.
---
## 3. Funções

 - onDishSelect:

    - Atualiza o estado selectedDish com o prato clicado.
    - Serve para vincular a interação do usuário (clique) com a exibição dos detalhes do prato.

 - renderDish:

    - Exibe os detalhes do prato selecionado (imagem, nome e descrição).
    - Retorna um card com as informações se um prato foi selecionado.  Caso contrário, retorna um elemento vazio.

 - props.dishes.map:

    - Itera sobre a lista de pratos (props.dishes) recebida via props.
    - Cria dinamicamente um card para cada prato.
    - Define um evento de clique (onClick) para atualizar o prato selecionado.

---

# dishes.js

**Descrição**

O arquivo dishes.js armazena os dados dos pratos. Ele centraliza e organiza as informações em um único lugar, facilitando o acesso e a manutenção.

---
**1. Propriedades**

Cada prato é representado como um objeto com as seguintes propriedades:

 - id: Identificador único.
 - name: Nome do prato.
 - image: Caminho da imagem do prato.
 - category: Categoria do prato (ex.: entrada, sobremesa).
 - label: Rótulo adicional (ex.: "Hot", "New").
 - price: Preço do prato.
 - description: Breve descrição do prato.
 - comments: Lista de comentários sobre o prato.

---

**2. Tipo de dado utilizado**

 - Estrutura: Um array de objetos (DISHES), onde cada objeto representa um prato.
 - Propriedades como date: O campo date dentro de comments utiliza strings no formato ISO, representando datas.

--- 

# App.js

**Descrição**

O arquivo App.js é o ponto de entrada principal do aplicativo. Ele conecta os dados dos pratos (DISHES) ao componente Menu e configura o cabeçalho do aplicativo.

---

# 1. Função de const [dishes]

```javascript
const [dishes] = useState(DISHES);
```

 - O que faz: Define o estado inicial de dishes com os dados importados de dishes.js.

 - **Importância:**

    - Torna os dados dos pratos disponíveis para o componente Menu.
    - O estado não muda, pois não há função de atualização associada.

---

# 2. Funcionamento de ```<Menu dishes={dishes} />```

 - O que faz: Passa os dados de dishes como props para o componente Menu.

 - **Como funciona:**

     - O componente Menu acessa props.dishes para renderizar a lista de pratos e gerenciar a seleção.
     - A separação dos dados (em dishes.js) e do layout (em MenuComponent.js) promove modularidade e reutilização.
