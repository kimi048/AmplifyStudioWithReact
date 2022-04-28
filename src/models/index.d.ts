import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ActionCardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ActionCard {
  readonly id: string;
  readonly image?: string | null;
  readonly rating?: number | null;
  readonly title?: string | null;
  readonly slug?: string | null;
  readonly button?: string | null;
  readonly amount?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ActionCard, ActionCardMetaData>);
  static copyOf(source: ActionCard, mutator: (draft: MutableModel<ActionCard, ActionCardMetaData>) => MutableModel<ActionCard, ActionCardMetaData> | void): ActionCard;
}