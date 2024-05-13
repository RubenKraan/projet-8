import React from "react";
import Collapse from "../components/Collapse";
import Tally from "../components/KasaLocationComponents/tally";


const About = () => {
  //const currentPage = "/about";
  return (
    <div>
      <Collapse title="Competence">
        <a href="https://miro.com/welcomeonboard/eTlUNWUxSk95bzhEZHZqWXhjeHV1eHpiaW9lcmxxN3NGQ0x2SzNWM1M4ZFkzbVhoSFBSRUgyNUxCYVVSelpWWHwzNDU4NzY0NTg4Mzk1NTc5NDk0fDI=?share_link_id=348496172313">Lien vers mon tableau de mes competences sur miro</a>
      </Collapse>
      <Collapse title="CV">
        <a href="https://cvdesignr.com/p/66276834acc31">Lien vers mon CV</a>
      </Collapse>
      <Collapse title="Contact">
    <Tally />
      </Collapse>
      
    </div>
  );
};

export default About;
