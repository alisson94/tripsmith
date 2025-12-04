import { generateScript } from "@/services/geminiService";

export default async function Home() {

  const dados = await generateScript("Sao Paulo", 3);
  console.log(dados);


  return (
    <main>
      <div>resp</div>
    </main>
  );
}
