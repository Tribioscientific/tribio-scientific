import { markdownify } from "@lib/utils/textConverter";

const  Our = ({ data }) => {
  const { frontmatter, content } = data;

  return (
    <section className="section">
      <div className="container">
         
           <h2>Our Alliance</h2>
           </div>
    </section>
  );
};

export default Our;
