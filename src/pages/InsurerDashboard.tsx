
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";

interface Verification {
  id: string;
  client: string;
  hospital: string;
  score: number;
  status: "valid" | "invalid";
  date: string;
}

const InsurerDashboard = () => {
  const [aggregationId, setAggregationId] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifications, setVerifications] = useState<Verification[]>([
    {
      id: "1",
      client: "João Silva",
      hospital: "Hospital Santa Casa",
      score: 94,
      status: "valid",
      date: "2025-05-12",
    },
    {
      id: "2",
      client: "Maria Santos",
      hospital: "Hospital São Lucas",
      score: 87,
      status: "valid",
      date: "2025-05-14",
    },
    {
      id: "3",
      client: "Pedro Oliveira",
      hospital: "Clínica São Paulo",
      score: 78,
      status: "invalid",
      date: "2025-05-15",
    },
  ]);

  const handleVerification = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!aggregationId.trim()) {
      toast.error("Por favor, insira um Aggregation ID válido.");
      return;
    }
    
    setIsVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      
      // Generate random score between 70 and 98
      const score = Math.floor(Math.random() * (98 - 70 + 1)) + 70;
      const status = score >= 80 ? "valid" : "invalid";
      
      // Add new verification to the list
      const newVerification: Verification = {
        id: (verifications.length + 1).toString(),
        client: "Novo Paciente",
        hospital: "Hospital " + Math.floor(Math.random() * 100),
        score,
        status,
        date: new Date().toISOString().split("T")[0],
      };
      
      setVerifications([newVerification, ...verifications]);
      setAggregationId("");
      
      if (status === "valid") {
        toast.success("Prova ZK verificada com sucesso!");
      } else {
        toast.error("Prova ZK inválida ou inconsistente.");
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-privia-petrol text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Privia</Link>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block">Seguradora Saúde Plus</span>
            <Button variant="outline" asChild className="text-white border-white hover:bg-white hover:text-privia-petrol">
              <Link to="/">Sair</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Painel da Seguradora</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Top Section - Verification Input */}
          <div className="lg:col-span-12">
            <div className="bg-white rounded-lg border border-privia-gray/20 p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Verificar Prova ZK</h2>
              
              <form onSubmit={handleVerification} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Label htmlFor="aggregation-id" className="sr-only">Aggregation ID</Label>
                  <Input
                    id="aggregation-id"
                    placeholder="Cole o Aggregation ID aqui"
                    value={aggregationId}
                    onChange={(e) => setAggregationId(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-privia-green hover:bg-privia-green/90 text-privia-petrol"
                  disabled={isVerifying}
                >
                  {isVerifying ? "Verificando..." : "Verificar Prova"}
                </Button>
              </form>
              
              <div className="mt-4 text-sm text-privia-petrol/70">
                <p>Cole o Aggregation ID fornecido pelo hospital para verificar a prova de forma segura e em compliance com a LGPD.</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Section - Verifications Table */}
          <div className="lg:col-span-12">
            <div className="bg-white rounded-lg border border-privia-gray/20 p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Histórico de Verificações</h2>
                <div className="flex items-center gap-2">
                  <Label htmlFor="filter" className="sr-only">Filtrar</Label>
                  <Input id="filter" placeholder="Buscar por cliente ou hospital..." className="w-64" />
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Hospital</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Explorer</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {verifications.map((verification) => (
                      <TableRow key={verification.id}>
                        <TableCell>{verification.client}</TableCell>
                        <TableCell>{verification.hospital}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-privia-gray/20 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${
                                  verification.score >= 90
                                    ? "bg-privia-green"
                                    : verification.score >= 80
                                    ? "bg-privia-blue"
                                    : "bg-privia-petrol/50"
                                }`}
                                style={{ width: `${verification.score}%` }}
                              ></div>
                            </div>
                            <span>{verification.score}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            verification.status === "valid"
                              ? "bg-privia-green/20 text-privia-green"
                              : "bg-red-100 text-red-800"
                          }`}>
                            {verification.status === "valid" ? "Válida" : "Inválida"}
                          </span>
                        </TableCell>
                        <TableCell>{verification.date}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" className="text-privia-blue hover:text-privia-blue/80 hover:bg-privia-blue/10">
                            Ver no zkVerify
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

export default InsurerDashboard;
