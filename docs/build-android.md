
## Preparando um ambiente para rodar o projeto no Android
Para executar o guia seguinte é necessário ja ter feito os passos do `config-project.md` e principalmente já ter instalado o Android Studio SDK.

Para buildar o projeto temos duas formas: Usando um virtual device ou o seu próprio dispositivo físico.

## Virtual Device

Após instalação do Android Studio, abra-o e vá em More Actions > Virtual Device Manager

![Captura de tela de 2025-04-07 19-41-07](https://github.com/user-attachments/assets/b5d27654-f362-401b-bcf5-15213f88b32c)

Caso não tenha nenhum emulador configurado, clique em Create Virtual Device, caso você ja tenha um perfil criado por padrão clique no "+" no topo para criar um novo device

![Captura de tela de 2025-04-07 19-42-28](https://github.com/user-attachments/assets/704363ba-00a1-4749-b2d6-7334552e76a9)

Aqui tem uma lista de devices já configurados, mas eu recomendo o Medium Phone para esse projeto, clique nele e "Next".

![Captura de tela de 2025-04-07 19-43-04](https://github.com/user-attachments/assets/1822027c-cfc3-474d-8896-84ed218575d0)

Aqui eu recomendo o VanillaIceCream, com Android 15 e target Google Play, baixe-o e clique em "Finish"

![image](https://github.com/user-attachments/assets/d8897379-f0aa-4556-874b-58a2fde9caf3)

Antes de continuar, precisamos adicionar **JAVA_HOME** e **ANDROID_HOME** nas variáveis de ambiente do sistema, aqui vou mostrar no Windows porque é mais comum. Caso você ja tenha, não precisa seguir essa etapa.

### ANDROID_HOME 

No Android Studio, vá em More Actions > SDK Manager

Dentro de SDK Manager, vá em Android SDK e copie o caminho como mostrado abaixo

![image](https://github.com/user-attachments/assets/42fd1577-ed5f-4031-a3d3-01caaaa9575e)

Na barra de pesquisar do Window, digite "Variáveis de Ambiente" e clique na opção abaixo:

![image](https://github.com/user-attachments/assets/77140e5d-778c-4f6a-a931-426527a0ae2f)

Após abrir, clique em "Variáveis de Ambiente" no canto inferior e em "Novo" em "Variáveis do Sistema"

![image](https://github.com/user-attachments/assets/89fe41ed-c653-485b-a6d8-0b33832d950d)

Faça o mesmo processo indicado abaixo, colocando ANDROID_HOME como o nome da variável, e no valor coloque o path que você copiou no Android Studio. Salve essas alterações.

![image](https://github.com/user-attachments/assets/bd5a8ef5-a036-4ce1-a877-ad7bf75f5fd3)

### JAVA_HOME

Com o Java já instalado, você precisa achar o path onde está instalado, você pode usar o `where` no cmd do Windows:

```bash
where java
```

Nisso, ele pode retornar alguns valores como mostrado abaixo, mas você precisa copiar até onde se encontra o "jdk-{Version}", no meu caso seria `C:\Program Files\Java\jdk-18`

![image](https://github.com/user-attachments/assets/9333ac72-123f-4126-ae97-20bad92ab7f6)

Execute os mesmos passos para criar uma variável de ambiente mostrados no **ANDROID_HOME** mas agora coloque os valores apresentados abaixo, onde o Valor será o path copiado pela a etapa anterior.

![image](https://github.com/user-attachments/assets/00698fd2-3d8d-483a-9144-ed47c86a57bd)

### Buildando

Após ter configurado tudo isso, execute o comando abaixo dentro do projeto:

```
yarn run:android
```

Isso instalará a versão de Development Build no seu virtual device.

## Physical Device

Para essa etapa, também será necessário ter o **ANDROID_HOME** e **JAVA_HOME**.

Conecte seu dispositivo com um cabo USB na sua máquina e ative as seguintes opções nas Opções de Desenvolvedores.<br>
OBS: Pesquise como ativar as opções de desenvolvedores no seu dispositivo, pois ela não é ativa por padrão.

![image](https://github.com/user-attachments/assets/99fd519c-4261-450c-a81d-ac7f5a5a8f88)

Após isso execute `yarn run:android` acima para buildar em seu dispositivo.

### Possível erro com dois ou mais devices conectados

Caso tenha mais de um device conectado em sua máquina, pode ocorrer problemas ao buildar. Para resolver isso, use a flag `-d` ao buildar:

```bash
yarn run:android -d
```

Isso fará com que mostre as opções de devices para você buildar, selecione o que você quer e manda bala!

**Dica:** Para melhor administração de devices, pesquise um pouco sobre o adb (Android Debug Bridge) 
