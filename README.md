
Criar uma simulação:
```
  Funcionalidade: Adicionar produto ao carrinho
Como usuário, gostaria de poder acessar a Home Page e adicionar 
Um produto ao carrinho com a finalidade de realizar uma compra

Contexto:
Dado que estou na Home Page

@positivo
Cenário: Compra com sucesso
E seleciono um produto de minha escolha
E atribuo as informações necessárias como: tamanho, cor
Quando clico no botão “Add to Cart”
Então este produto deve ser adicionado ao carrinho com sucesso!

@positivo
Cenário: Validar valores ao final da compra
E seleciono um produto de minha escolha
E atribuo as informações necessárias como: tamanho, cor
Quando clico no botão “Add to Cart”
Então o valor do produto exibido deve ser o mesmo ai finalizar a compra.


@negativo
Cenário: Adicionar um produto ao carrinho sem passar todas as informações
E seleciono um produto de minha escolha
Mas não atribuo as informações necessárias como: tamanho, cor
Quando clico no botão “Add to Cart”
Então deve retornar um “alert“ informando que estes campos são obrigatórios

@negativo
Cenário: Validar as informações do produto na Home Page
E escolho um produto ao qual desejo realizar validações
Mas não esteja possível visualizar todas as informações deste produto na tela como: Foto, titulo, tamanho, cor, botão “Add to cart”... 
Então este produto não deve ser possível adicionar ao carrinho.


```
```
