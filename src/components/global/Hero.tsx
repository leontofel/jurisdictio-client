export const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Bem-vindo ao Jurisdictio
        </h1>
        <p className="text-lg lg:text-2xl mb-8">
          Sua plataforma de perguntas e respostas jurídicas. Obtenha ajuda de
          especialistas e contribua com a comunidade.
        </p>
        <a
          href="/signup"
          className="bg-accent text-white py-3 px-6 rounded-full text-lg font-bold hover:bg-accent-dark"
        >
          Cadastre-se Gratuitamente
        </a>
      </div>
    </section>
  );
};
