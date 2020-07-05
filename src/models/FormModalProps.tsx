import { SemanticCOLORS } from 'semantic-ui-react';

export interface FormModalProps {
  title: string,
  triggerProps: TriggerProps,
  inputs: Array<Input>,
  submitProps: SubmitProps,
  update: any,
  loadingState: any,
  modalState: any,
}

interface TriggerProps {
  icon: string,
  content: string,
  color: SemanticCOLORS,
}

interface Input {
  id: number,
  type: string,
  title: string,
  props: InputProps,
}

interface InputProps {
  value: string,
  onChange: Function,
}

interface SubmitProps {
  icon: string,
  content: string,
}