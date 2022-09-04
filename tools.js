// Importing Icons
import { HiOutlineColorSwatch } from "react-icons/hi";
import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript } from "react-icons/tb";
import { SiWordpress, SiReact } from "react-icons/si";
import { AiOutlineCode } from "react-icons/ai";

export const tools = [
    {
        "id": 1,
        "title": "Coding",
        "description": "These are the main programming languages I use in both my professional and personal projects. I also use other languages like C++, Apex (Salesforce), SOAP (Salesforce), VB.Net etc.",
        "icon": <AiOutlineCode size="1.6em"/>,
        "skills": [
            {
                "skillIcon": <TbBrandHtml5 />,
                "skillname": "HTML / HTML5"
            },
            {
                "skillIcon": <TbBrandCss3 />,
                "skillname": "CSS / CSS3"
            },
            {
                "skillIcon": <TbBrandJavascript />,
                "skillname": "JavaScript"
            },
            {
                "skillIcon": <SiWordpress />,
                "skillname": "wordpress"
            },
            {
                "skillIcon": <SiReact />,
                "skillname": "React"
            }
        ]
    }
]