import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded && panel);
  };

  return (
    <div>
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      sx={{ backgroundColor: "#0C134F" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 , color:'#fff' }}>
         1
        </Typography>
        <Typography sx={{ color: "text.secondary", color:'#fff' }}>
        What is blockchain and how does it work for e-voting?


        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{color:'#fff'}}>
        Blockchain is a secure digital ledger that stores information in a chain of blocks. In e-voting, each vote is recorded as a unique block, making it tamper-proof and transparent. This ensures your vote is counted accurately and remains unverifiable.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={expanded === "panel2"}
      onChange={handleChange("panel2")}
      sx={{ backgroundColor: "#0C134F" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="#fff" />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 , color:'#fff' }}>2</Typography>
        <Typography sx={{ color: "text.secondary",color:'#fff' }}>
        Is blockchain e-voting more secure than traditional voting methods?          </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{color:'#fff'}}>
        Blockchain-based systems offer several security advantages over traditional paper or electronic voting systems. The decentralized nature of the technology makes it resistant to hacking and manipulation. Additionally, the encrypted and immutable nature of the blockchain record provides a transparent and verifiable audit trail of votes.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={expanded === "panel3"}
      onChange={handleChange("panel3")}
      sx={{ backgroundColor: "#0C134F" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 , color:'#fff' }}>
3          </Typography>
        <Typography sx={{ color: "text.secondary" , color:'#fff' }}>
        How can I access the e-voting platform?          </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{color:'#fff'}}>
          To vote using our platform, you will need a web browser and an internet connection. You may also need to download or install additional software specific to the platform. We will provide clear instructions and tutorials to guide you through the process.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={expanded === "panel4"}
      onChange={handleChange("panel4")}
      sx={{ backgroundColor: "#0C134F" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 , color:'#fff' }}>
4          </Typography>
        <Typography sx={{ color: "text.secondary" , color:'#fff' }}>
        Is my vote anonymous on the blockchain?       </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{color:'#fff'}}>
        While the individual votes themselves are anonymized on the blockchain, your identity may be linked to your vote depending on the specific implementation of the system. Some platforms utilize additional layers of anonymity, such as zero-knowledge proofs, to further protect voter privacy.          </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={expanded === "panel5"}
      onChange={handleChange("panel5")}
      sx={{ backgroundColor: "#0C134F" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 , color:'#fff' }}>
5         </Typography>
        <Typography sx={{ color: "text.secondary" , color:'#fff' }}>
        What happens if there is a dispute about the election results?      </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{color:'#fff'}}>
        The transparent and verifiable nature of the blockchain record minimizes room for disputes. However, if concerns arise, the system may include built-in mechanisms for recounts or audits. These could involve independent election observers or other trusted entities verifying the integrity of the voting process and results on the blockchain.           </Typography>
      </AccordionDetails>
    </Accordion>
   
  </div>
  );
}
