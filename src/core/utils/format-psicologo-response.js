export default function formatPsicologoResponse(psicologo) {
  const { id, nome, email, apresentacao } = psicologo;

  return {
    id,
    nome,
    email,
    apresentacao,
  };
}
