const SectionParagraph = ({ paragraph }: { paragraph: string }) => {
  return (
    <>
      <p className="text-gray-500 sm:text-xl dark:text-gray-400 mb-4 lg:mb-6">
        {paragraph}
      </p>
    </>
  );
};

export default SectionParagraph;
