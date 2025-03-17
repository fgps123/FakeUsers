# Projeto Gerador de FakeUsers

o projeto consite em usar uma API pública para a geração de usuarios fictícios com infromações como nome, email, imagem, estado, pais, entre outras.
## Design do projeto
![alt text](image.png)
## API Utilizada

a API utilizada foi a https://randomuser.me/ que fornece informações de usúarios atravês de um JSON conforme abaixo:


```
{
  "resultados": [
    {
      "Sexo: Feminino ",
      "nome": {
        "título": " Senhorita ",
        "primeiro": " Jennie ",
        "último": " Nichols "
      },
      "localização": {
        "rua": {
          "número": 8929 ,
          "nome": " Valwood Pkwy ",
        },
        "cidade": " Billings ",
        "estado": " Michigan ",
        "país": " Estados Unidos ",
        "código postal": " 63104 ",
        "coordenadas": {
          "latitude": " -69.8246 ",
          "longitude": " 134.8719 "
        },
        "fuso horário": {
          "deslocamento": " +9:30 ",
          "descrição": " Adelaide, Darwin "
        }
      },
      "e-mail": " jennie.nichols@example.com ",
      "Conecte-se": {
        "uuid": " 7a0eed16-9430-4d68-901f-c0d4c1c3bf00 ",
        "nome de usuário": " yellowpeacock117 ",
        "senha": " addison ",
        "sal": " sld1yGtd ",
        "md5": " ab54ac4c0be9480ae8fa5e9e2a5196a3 ",
        "sha1": " edcf2ce613cbdea349133c52dc2f3b83168dc51b ",
        "sha256": " 48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d "
      },
      "sobrenome": {
        "data": " 1992-03-08T15:13:16.688Z ",
        "idade": 30
      },
      "registrado": {
        "data": " 2007-07-09T05:51:59.390Z ",
        "idade": 14
      },
      "telefone": " (272) 790-0888 ",
      "célula": " (489) 330-2385 ",
      "eu ia": {
        "nome": " SSN ",
        "valor": " 405-88-3636 "
      },
      "foto": {
        "grande": " https://randomuser.me/api/portraits/men/75.jpg ",
        "médio": " https://randomuser.me/api/portraits/med/men/75.jpg ",
        "miniatura": " https://randomuser.me/api/portraits/thumb/men/75.jpg "
      },
      "nat": " EUA "
    }
  ]
}
```

## Funcionalidades

- [X] Filtro de usúarios pelo Gênero
- [X] Filtro de usúarios pela Nacionalidade
- [X] Filtro de usúarios pela Quantidade
- [X] Filtro de usúarios pelo Nome
- [  ] Responsividade da tela
- [  ] Aumentar o filtro da quantidade de usúarios
- [  ] Colocar mais opções de países

## Contatos
Email: guilhermesilva2022.gs@gmail.com
