import { useRef, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      document.body.style.overflow = "hidden";

      const handleBackdropClick = (event: MouseEvent) => {
        if (
          event.target instanceof HTMLElement &&
          event.target.tagName === "DIALOG"
        ) {
          onClose();
        }
      };

      dialog.addEventListener("mousedown", handleBackdropClick);
      return () => {
        dialog.removeEventListener("mousedown", handleBackdropClick);
        document.body.style.overflow = "";
      };
    } else {
      dialog.close();
    }
  }, [isOpen, onClose]);

  return (
    <dialog ref={dialogRef}>
      <div className="modal">{children}</div>
    </dialog>
  );
}
