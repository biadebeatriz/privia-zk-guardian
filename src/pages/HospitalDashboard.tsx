import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import { UltraPlonkBackend } from "@aztec/bb.js";

interface ProofInput {
  x_input: number[];
  weights: number[];
  bias: number;
  y_expected: number;
}

interface Proof {
  id: string;
  hash: string;
  status: "valid" | "invalid" | "pending";
  date: string;
}

const HospitalDashboard: React.FC = () => {
  const [isTraining, setIsTraining] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isLoadingArtifacts, setIsLoadingArtifacts] = useState(true);
  const [circuit, setCircuit] = useState<{ bytecode: string } | null>(null);
  const [proofInput, setProofInput] = useState<ProofInput | null>(null);
  const [proofs, setProofs] = useState<Proof[]>([]);
  const [isTrained, setIsTrained] = useState(false);

  useEffect(() => {
    const loadArtifacts = async () => {
      try {
        const [cRes, iRes] = await Promise.all([
          fetch("/circuit.json"),
          fetch("/proof_input.json"),
        ]);
        if (!cRes.ok || !iRes.ok)
          throw new Error("Erro ao carregar artefatos ZK");
        const cJson = await cRes.json();
        const iJson = await iRes.json();
        setCircuit(cJson);
        setProofInput(iJson);
      } catch (err: any) {
        console.error(err);
        toast.error("Falha ao carregar circuito ou inputs de prova.");
      } finally {
        setIsLoadingArtifacts(false);
      }
    };
    loadArtifacts();
  }, []);

  const handleTrainAI = () => {
    setIsTraining(true);
    setTimeout(() => {
      setIsTraining(false);
      setIsTrained(true);
      toast.success("IA treinada com sucesso!");
    }, 2000);
  };

  const handleGenerateProof = async () => {
    if (!circuit || !proofInput) {
      console.warn("🚫 circuit ou proofInput estão ausentes");
      return;
    }

    console.log("🧪 Circuito:", circuit);
    console.log("🧪 ProofInput:", proofInput);

    setIsGenerating(true);

    try {
      const backend = new UltraPlonkBackend(circuit.bytecode);
      console.log("✅ Backend inicializado");
      console.log("📤 Enviando input para generateProof");
      const { proof, publicInputs } = await backend.generateProof(proofInput);
      console.log("✅ Prova recebida:", proof);

      const isValid = await backend.verifyProof({
        proof,
        publicInputs: [publicInputs],
      });
      console.log("✅ Validação:", isValid);

      const proofHex = Buffer.from(Object.values(proof)).toString("hex");
      const hash = `0x${proofHex.slice(0, 16)}...`;

      const newProof: Proof = {
        id: (proofs.length + 1).toString(),
        hash,
        status: isValid ? "valid" : "invalid",
        date: new Date().toISOString().split("T")[0],
      };

      setProofs([newProof, ...proofs]);

      toast[isValid ? "success" : "error"](
        isValid ? "Prova ZK verificada com sucesso!" : "Prova inválida."
      );
    } catch (err) {
      console.error("💥 Erro ao gerar/verificar a prova ZK:", err);
      toast.error("Erro ao gerar/verificar a prova.");
    } finally {
      setIsGenerating(false);
    }
  };

  const generateDisabled =
    isGenerating ||
    isTraining ||
    isLoadingArtifacts ||
    !circuit ||
    !proofInput ||
    !isTrained;

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-privia-petrol text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Privia<span className="text-privia-blue text-3xl">.</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block">Hospital Santa Casa</span>
            <Button variant="outline" asChild>
              <Link to="/">Sair</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Painel do Hospital</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="bg-white rounded-lg border border-privia-gray/20 p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">
                Treinar IA & Gerar Prova ZK
              </h2>

              <Button
                onClick={handleTrainAI}
                disabled={isTraining}
                className="bg-privia-blue hover:bg-privia-blue/90 text-white w-full mb-4"
              >
                {isTraining ? "Treinando..." : "Treinar IA"}
              </Button>

              <Button
                onClick={handleGenerateProof}
                disabled={generateDisabled}
                className={`w-full py-2 text-white rounded ${
                  generateDisabled
                    ? "bg-privia-gray/40 cursor-not-allowed"
                    : "bg-privia-green hover:bg-privia-green/90"
                }`}
              >
                {isLoadingArtifacts
                  ? "Carregando artefatos..."
                  : isGenerating
                  ? "Processando..."
                  : "Gerar & Verificar Prova ZK"}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg border border-privia-gray/20 p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Histórico de Provas</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Hash</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Data</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {proofs.map((p) => (
                      <TableRow key={p.id}>
                        <TableCell className="font-mono">{p.hash}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              p.status === "valid"
                                ? "bg-privia-green/20 text-privia-green"
                                : p.status === "invalid"
                                ? "bg-red-100 text-red-800"
                                : "bg-privia-gray/20 text-privia-petrol/70"
                            }`}
                          >
                            {p.status === "valid"
                              ? "Válida"
                              : p.status === "invalid"
                              ? "Inválida"
                              : "Pendente"}
                          </span>
                        </TableCell>
                        <TableCell>{p.date}</TableCell>
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
