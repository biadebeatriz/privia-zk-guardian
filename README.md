# 🛡️ Privia – IA Médica com Privacidade Garantida

**Plataforma de validação de IA médica com provas de conhecimento zero (ZK).**
Marketplace de validação e compartilhamento de modelos de IA médica com provas de conhecimento zero (ZK).
Hospitais treinam modelos com dados sensíveis, geram provas criptográficas e os publicam com segurança. Seguradoras utilizam esses modelos para precificar riscos e produtos — tudo sem expor nenhuma informação pessoal.

---

## 🧩 Visão Geral

Imagine um hospital que desenvolve um modelo de machine learning com 98% de acurácia para prever câncer de mama. Apesar da eficiência, esse modelo não pode ser compartilhado: a LGPD e outras regulamentações bloqueiam o uso de dados sensíveis. Isso atrasa avanços médicos, encarece planos de saúde e trava a inovação. Essa é a realidade enfrentada por todos os hospitais brasileiros que fazem pesquisa com dados clínicos.

**Privia** resolve esse gargalo com tecnologia de ponta: provas de conhecimento zero. Por meio da zkVerify, garantimos que o modelo foi treinado corretamente — sem expor os dados utilizados. É como compartilhar uma receita sem revelar os ingredientes. A plataforma permite que hospitais publiquem modelos validados, e que seguradoras e operadoras usem esses modelos para simular riscos reais em seus clientes, tudo com privacidade total.

Nossa interface simula esse ciclo com fidelidade: o hospital publica o modelo validado com uma ZK Proof; a seguradora escolhe esse modelo, insere dados de um paciente (simulado), e recebe um **score de risco e uma estimativa de custo** (sinistro projetado). O processo é rápido, auditável e 100% compatível com a LGPD.

O sistema é composto por dois ambientes principais:

- **Marketplace de Modelos**: onde hospitais publicam modelos com prova de integridade.
- **Simulador de Precificação**: onde seguradoras aplicam o modelo em seus próprios dados para estimar riscos, com total segurança e privacidade.

### 🎯 Público-alvo

- Hospitais e clínicas que treinam IA e querem monetizar conhecimento validado;
- Seguradoras e operadoras de planos de saúde que querem precificar com base em risco real;
- Ecossistemas de inovação, pesquisa e auditoria médica.

### 🧪 Objetivo do MVP

Demonstrar que é possível **compartilhar modelos de IA médica com segurança criptográfica**, promovendo um ciclo virtuoso: diagnósticos mais precisos, planos mais baratos, ciência auditável e dados protegidos.

- ✅ Conformidade automática com a **LGPD**
- 🔒 Modelos validados com **Zero-Knowledge Proofs (ZK)**
- 🧠 IA treinada **localmente** e publicada com segurança
- 📊 Score de risco + estimativa de sinistro gerados com privacidade
- 🔁 Incentivos alinhados para hospitais, seguradoras e pacientes

### 🔐 Valor Entregue

O MVP do Privia entrega valor real mesmo em sua versão simulada. Ele prova que é possível construir um pipeline funcional de validação de IA médica sem acesso aos dados sensíveis. Hospitais ganham confiança na privacidade de seus dados e seguradoras ganham transparência e segurança técnica na avaliação de riscos. O projeto comunica com clareza o potencial de uma solução ZK-ready no setor de saúde, abrindo espaço para integração futura com implementações reais em blockchain e ZK como zkVerify.

## 🏁 Começando

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
git clone https://github.com/seu-usuario/privia-zk.git
cd privia-zk
npm install
npm run dev
```

Acesse a aplicação em `http://localhost:5173`.

## 🖥️ Estrutura do Projeto

```

```

## 🔐 Explicação Técnica – Integração com zkVerify

A arquitetura do projeto Privia foi construída desde o início com foco em integração com a infraestrutura pública **zkVerify**, que valida provas de conhecimento zero de forma auditável, segura e compatível com blockchain.

### Componentes técnicos

- **Noir (`main.nr`)**: circuito que representa a lógica que será provada. No MVP, está estruturado para simular uma IA preditiva com base em variáveis clínicas (ex: idade, histórico de tratamento, etc.).
- **nargo**: ferramenta de compilação e geração de provas baseada em Noir.
- **`proof_input.json` / `circuit.json`**: arquivos exportados pelo circuito e utilizados para simulação de verificação no frontend.

### Fluxo de Integração

O fluxo de integração foi desenhado para garantir privacidade e auditabilidade ponta a ponta. Ele permite que seguradoras utilizem modelos validados sem conhecer ou acessar os dados originais usados no treinamento, mantendo total compliance com a LGPD:

1. O hospital publica um modelo treinado com uma prova ZK de integridade, garantindo que a lógica do modelo foi executada corretamente sobre dados sensíveis sem expô-los;
2. A prova é anexada ao modelo no marketplace da plataforma e disponibilizada para consulta por seguradoras;
3. A seguradora acessa o modelo publicado, insere dados simulados de um cliente e inicia a simulação de precificação com base no modelo validado;
4. O sistema simula a execução do modelo com os dados da seguradora e retorna um score de risco (ex: 82%) e uma estimativa de sinistro (ex: R$ 18.000,00);
5. Toda simulação fica vinculada ao Aggregation ID da prova ZK, garantindo rastreabilidade pública e possibilidade de auditoria independente.

### 🧬 zkVerify como ponte entre ZK e Blockchain

A **zkVerify** atua como uma camada pública de verificação que conecta a geração de provas ZK com o registro imutável em blockchain. Ela permite que qualquer parte interessada — como seguradoras, reguladores ou auditores — valide uma prova sem depender da confiança na parte emissora (ex: hospital).

- **Imutabilidade**: As provas validadas podem ser ancoradas em blockchain, garantindo que não possam ser alteradas posteriormente;
- **Transparência**: Todas as validações são auditáveis e visíveis para terceiros;
- **Descentralização**: O hospital não precisa convencer individualmente cada seguradora — a prova é pública e verificável por qualquer um;
- **Compliance**: A rastreabilidade automatizada e a proteção de dados sensíveis garantem aderência à LGPD, GDPR e boas práticas de auditoria.

Essa integração estabelece uma ponte robusta entre **inteligência artificial privada** e **validação pública descentralizada**, garantindo integridade técnica com segurança jurídica.

### 📌 Status atual

## ⚡ Entrega de Valor com Menor Esforço

A principal entrega de valor com menor esforço no projeto **Privia** foi a construção de um MVP funcional que simula, de forma realista, o fluxo completo de validação de modelos de IA médica com garantias de privacidade via provas de conhecimento zero (ZK Proofs).

Mesmo sem a geração de provas reais nesta fase inicial, foi possível:

- Validar a proposta de valor com uma interface intuitiva e didática;
- Comunicar com clareza o diferencial técnico da arquitetura ZK;
- Demonstrar o uso real por dois tipos de usuário: hospital (emissor da prova) e seguradora (validadora);
- Simular resultados críveis com score de risco e estimativa de sinistro;
- Reproduzir visualmente a experiência de envio, verificação e rastreabilidade da prova.

Esse MVP acelerou o ciclo de aprendizado e feedback do produto com baixo esforço técnico, mantendo coerência com os objetivos de compliance, interoperabilidade e inovação aberta.

## ⚙️ Funcionalidades

A Privia entrega um fluxo completo, seguro e auditável de validação e uso de modelos de IA médica, com foco na privacidade dos dados e integridade das análises. A experiência do usuário é dividida em duas jornadas principais: **Hospitais** e **Seguradoras**.

### 🔬 Área do Hospital – Publicação de Modelos

- Treinamento local de modelos com dados clínicos sensíveis;
- Geração de prova de conhecimento zero (ZK Proof) utilizando Noir e nargo;
- Publicação do modelo no marketplace com metadados como condição médica, instituição e versão;
- Upload da prova vinculada ao modelo, identificada por um Aggregation ID;
- Acompanhamento do histórico completo de modelos publicados, incluindo status de validação e controle de versões.

### 💰 Área da Seguradora – Simulação de Risco

- Acesso ao marketplace com modelos públicos validados e auditáveis;
- Seleção de modelos por categoria clínica (ex: recidiva de câncer de mama);
- Inserção de dados simulados de pacientes (como idade, histórico, exames, etc.);
- Carregamento visual que simula a execução do modelo de forma segura;
- Retorno da análise com:
  - **Score de risco** (ex: 83%);
  - **Estimativa de custo ou sinistro** (ex: R$ 18.000,00);
- Acesso ao link público de verificação da prova ZK via zkVerify;
- Histórico de simulações com rastreabilidade total para decisões e auditorias.

Essas funcionalidades demonstram, mesmo em sua fase de MVP, a viabilidade técnica e operacional de um sistema que conecta IA médica com segurança, privacidade e transparência — pronto para validações públicas via zkVerify.

## 🎨 Design e Tecnologias

- **React + TypeScript**
- **TailwindCSS** com customizações de cores `privia-*`
- **shadcn/ui** para componentes
- **sonner** para notificações
- **React Router** para navegação SPA
- Estilo responsivo e moderno com animações

## 🚧 Próximos Passos

### 📅 Em até 6 meses

- Lançar o MVP funcional com hospitais-piloto e seguradoras early adopters;
- Validar o fluxo completo de publicação de modelo, simulação de cliente e retorno de score e sinistro;
- Consolidar a experiência do marketplace com feedback real de usuários.

### 🌍 Em até 12 meses

- Integrar uma arquitetura de IA federada para treinar modelos em diferentes instituições com segurança de dados;
- Estabelecer parcerias científicas para validação clínica dos modelos;
- Ampliar o reconhecimento da Privia como referência internacional em IA médica com ZK.

### 🏦 Longo prazo

- Securitizar ativos financeiros de saúde validados por provas ZK;
- Lançar produtos financeiros inovadores com base em risco clínico validado;
- Atrair investidores com transparência técnica e impacto social auditável.
