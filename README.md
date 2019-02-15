# Netshoes Cart Test

# Frameworks utilizados

* AngularJS 1.7.6
* Angular Material 1.1.12

# Notas
* Utilização de angular-cookies.js para manter dados
* Utilização de angular-locale_pt-br.js para padrões monetários brasileiros
* Maiores informações comentadas no código

# Navegadores testados

* Mozilla Firefox Quantum 65.0 OK
* Google Chrome 72.0 OK
    * Dimensões Mobile pelo Device Toolbar OK
* Microsoft Edge  42.17 OK

# Itens entregues:

* Leitura do aquivo public/data/products.json OK
* Exibição de produtos em 3 colunas OK
* Inclusão de produtos selecionados na Sacola OK
* Visualização de produtos adicionados na Sacola OK
* Exclusão de produtos selecionados da Sacola OK
* Cálculo do valor total a pagar OK
* Testes OK
* Persistência de dados ao recarregar navegados OK

# Procedimentos para validação:

* Observação: É necessária conexão com a internet para usar os frameworks e folhas de estilo definidas no header
1. Realisar clone do projeto pelo link https://github.com/fabioh2c/front-end-recruitment.git
2.1 Abrir arquivo index.html diretamente no Firefox ou Edge (Vá para item 3)
2.2 Chrome não tem permissão padrão para abrir o arquivo public/data/products.json. Para isso deve seguir os procedimentos abaixo no Windows 7/8/10:
    2.2.1 Acessar via Prompt de Comando ( Executar > CMD) o diretório onde está localizado o arquivo chrome.exe:
         C:\Users\[usuario]\AppData\Local\Google\Chrome\Application
         ou
         C:\Program Files (x86)\Google\Chrome\Application\
    2.2.2 CERTIFIQUE QUE O CHROME NÃO ESTEJA EM EXECUÇÃO
    2.2.3 Executar o comando chrome.exe chrome.exe --allow-file-access-from-files  [diretório do index.html]
        Exemplo:
         C:\Users\[usuario]\AppData\Local\Google\Chrome\Application\comando chrome.exe chrome.exe --allow-file-access-from-files C:\DEV\netshoes\front-end-recruitment\index.html

3. Procedimentos de navegação:
* Qualquer produto selecionado é o adiciona na sacola. Esta é exibida no momento da inclusão
* O produto é excluído da sacola quando clicar no X da relação e os valores são recalculados
* Ao clicar fora da sacola a lista de produtos é visualizada por completo
* Ao pressionar F5 os dados são mantidos na sacola
* Ao clicar no botão de "Comprar" todos os produtos serão excluídos da sacola

-----------------------------------------------------------------------------------------

# Frameworks 

* AngularJS 1.7.6
* Angular Material 1.1.12

# Notes
* Use of angular-cookies.js to maintain data
* Use of angular-locale_en.br for Brazilian monetary configuration
* Other informations commented on code

# Tested Browsers

* Mozilla Firefox Quantum 65.0 OK
* Google Chrome 72.0 OK
    * Mobile dimensions  via Device Toolbar OK
* Microsoft Edge  42.17 OK

# Delivered items:

* Reading  public/data/products.json file OK
* Products view in 3 columns OK
* Selected products in the bag OK
* Products view added in the bag OK
* Exclusion of selected products from the OK bag
* Total amount payable calc OK
* Tests OK
* Data mantain on reloading OK

# Validation procedures:
* Note: internet connection is required for frameworks and stylesheets declared in the html header
1. project clone on https://github.com/fabioh2c/front-end-recruitment.git
2.1 Open index.html file directly in Firefox or Edge (Go to 3)
2.2 Chrome does not have the default permission to open products.json file. You must follow these procedures using Windows 7/8/10:
    2.2.1 Access via the Command Prompt (Run> CMD) the directory where the chrome.exe file is located:
         C:\Users\[usuario]\AppData\Local\Google\Chrome\Application
         or
         C:\Program Files (x86)\Google\Chrome\Application\
    2.2.2 MAKE SURE THAT CHROME IS NOT IN EXECUTION
    2.2.3 Run chrome.exe command chrome.exe --allow-file-access-from-files [index.html path]
        Example:
         C:\Users\[usuario]\AppData\Local\Google\Chrome\Application\comando chrome.exe chrome.exe --allow-file-access-from-files C:\DEV\netshoes\front-end-recruitment\index.html

3. Using procedures:
* Any product selected is the added on bag. This is displayed at the time of inclusion
* The product is deleted from the bag when you click on the 'X ' and the values are recalculated
* By clicking outside the bag the product list is full displayed again
* Pressing F5 the data is kept in the bag
* By clicking on the "Comprar" button all products will be deleted from the bag

-----------------------------------------------------------------------------------------

## Expected result

* See a list of products;
* Be able to add or remove items to the cart and get instant visual feedback;
* See the products added to the cart.

## Data

The data we provide is a static JSON file under `/public/data`.

## Notes

* You can use whatever stack or tooling you want to help you;
* Feel free to ask us questions during the process (but trust your guts, please!);
* You should create a static server in order to access the JSON data provided.

## Bonus

* Persist data on page reload;
* Test your code;
* Instructions on how to build/run the project.
