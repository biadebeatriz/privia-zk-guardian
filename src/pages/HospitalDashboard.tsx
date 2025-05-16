
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";

interface Proof {
  id: string;
  hash: string;
  status: "valid" | "pending";
  date: string;
}

const HospitalDashboard = () => {
  const [isTraining, setIsTraining] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [proofGenerated, setProofGenerated] = useState(false);
  const [proofs, setProofs] = useState<Proof[]>([
    {
      id: "1",
      hash: "0x7a8b...3f2e",
      status: "valid",
      date: "2025-05-10",
    },
    {
      id: "2",
      hash: "0x3c4d...1a2b",
      status: "pending",
      date: "2025-05-15",
    },
  ]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleTrainAI = () => {
    if (!file) {
      toast.error("Por favor, faça upload de um arquivo CSV primeiro.");
      return;
    }

    setIsTraining(true);
    
    // Simulate training process
    setTimeout(() => {
      setIsTraining(false);
      toast.success("IA treinada com sucesso!");
    }, 2000);
  };

  const handleGenerateProof = () => {
    if (!file) {
      toast.error("Por favor, faça upload de um arquivo CSV primeiro.");
      return;
    }

    setIsGenerating(true);
    
    // Simulate proof generation
    setTimeout(() => {
      setIsGenerating(false);
      setProofGenerated(true);
      toast.success("Prova ZK gerada com sucesso!");
    }, 2500);
  };

  const handleSendProof = () => {
    if (!proofGenerated) {
      toast.error("Por favor, gere uma prova ZK primeiro.");
      return;
    }

    setIsSending(true);
    
    // Simulate sending proof
    setTimeout(() => {
      setIsSending(false);
      
      // Add new proof to the list
      const newProof: Proof = {
        id: (proofs.length + 1).toString(),
        hash: `0x${Math.random().toString(16).substr(2, 4)}...${Math.random().toString(16).substr(2, 4)}`,
        status: "pending",
        date: new Date().toISOString().split("T")[0],
      };
      
      setProofs([newProof, ...proofs]);
      setProofGenerated(false);
      setFile(null);
      
      toast.success("Prova enviada para zkVerify com sucesso!");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-privia-petrol text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Privia</Link>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block">Hospital Santa Casa</span>
            <Button 
              variant="outline" 
              asChild 
              className="text-privia-green border-white hover:bg-white hover:text-privia-petrol focus:text-privia-petrol"
            >
              <Link to="/">Sair</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Painel do Hospital</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - File Upload and Actions */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-lg border border-privia-gray/20 p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Treinar IA e Gerar Prova ZK</h2>
              
              {/* File Upload */}
              <div className="mb-6">
                <Label htmlFor="file" className="mb-2 block">Arquivo CSV de Pacientes</Label>
                <div className="border-2 border-dashed border-privia-gray/30 rounded-lg p-6 flex flex-col items-center justify-center">
                  <svg className="w-12 h-12 text-privia-petrol/50 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                  <p className="text-privia-petrol/70 mb-2">
                    {file ? file.name : "Arraste e solte o arquivo CSV ou clique para selecionar"}
                  </p>
                  <input
                    id="file"
                    type="file"
                    accept=".csv"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <Button
                    onClick={() => document.getElementById("file")?.click()}
                    variant="outline"
                    className="mt-2"
                  >
                    Selecionar Arquivo
                  </Button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                <Button
                  className="bg-privia-blue hover:bg-privia-blue/90 text-white w-full"
                  onClick={handleTrainAI}
                  disabled={isTraining || !file}
                >
                  {isTraining ? "Treinando..." : "Treinar IA"}
                </Button>
                
                <Button
                  className="bg-privia-green hover:bg-privia-green/90 text-privia-petrol w-full"
                  onClick={handleGenerateProof}
                  disabled={isGenerating || !file}
                >
                  {isGenerating ? "Gerando..." : "Gerar Prova ZK"}
                </Button>
                
                <Button
                  variant="outline"
                  className="border-privia-gray/50 text-privia-petrol w-full"
                  onClick={handleSendProof}
                  disabled={isSending || !proofGenerated}
                >
                  {isSending ? "Enviando..." : "Enviar para zkVerify"}
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right Column - Proofs Table */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg border border-privia-gray/20 p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Histórico de Provas</h2>
                <div className="flex items-center gap-2">
                  <Label htmlFor="filter" className="sr-only">Filtrar</Label>
                  <Input id="filter" placeholder="Buscar por hash..." className="w-64" />
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Hash</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {proofs.map((proof) => (
                      <TableRow key={proof.id}>
                        <TableCell className="font-mono">{proof.hash}</TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            proof.status === "valid"
                              ? "bg-privia-green/20 text-privia-green"
                              : "bg-privia-gray/20 text-privia-petrol/70"
                          }`}>
                            {proof.status === "valid" ? "Válida" : "Pendente"}
                          </span>
                        </TableCell>
                        <TableCell>{proof.date}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" className="text-privia-blue hover:text-privia-blue/80 hover:bg-privia-blue/10">
                            Detalhes
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HospitalDashboard;
