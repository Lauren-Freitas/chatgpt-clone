export const promptController = async (req, res) => {
  console.log("🎯 Requisição recebida no backend!");
  return res.status(200).json({ message: "Olá do servidor!" });
};
