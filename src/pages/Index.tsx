import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Shield, Hospital, FileCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-32 pb-20 px-4 bg-gradient-to-br from-privia-petrol via-privia-petrol/90 to-privia-petrol/80 min-h-screen flex items-center"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-enter">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                IA Médica com Privacidade Absoluta
              </h1>
              <h3 className="text-xl md:text-2xl mb-8 font-normal text-privia-gray">
                Hospitais geram provas ZK localmente. Seguradoras validam com
                zkVerify, sem acessar dados sensíveis.
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/hospital" className="btn-primary text-center">
                  Painel do Hospital
                </Link>
                <Link to="/insurer" className="btn-secondary text-center">
                  Painel da Seguradora
                </Link>
              </div>
            </div>
            <div className="relative animate-enter hidden lg:block">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-privia-blue/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <img
                  src="/Logo-Privia.png"
                  alt="Logo Privia"
                  className="w-[300px] h-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Como Funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover-scale">
              <div className="w-20 h-20 rounded-full bg-privia-blue/10 flex items-center justify-center mb-4">
                <Hospital className="w-10 h-10 text-privia-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Treinamento Local</h3>
              <p className="text-privia-petrol/80">
                Hospital treina IA com dados próprios, mantendo todas as
                informações sensíveis dentro do seu ambiente seguro.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg hover-scale">
              <div className="w-20 h-20 rounded-full bg-privia-blue/10 flex items-center justify-center mb-4">
                <Shield className="w-10 h-10 text-privia-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Prova ZK</h3>
              <p className="text-privia-petrol/80">
                Gera prova criptográfica automaticamente, que comprova a
                validade sem revelar os dados originais do paciente.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg hover-scale">
              <div className="w-20 h-20 rounded-full bg-privia-green/20 flex items-center justify-center mb-4">
                <FileCheck className="w-10 h-10 text-privia-green" />
              </div>
              <h3 className="text-xl font-bold mb-3">Verificação Segura</h3>
              <p className="text-privia-petrol/80">
                Seguradora valida via zkVerify com Aggregation ID, garantindo
                compliance com LGPD e protegendo dados sensíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section id="planos" className="py-20 px-4 bg-privia-gray/10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Planos para Seguradoras
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plano Essencial */}
            <div className="plan-card">
              <div className="bg-privia-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-privia-blue text-xl font-bold">🟦</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Essencial</h3>
              <p className="text-2xl font-bold text-center mb-6">
                R$ 499<span className="text-sm font-normal">/mês</span>
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-privia-blue mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>1.000 provas/mês</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-privia-blue mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Dashboard básico</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-privia-blue mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>1 usuário</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-privia-blue mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Suporte por e-mail</span>
                </li>
              </ul>

              <button className="btn-outline w-full">Ver Detalhes</button>
            </div>

            {/* Plano Profissional */}
            <div className="plan-card-featured transform translate-y-[-8px] md:translate-y-[-16px]">
              <div className="absolute -top-3 right-0 left-0 mx-auto w-max bg-privia-blue text-white text-sm font-medium py-1 px-3 rounded">
                Mais Popular
              </div>
              <div className="bg-privia-green/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-privia-green text-xl font-bold">🟩</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Profissional
              </h3>
              <p className="text-2xl font-bold text-center mb-6">
                R$ 1.499<span className="text-sm font-normal">/mês</span>
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-privia-green mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>10.000 provas/mês</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-privia-green mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>API completa</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-privia-green mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>5 usuários</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-privia-green mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Relatórios avançados</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-privia-green mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Suporte prioritário</span>
                </li>
              </ul>

              <button className="bg-privia-green text-privia-petrol hover:bg-privia-green/90 transition-colors py-3 px-6 rounded-md font-medium w-full hover-scale">
                Assinar
              </button>
            </div>

            {/* Plano Performance */}
            <div className="plan-card">
              <div className="bg-privia-petrol/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-privia-petrol text-xl font-bold">🟧</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                Performance
              </h3>
              <p className="text-2xl font-bold text-center mb-6">
                1,5%
                <span className="text-sm font-normal">por plano aprovado</span>
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-privia-blue mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Uso ilimitado</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-privia-blue mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Pagamento sob demanda</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-privia-blue mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Dashboard + relatórios LGPD</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-privia-blue mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Ideal para grandes seguradoras</span>
                </li>
              </ul>

              <button className="btn-outline w-full">Ver Detalhes</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-privia-petrol text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Privia</h2>
              <p className="text-privia-gray">
                Privacidade e inovação para a saúde.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <a
                href="#"
                className="text-white hover:text-privia-gray transition-colors"
              >
                Contato
              </a>
              <a
                href="#"
                className="text-white hover:text-privia-gray transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-white hover:text-privia-gray transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-white hover:text-privia-gray transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-privia-gray/20 text-center text-privia-gray">
            <p>
              &copy; {new Date().getFullYear()} Privia. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
