const SectionTitle = ({ title }: { title: string }) => {
  return (
    <>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        {title}
      </h2>
    </>
  );
};

export default SectionTitle;
