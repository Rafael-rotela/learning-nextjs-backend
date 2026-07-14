export default async function Info({ params }: { params: Promise<{ productId: string }> }) {
  // Aguarda a resolução da promise para acessar o valor
  const { productId } = await params;

  return (
    <>
      <p>informações do produto {productId}</p>
    </>
  );
}