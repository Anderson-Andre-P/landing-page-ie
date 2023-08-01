export const metadata = {
  title: "Cadastrar uma conta",
  description: "Page description",
};

import SectionParagraph from "@/components/sectionParagraph";
import SectionTitle from "@/components/sectionTitle";
import Image from "next/image";
import { IconType } from "react-icons";
import { FaBalanceScale, FaCheck, FaMedal, FaUsers } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { PiLampFill, PiPlantBold } from "react-icons/pi";

export default function About() {
  const List = ({ text }: any) => (
    <p className="mb-5 flex items-center text-lg font-medium text-gray-500 dark:text-gray-400">
      <span className="mr-4 p-4 flex justify-center items-center rounded-full bg-red-600 h-12 w-12 bg-opacity-10">
        <FaCheck className="text-red-600 w-6 h-6 dark:text-red-600" />
      </span>
      {text}
    </p>
  );

  const ListTwo = ({
    iconName,
    title,
    legend,
  }: {
    iconName: IconType;
    title: string;
    legend: string;
  }) => {
    const Icon = iconName;
    return (
      <div>
        <div className="flex justify-center items-center mb-4 lg:h-12 lg:w-12 dark:bg-primary-900 w-10 h-10 rounded-full bg-red-600">
          <Icon className="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-white" />
          {/* <FaMedal className="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-white" /> */}
        </div>
        <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{legend}</p>
      </div>
    );
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="pb-16 md:pb-20 lg:pb-28">
            <div className="mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <SectionTitle title="Nossa missão" />

                <SectionParagraph paragraph="Somos impulsionados por uma única missão: capacitar empresas e indivíduos a alcançar seu máximo potencial através da tecnologia. Acreditamos que a inovação tecnológica pode transformar negócios, melhorar processos e enriquecer vidas." />

                <SectionParagraph paragraph="Nossos especialistas altamente qualificados trabalham incansavelmente para fornecer soluções personalizadas e de ponta, alinhadas às necessidades exclusivas de nossos clientes. Buscamos constantemente superar expectativas, entregando produtos e serviços que impulsionam o crescimento e o sucesso a longo prazo." />

                <SectionParagraph paragraph="Com paixão pela excelência e compromisso com a qualidade, estamos comprometidos em ser um parceiro confiável e confiável para todos os nossos clientes, ajudando-os a se destacar em um cenário tecnológico em constante evolução." />

                <div
                  className="mx-[-12px] flex flex-wrap"
                  data-wow-delay=".15s"
                >
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Inovação personalizada para o seu negócio" />
                    <List text="Especialistas comprometidos com o seu sucesso" />
                    <List text="Soluções tecnológicas para uma vantagem competitiva" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Soluções personalizadas para impulsionar o sucesso dos nossos clientes" />
                    <List text="Sempre avançando com tecnologias de ponta" />
                    <List text="Construindo um futuro de sucesso ao lado dos nossos clientes" />
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2 ">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/ie-logo.png"
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full lg:mr-0 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-screen-md mb-8 lg:mb-16 ">
            <SectionTitle title="Nossos valores" />

            <SectionParagraph paragraph="Na IE Tecnologia, nossos valores fundamentais orientam cada aspecto de nossas operações e interações com clientes e parceiros. Eles são a essência do nosso DNA corporativo e definem quem somos como empresa." />
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <ListTwo
              iconName={FaMedal}
              title="Excelência"
              legend="Buscamos a excelência em tudo o que fazemos. Desde o desenvolvimento de produtos até o atendimento ao cliente, nos esforçamos para superar as expectativas e alcançar a mais alta qualidade."
            />

            <ListTwo
              iconName={FaBalanceScale}
              title="Integridade"
              legend="Construímos relacionamentos sólidos e duradouros com base na honestidade, transparência e ética. Valorizamos a confiança depositada em nós e agimos com integridade em todas as situações."
            />

            <ListTwo
              iconName={PiLampFill}
              title="Inovação"
              legend="Abraçamos a mudança e a inovação como pilares do nosso crescimento. Estamos sempre em busca de soluções criativas e tecnologicamente avançadas para enfrentar os desafios do mundo atual."
            />

            <ListTwo
              iconName={FaUsers}
              title="Colaboração"
              legend="Acreditamos no poder da colaboração. Trabalhamos em estreita parceria com nossos clientes e colegas para alcançar objetivos comuns e impulsionar o sucesso compartilhado."
            />

            <ListTwo
              iconName={PiPlantBold}
              title="Responsabilidade social"
              legend="Comprometemo-nos a ter um impacto positivo na sociedade e no meio ambiente. Buscamos práticas sustentáveis e apoiamos iniciativas de responsabilidade social para fazer a diferença em nossa comunidade."
            />

            <ListTwo
              iconName={ImPower}
              title="Empoderamento"
              legend="Acreditamos no poder transformador da tecnologia e buscamos capacitar nossos clientes e colaboradores a alcançarem seus objetivos com confiança. Promovemos um ambiente de aprendizado contínuo, onde a criatividade e a inovação florescem, permitindo que todos prosperem e alcancem seu potencial máximo."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
