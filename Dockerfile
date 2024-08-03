# Use a imagem oficial do Node.js
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

RUN npm update

COPY . .

# Copie o restante dos arquivos da aplicação

# Exponha a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
# ENTRYPOINT ["nodemon", "/usr/src/app/index.js"]  
CMD ["npm", "run", "dev"]
