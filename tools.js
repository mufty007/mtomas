// Importing Icons
import { RiFlutterFill } from "react-icons/Ri";
import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandNextjs, TbBrandPython } from "react-icons/tb";
import { SiWordpress, SiReact, SiFigma, SiWebflow, SiAdobexd, SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";
import { AiOutlineCode } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaElementor } from "react-icons/fa";

export const tools = [
    {
        "id": 1,
        "title": "Coding",
        "description": "These are the main programming languages I use in both my professional and personal projects. I also use other languages like C++, Apex (Salesforce), SOAP (Salesforce), VB.Net etc.",
        "icon": <AiOutlineCode size="2em"/>,
        "skills": [
            {
                "skillIcon": <TbBrandHtml5 size="1.5em"/>,
                "skillname": "HTML / HTML5"
            },
            {
                "skillIcon": <TbBrandCss3 size="1.5em"/>,
                "skillname": "CSS / CSS3"
            },
            {
                "skillIcon": <TbBrandJavascript size="1.5em"/>,
                "skillname": "JavaScript"
            },
            {
                "skillIcon": <SiWordpress size="1.5em"/>,
                "skillname": "wordpress"
            },
            {
                "skillIcon": <SiReact size="1.5em"/>,
                "skillname": "React"
            },
            {
                "skillIcon": <TbBrandNextjs size="1.5em"/>,
                "skillname": "next.js"
            },{
                "skillIcon": <TbBrandPython size="1.5em"/>,
                "skillname": "python"
            },
            {
                "skillIcon": <RiFlutterFill size="1.5em"/>,
                "skillname": "flutter"
            }
        ]
    },
    {
        "id": 2,
        "title": "Designing",
        "description": "I mainly use Figma for mostof my design work, but I also use abode products for some projects like logo, and illustrations, I’m still learning webflow.",
        "icon": <MdOutlineDesignServices size="2em"/>,
        "skills": [
            {
                "skillIcon": <SiFigma size="1.5em"/>,
                "skillname": "figma"
            },
            {
                "skillIcon": <SiWebflow size="1.5em"/>,
                "skillname": "Webflow"
            },
            {
                "skillIcon": <FaElementor size="1.5em"/>,
                "skillname": "elementor"
            },
            {
                "skillIcon": <SiAdobexd size="1.5em"/>,
                "skillname": "Adode xD"
            },
            {
                "skillIcon": <SiAdobeillustrator size="1.5em"/>,
                "skillname": "illustrator"
            },
            {
                "skillIcon": <SiAdobephotoshop size="1.5em"/>,
                "skillname": "Photoshop"
            }
        ]
    }
]