#!/usr/bin/env python3

import json
import os
from sklearn.datasets import load_breast_cancer
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC

# escala fixa
SCALE = 10_000

def main():
    # 1) Carrega dados
    data = load_breast_cancer()
    X, y = data.data, data.target

    # 2) Normaliza e separa
    X = StandardScaler().fit_transform(X)
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=5
    )

    # 3) Treina SVM linear
    model = SVC(kernel="linear")
    model.fit(X_train, y_train)

    # 4) Seleciona a primeira amostra de teste
    x_input_float = X_test[0]       # vetor (30,)
    y_expected    = int(y_test[0])  # 0 ou 1

    # 5) Converte para ponto fixo (i32)
    x_input_int = (x_input_float * SCALE).round().astype(int).tolist()
    weights_int = (model.coef_[0] * SCALE).round().astype(int).tolist()
    bias_int    = int(round(model.intercept_[0] * SCALE))

    # 6) Prepara o JSON de inputs para o frontend
    proof_input = {
        "x_input":    x_input_int,
        "weights":    weights_int,
        "bias":       bias_int,
        "y_expected": y_expected
    }

    # 7) Determina caminho de saída em public/proof_input.json
    project_root = os.path.dirname(os.path.abspath(__file__))
    out_dir = os.path.join(project_root, "public")
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, "proof_input.json")

    # 8) Grava o JSON
    with open(out_path, "w") as f:
        json.dump(proof_input, f, indent=2)

    print(f"✅ proof_input.json gerado em {out_path}")

if __name__ == "__main__":
    main()