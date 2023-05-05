import { ModalActionTypes, ModalActions } from "../../types/modal";

export const modalReducer = (state = false, action: ModalActions): boolean => {
  switch (action.type) {
    case ModalActionTypes.OPEN_MODAL:
      return true;
    case ModalActionTypes.CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};
