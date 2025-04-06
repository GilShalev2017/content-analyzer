import { Result } from "../../models/models";

export interface AppState {
    results: {
        entities: { [id: number]: Result };
        selectedResultId: number | null;
    };
}