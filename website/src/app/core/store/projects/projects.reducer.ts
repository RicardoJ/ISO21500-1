import { Types, ActionsUnion } from './projects.actions';
import { ProjectsState } from './projects.state';

export const initialState: ProjectsState = {
  isLoading: false,
  projects: []
};

export function projectsReducer(
  state: ProjectsState = initialState,
  action: ActionsUnion
) {
  switch (action.type) {
    case Types.FetchProjects:
      return { ...state, isLoading: true };
    case Types.FetchProjectsDone:
      return { ...state, isLoading: false, projects: action.payload };
    case Types.FetchProjectsFailure:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
