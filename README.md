# Logistica-Maxima
Teste tecnico Máxima Tech

Validações de entrada de dados feitas no front end

## Informação API
Api em Spring Boot.

Banco de dados H2 em memoria.
JPA para persistência de dados

### URL de Requisições
# Post
`http://localhost:8080/cliente/save` 
# Get
`http://localhost:8080/cliente/list`

# Delete
`http://localhost:8080/cliente/codigo=Number`
# Body de entrada

`{
    "codigo": Long,
    "nome": String,
    "cnpj":String,
    "endereco":{
          "endereco": String,
          "estado": String ,
          "bairro": String,
          "numero": Long,
          "complemento": String,
          "cep": String,
          "longitude": String,
          "latitude": String
     }
}`
# Body de respostas

 `{
      "idCliente": Long,
     "codigo": Long,
    "nome": String,
    "cnpj":String,
    "endereco":{
             "idEndereco": Long,
   	 "endereco": String,
  	  "estado": String ,
   	 "bairro": String,
   	 "numero": Long,
    	"complemento": String,
    	"cep": String,
    	"longitude": String,
   	 "latitude": String
    }
}`










