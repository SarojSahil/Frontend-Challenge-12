import Cards from "./Cards";

const FeatureSection = () => {
  return (
    <section className="px-4 py-10">
      <h1 className="heading text-off-white text-center mb-4 max-w-sm mx-auto">Quality feedbacks for your SaaS products</h1>
      <h2 className="text-body text-dark-gray text-center mb-12">The blocks & components you need</h2>
      <Cards />
    </section>
  );
}

export default FeatureSection;