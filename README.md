# Explicação do Componente `Menu`

Este componente React exibe uma lista de pratos, utilizando dados armazenados localmente no estado e estilizando-os com o componente `Media` da biblioteca **reactstrap**.

---

## Estrutura do Código

### Importação de Dependências

```javascript
import React, { useState } from 'react';
import { Media } from 'reactstrap';
```

```React```: Biblioteca principal para criar componentes e interfaces.

```useState```: Hook para gerenciar o estado local no componente funcional.

```reactstrap```: Biblioteca de componentes baseada no Bootstrap.

```Media```: Componente usado para exibir layouts que envolvem mídia (como imagens e textos).

---

# Declaração do Componente 

```javascript
const Menu = () => {
```

 - Define o componente funcional ``Menu`` que encapsula toda a lógica e apresentação da interface de menu.

---

# Gerenciamento do Estado com ``useState``

```javascript
const [dishes] = useState([
    {
        id: 0,
        name: 'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label: 'Hot',
        price: '4.99',
        description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
    },
    {
        id: 1,
        name: 'Zucchipakoda',
        image: 'assets/images/zucchipakoda.png',
        category: 'appetizer',
        label: '',
        price: '1.99',
        description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
    },
    {
        id: 2,
        name: 'Vadonut',
        image: 'assets/images/vadonut.png',
        category: 'appetizer',
        label: 'New',
        price: '1.99',
        description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
    },
    {
        id: 3,
        name: 'ElaiCheese Cake',
        image: 'assets/images/elaicheesecake.png',
        category: 'dessert',
        label: '',
        price: '2.99',
        description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
    }
]);
```

 - ``useState``:
 
    - Inicializa o estado ``dishes`` com uma lista de objetos que representam pratos.

 - Cada prato contém as seguintes propriedades:

    - ``id``: Identificador único do prato.
    - ``name``: Nome do prato.
    - ``image``: Caminho da imagem correspondente
    - ``category``: Categoria do prato (e.g., ``mains``, ``appetizer``, ``dessert``).
    - ``label``: Rótulo adicional para o prato (e.g., ``Hot``, ``New``).
    - ``price``: Preço do prato.
    - ``description``: Breve descrição do prato.

---

# Mapeamento e Renderização dos Pratos

```javascript
const menu = dishes.map((dish) => {
    return (
        <div key={dish.id} className="col-12 mt-5">
            <Media tag="li">
                <Media left middle>
                    <Media object src={dish.image} alt={dish.name} />
                </Media>
                <Media body className="ml-5">
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                </Media>
            </Media>
        </div>
    );
});
```

 - ``dishes.map()``:
    - Cria uma nova lista de elementos JSX, renderizando cada prato.
    - A propriedade ``key={dish.id}`` é usada para identificar cada item do DOM de forma única.

**Estrutura de Cada Prato:**

 - Um ``div`` externo organiza o prato como um item de layout.
 - ``Media``: Utilizado para formatar o layout:
    - ``Media left middle``: Exibe a imagem alinhada à esquerda e ao centro.
    - ``Media object``: Insere a imagem com os atributos ``src`` (caminho da imagem) e ``alt`` (texto alternativo).
    - ``Media body``: Contém o conteúdo textual do prato, como nome e descrição.
    - ``Media heading``: Destaque para o nome do prato.

---

# Renderização Final

```javascript
return (
    <div claassName="container">
        <div className="row">
            <Media list>
                {menu}
            </Media>
        </div>
    </div>
);
```

 **Container Principal:**

 - A ``div`` principal com ``className="container"`` centraliza o layout.
 - Dentro dela, uma ``div`` com ``className="row"`` organiza os itens em uma linha.

**Lista de Mídia:**
 - O componente ``Media list`` é usado para renderizar os pratos como uma lista organizada.

**Correção Necessária:**
 - A palavra ``claassName`` contém um erro de digitação e deve ser corrigida para ``className``.

 ---

 # Exportação do Componente

 ```javascript
 export default Menu;
 ```

 - Permite que o componente ``Menu`` seja importado em outros arquivos e reutilizado.
