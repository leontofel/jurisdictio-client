
const features = [
  {
    title: 'Respostas de Especialistas',
    description: 'Receba respostas detalhadas de profissionais qualificados.',
    icon: '🧑‍⚖️',
  },
  {
    title: 'Comunidade Ativa',
    description:
      'Participe de uma comunidade ativa de advogados e entusiastas do direito.',
    icon: '👥',
  },
  {
    title: 'Perguntas Ilimitadas',
    description:
      'Faça quantas perguntas quiser e obtenha respostas rapidamente.',
    icon: '❓',
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">
          Por que usar o Jurisdictio?
        </h2>
        <div className="flex flex-wrap justify-center">
          {features.map((feature) => (
            <div key={feature.title} className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};