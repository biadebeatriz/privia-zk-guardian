# 🛡️ Privia – IA Médica com Privacidade Garantida

**Plataforma de validação de IA médica com provas de conhecimento zero (ZK).**
Hospitais treinam modelos localmente com dados sensíveis e geram provas criptográficas que seguradoras validam via zkVerify — tudo sem expor informações pessoais.

---

## 🧩 Visão Geral

Privia resolve um dos maiores desafios da saúde digital: **como validar a integridade de modelos de IA sem comprometer a privacidade dos dados médicos**.

- ✅ Garantia de conformidade com a **LGPD**
- 🔒 Privacidade total com **provas de conhecimento zero (ZK)**
- 🏥 IA treinada **localmente** pelo hospital
- 🧾 Validação **descentralizada** e auditável por seguradoras

---

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

---

## 🖥️ Estrutura do Projeto

```
src/
├── components/
│   ├── Header.tsx
│   └── ui/              # Botões, inputs, tabelas (shadcn/ui)
├── pages/
│   ├── HospitalDashboard.tsx
│   ├── InsurerDashboard.tsx
│   └── NotFound.tsx
├── App.tsx
├── Index.tsx            # Landing page com planos e introdução
└── main.tsx
```

---

## ⚙️ Funcionalidades

### Hospitais (`/hospital`)

- Upload de CSV com dados clínicos
- Treinamento de IA local com feedback em tempo real
- Geração de Provas ZK criptográficas
- Envio para zkVerify via front-end

### Seguradoras (`/insurer`)

- Input de Aggregation ID
- Verificação segura da prova ZK
- Score de integridade do modelo
- Dashboard com histórico e status da validação

---

## 💰 Planos para Seguradoras

| Plano            | Preço                   | Recursos incluídos                                                                          |
| ---------------- | ----------------------- | ------------------------------------------------------------------------------------------- |
| **Essencial**    | R$ 499/mês              | 1.000 provas/mês, dashboard básico, 1 usuário, suporte por e-mail                           |
| **Profissional** | R$ 1.499/mês            | 10.000 provas/mês, API completa, 5 usuários, relatórios avançados, suporte prioritário      |
| **Performance**  | 1,5% por plano aprovado | Uso ilimitado, pagamento sob demanda, dashboard completo, relatórios LGPD, suporte dedicado |

---

## 🎨 Design e Tecnologias

- **React + TypeScript**
- **TailwindCSS** com customizações de cores `privia-*`
- **shadcn/ui** para componentes
- **sonner** para notificações
- **React Router** para navegação SPA
- Estilo responsivo e moderno com animações

---

## 🔐 ZK e Compliance

- **Zero-Knowledge Proofs (ZK)**: Garantem que um modelo foi treinado corretamente **sem expor dados sensíveis**
- **zkVerify**: Validador externo que analisa apenas a prova e a integridade da IA
- **LGPD Compliance**: Nenhum dado pessoal sai do ambiente hospitalar

---

## 📈 Futuras Melhorias

- Integração real com zkVerify (on-chain ou verificador backend)
- Cadastro e autenticação de usuários
- Exportação de relatórios PDF
- Modo whitelabel para seguradoras parceiras
