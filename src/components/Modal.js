import "./modal.css";
import styled from "styled-components";

const ModalComponent = styled.div`
   width: 95%;
   display: flex;
   flex-direction: row;
   justify-content: start;
   margin: 0.5em;
   border: 1px solid black;
   display: ${({ show }) => (show ? "block" : "none")};
`;

export const Modal = ({ handleClose, show, children }) => {
   const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";

   return (
      <div className={showHideClassName}>
         <section className="modal-main">
            {children}
            <button type="button" onClick={handleClose}>
               Close
            </button>
         </section>
      </div>
   );
};
