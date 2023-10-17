import NotFound from "@layouts/404";
import About from "@layouts/About";
import Base from "@layouts/Baseof";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import Our from "@layouts/our-alliance";
import Nutrients from "@layouts/Nutrients ";
import Pharmaceuticals from "@layouts/Pharmaceuticals";
import SugarAndDistillery from "@layouts/Sugar-and-Distillery";
import PulpAndPaper from "@layouts/Pulp-and-Paper";
import Agriculture from "@layouts/Agriculture";
import WasteToEnergy from "@layouts/Waste-to-Energy";
import AnimalFeed from "@layouts/Animal-Feed";
import ETPCPU from "@layouts/ETP-CPU-Nutrient";
import DigesterNutrient from "@layouts/DigesterNutrient";
import MicrobialCulture from "@layouts/MicrobialCulture";
import MoreDetailsPdf from "@layouts/MoreDetailsPdf";
import PharmaceuticalsImpurities from "@layouts/Pharmaceuticals-Impurities";
import PharmaceuticalsStandards from "@layouts/Pharmaceuticals-Standards";
import WorkingStandard from "@layouts/Working-Standard";
import FoodAndBeverageReferenceMaterials from "@layouts/Food-and-Beverage-Reference-Materials";
import DyesAndColorReferenceStandards from "@layouts/Dyes-and-Color-Reference-Standards";
import PharmacopiealReferenceStandards from "@layouts/Pharmacopieal-Reference-Standards";
import ImpurityStandards from "@layouts/Impurity-Standards";
import NitrosaminesImpurities from "@layouts/Nitrosamines-Impurities";
import OurTeam from "@layouts/our-team";


import { getRegularPage, getSinglePage } from "@lib/contentParser";

// for all regular pages
const RegularPages = ({ data }) => {
  const { title, meta_title, description, image, noindex, canonical, layout } =
    data.frontmatter;
  const { content } = data;

  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
      meta_title={meta_title}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      {layout === "404" ? (
        <NotFound data={data} />
      ) : layout === "about" ? (
        <About data={data} />
      ) : layout === "contact" ? (
        <Contact data={data} />
      ) : layout === "our-alliance" ? (
        <Our data={data} />
      ) 
      : layout === "pharmaceuticals" ? (
        <Pharmaceuticals data={data} />
      ) 
      : layout === "nutrients" ? (
        <Nutrients data={data} />
      ) : layout === "sugar-and-distillery" ? (
        <SugarAndDistillery data={data} />
      )
      : layout === "pulp-and-paper" ? (
        <PulpAndPaper data={data} />
      )
      : layout === "agriculture" ? (
        <Agriculture data={data} />
      )
      : layout === "waste-to-energy" ? (
        <WasteToEnergy  data={data} />
      )
      : layout === "animal-feed" ? (
        <AnimalFeed  data={data} />
      ) 
      : layout === "etp-cpu-nutrient" ? (
        <ETPCPU  data={data} />
      ) 
      : layout === "digester-nutrient" ? (
        <DigesterNutrient  data={data} />
      ) 
      : layout === "microbial-culture" ? (
        <MicrobialCulture  data={data} />
      )
      : layout === "moredetailspdf" ? (
        <MoreDetailsPdf  data={data} />
      )
      : layout === "pharmaceuticals-impurities" ? (
        <PharmaceuticalsImpurities  data={data} />
      )
      : layout === "pharmaceuticals-standards" ? (
        <PharmaceuticalsStandards  data={data} />
      )
      : layout === "working-standard" ? (
        <WorkingStandard  data={data} />
      )
      : layout === "pharmacopieal-reference-standards" ? (
        <PharmacopiealReferenceStandards  data={data} />
      )
      : layout === "food-and-beverage-reference-materials" ? (
        <FoodAndBeverageReferenceMaterials  data={data} />
      )
      : layout === "dyes-and-color-reference-standards" ? (
        <DyesAndColorReferenceStandards  data={data} />
      ) 
      : layout === "impurity-standards" ? (
        <ImpurityStandards  data={data} />
      )
      : layout === "nitrosamines-impurities" ? (
        <NitrosaminesImpurities  data={data} />
      )
      : layout === "our-team" ? (
        <OurTeam  data={data} />
      )
      : (
        <Default data={data} />
      )}
    </Base>
  );
};
export default RegularPages;

// for regular page routes
export const getStaticPaths = async () => {
  const slugs = getSinglePage("content");
  const paths = slugs.map((item) => ({
    params: {
      regular: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// for regular page data
export const getStaticProps = async ({ params }) => {
  const { regular } = params;
  const allPages = await getRegularPage(regular);

  return {
    props: {
      slug: regular,
      data: allPages,
    },
  };
};
