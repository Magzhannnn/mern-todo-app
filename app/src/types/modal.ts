export enum ModalActionTypes {
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
}

interface openModal {
  type: ModalActionTypes.OPEN_MODAL;
}

interface closeModal {
  type: ModalActionTypes.CLOSE_MODAL;
}

export type ModalActions = openModal | closeModal;
