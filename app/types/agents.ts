export type AgentContentType = {
  description: string,
  sections: { title: string, body: string }[]
}

export type AgentType = {
  label: string,
  title: string,
  content: AgentContentType
}