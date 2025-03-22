const express = require('express');
const app = express();
const port = 3000;

const medicamentos = [
    {
        "nome": "Morfina",
        "fabricante": "Vários fabricantes",
        "indicações": ["Alívio de dor grave e crônica, como dor oncológica ou pós-cirúrgica"],
        "dosagem": "Comprimidos de 10 mg a 30 mg, administrados a cada 4 horas, conforme prescrição médica"
    },
    {
        "nome": "Diazepam",
        "fabricante": "Vários fabricantes",
        "indicações": ["Tratamento de ansiedade, síndrome de abstinência alcoólica, distúrbios convulsivos"],
        "dosagem": "Comprimidos de 2 mg a 10 mg, conforme a necessidade e orientação médica"
    },
    {
        "nome": "Clonazepam",
        "fabricante": "Roche",
        "indicações": ["Tratamento de transtornos de ansiedade, síndrome do pânico, epilepsia"],
        "dosagem": "Comprimidos de 0,5 mg a 2 mg, tomados conforme orientação médica"
    },
    {
        "nome": "Oxicodona",
        "fabricante": "Vários fabricantes",
        "indicações": ["Alívio de dor intensa e crônica"],
        "dosagem": "Comprimidos de 5 mg a 10 mg, administrados a cada 4-6 horas, conforme orientação médica"
    },
    {
        "nome": "Fentanil",
        "fabricante": "Vários fabricantes",
        "indicações": ["Analgésico potente para dor intensa, como dor pós-cirúrgica ou oncológica"],
        "dosagem": "Patches (adesivos) de 25 mcg/h a 100 mcg/h, substituídos a cada 72 horas"
    },
    {
        "nome": "Alprazolam",
        "fabricante": "Vários fabricantes",
        "indicações": ["Tratamento de transtornos de ansiedade e pânico"],
        "dosagem": "Comprimidos de 0,25 mg a 1 mg, tomados de acordo com a necessidade"
    },
    {
        "nome": "Buprenorfina",
        "fabricante": "Vários fabricantes",
        "indicações": ["Tratamento da dependência de opióides e controle da dor intensa"],
        "dosagem": "Comprimidos sublinguais de 2 mg a 8 mg, conforme prescrição médica"
    },
    {
        "nome": "Ritalina (Metilfenidato)",
        "fabricante": "Novartis",
        "indicações": ["Tratamento do Transtorno de Déficit de Atenção e Hiperatividade (TDAH)"],
        "dosagem": "Comprimidos de 5 mg a 20 mg, administrados conforme orientação médica"
    },
    {
        "nome": "Lorazepam",
        "fabricante": "Vários fabricantes",
        "indicações": ["Tratamento de transtornos de ansiedade, insônia e síndrome de abstinência"],
        "dosagem": "Comprimidos de 1 mg a 4 mg, conforme prescrição médica"
    },
    {
        "nome": "Codeína",
        "fabricante": "Vários fabricantes",
        "indicações": ["Alívio de dor moderada e tosse"],
        "dosagem": "Comprimidos de 15 mg a 60 mg, administrados a cada 4-6 horas, conforme necessidade médica"
    }
]




app.get('/medicamentos-tarja-preta', (req, res) => {
  res.json(medicamentos);
});

app.get('/medicamentos-tarja-preta/:nome', (req, res) => {
  const nome = req.params.nome.toLowerCase();
  const medicamento = medicamentos.find(m => m.nome.toLowerCase() === nome);
  if (medicamento) {
    res.json(medicamento);
  } else {
    res.status(404).json({ mensagem: "Medicamento não encontrado" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
