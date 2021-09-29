import React from "react";
import "../styles/Modal.sass";
import Portal from "./Portal";

const Modal = (props) => {
  const [active, setActive] = React.useState(false);
  // get spread props out variables
  const { open, onClose, locked } = props;
  // Make a reference to the backdrop
  const backdrop = React.useRef(null);

  // on mount
  React.useEffect(() => {
    // get dom element from backdrop
    const { current } = backdrop;
    // when transition ends set active state to match open prop
    const transitionEnd = () => setActive(open);
    // when esc key press close modal unless locked
    const keyHandler = (e) =>
      !locked && [27].indexOf(e.which) >= 0 && onClose();
    // when clicking the backdrop close modal unless locked
    const clickHandler = (e) => !locked && e.target === current && onClose();

    // if the backdrop exists set up listeners
    if (current) {
      current.addEventListener("transitionend", transitionEnd);
      current.addEventListener("click", clickHandler);
      window.addEventListener("keyup", keyHandler);
    }

    // if open props is true add inert to #root
    // and set active state to true
    if (open) {
      window.setTimeout(() => {
        document.activeElement.blur();
        setActive(open);
        document.querySelector("#app").setAttribute("inert", "true");
      }, 10);
    }

    // on unmount remove listeners
    return () => {
      if (current) {
        current.removeEventListener("transitionend", transitionEnd);
        current.removeEventListener("click", clickHandler);
      }

      document.querySelector("#app").removeAttribute("inert");
      window.removeEventListener("keyup", keyHandler);
    };
  }, [open, locked, onClose]);

  return (
    <>
      {(open || active) && (
        <Portal className="modal-portal">
          <div ref={backdrop} className={`Backdrop ${active && open && "active"}`}>
            <div className="Content modal-div">{props.children}</div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
