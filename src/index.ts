import express from "express";
import cors from "cors";
import generateProof from "./routes/generateProof";
import verifyProof  from "./routes/verifyProof";

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/generate-proof", generateProof);
app.use("/verify-proof", verifyProof);

app.listen(3001, () => console.log("🚀 Privia backend na porta 3001"));