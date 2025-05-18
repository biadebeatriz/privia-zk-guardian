#!/bin/bash

# Nome do ambiente
ENV_NAME="venv"

# Verifica se o Python está instalado
if ! command -v python3 &> /dev/null
then
    echo "Python3 não encontrado. Instale o Python 3 antes de continuar."
    exit
fi

# Cria o ambiente virtual
echo "Criando ambiente virtual em ./$ENV_NAME"
python3 -m venv $ENV_NAME

# Ativa o ambiente virtual
source $ENV_NAME/bin/activate

# Instala as dependências
echo "Instalando scikit-learn"
pip install --upgrade pip
pip install scikit-learn

# Roda o script (altere o nome se necessário)
echo "Executando cancer_svm.py"
python cancer_svm.py

# Informa que terminou
echo "✅ Ambiente configurado e script executado."
