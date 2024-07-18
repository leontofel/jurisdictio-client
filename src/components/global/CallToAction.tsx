
export const CallToAction = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Pronto para começar?
        </h2>
        <p className="text-lg lg:text-xl mb-8">
          Cadastre-se agora e faça parte da nossa comunidade jurídica.
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