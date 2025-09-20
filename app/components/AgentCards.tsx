import { ExpressiveCard } from "@carbon/ibm-products";
import { Column, FlexGrid, Row } from "@carbon/react";

import type { AgentType, AgentContentType } from "~/types/agents";

const AgentCardBody = ({agentContent}: { agentContent: AgentContentType }) => {
  return (
    <>
      <p>{agentContent.description}</p>
      <div>
        {agentContent.sections.map(({ title, body }) => (
          <>
            <h3>{title}</h3>
            <p>{body}</p>
          </>
        ))}
      </div>
    </>
  )
}

const AgentCards = ({agents}: { agents: AgentType[] }) => {
  return (
    <FlexGrid className="agent-card__grid">
      <Row>
        {agents.map((agent) => (
          <Column sm={4} md={4} lg={5}>
          <ExpressiveCard
            label={agent.label}
            title={agent.title}
            className="agent-card"
            primaryButtonText="Details"
          >
            <AgentCardBody agentContent={agent.content} />
          </ExpressiveCard>
          </Column>
        ))}
      </Row>
    </FlexGrid>
  )
};

export default AgentCards;
