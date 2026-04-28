// ========================================
// Aula 08 — Default Export
// ========================================
// Implemente a função e exporte com "export default".
export default function formatarNome(nome) {
  const primeiraLetra = nome.charAt(0).toUpperCase();
  const restante = nome.slice(1).toLowerCase();
  return primeiraLetra + restante;
}
