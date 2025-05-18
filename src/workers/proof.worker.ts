import { UltraPlonkBackend } from "@aztec/bb.js";

interface ProofInput {
  x_input: number[];
  weights: number[];
  bias: number;
  y_expected: number;
}

interface WorkerMessage {
  circuit: { bytecode: string };
  input: ProofInput;
}

self.onmessage = async (event: MessageEvent<WorkerMessage>) => {
  try {
    const { circuit, input } = event.data;
    const backend = new UltraPlonkBackend(circuit.bytecode);
    const { proof, publicInputs } = await backend.generateProof(input);
    const isValid = await backend.verifyProof({ proof, publicInputs: [publicInputs] });

    const proofHex = Buffer.from(Object.values(proof)).toString("hex");
    const hash = `0x${proofHex.slice(0, 16)}...`;

    self.postMessage({ success: true, hash, isValid });
  } catch (error) {
    self.postMessage({ success: false, error: (error as Error).message });
  }
};
