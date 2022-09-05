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
        "skills": {
            "html":{
                "skillIcon": <TbBrandHtml5 />,
                "skillname": "HTML / HTML5"
            },
            "css":{
                "skillIcon": <TbBrandCss3 />,
                "skillname": "CSS / CSS3"
            },
            "javascript": {
                "skillIcon": <TbBrandJavascript />,
                "skillname": "JavaScript"
            },
            "wordpress":{
                "skillIcon": <SiWordpress />,
                "skillname": "wordpress"
            },
            "react":{
                "skillIcon": <SiReact />,
                "skillname": "React"
            },
            "next":{
                "skillIcon": <TbBrandNextjs />,
                "skillname": "next.js"
            },
            "python":{
                "skillIcon": <TbBrandPython />,
                "skillname": "python"
            },
            "flutter":{
                "skillIcon": <RiFlutterFill />,
                "skillname": "flutter"
            }
        }
    },
    {
        "id": 2,
        "title": "Designing",
        "description": "I mainly use Figma for mostof my design work, but I also use abode products for some projects like logo, and illustrations, I’m still learning webflow.",
        "icon": <MdOutlineDesignServices size="2em"/>,
        "skills": [
            {
                "id":1,
                "skillIcon": <SiFigma />,
                "skillname": "figma"
            },
            {
                "id":2,
                "skillIcon": <SiWebflow />,
                "skillname": "Webflow"
            },
            {
                "id":3,
                "skillIcon": <FaElementor />,
                "skillname": "elementor"
            },
            {
                "id":4,
                "skillIcon": <SiAdobexd />,
                "skillname": "Adode xD"
            },
            {
                "id":5,
                "skillIcon": <SiAdobeillustrator />,
                "skillname": "illustrator"
            },
            {
                "id":6,
                "skillIcon": <SiAdobephotoshop />,
                "skillname": "Photoshop"
            }
        ]
    }
]