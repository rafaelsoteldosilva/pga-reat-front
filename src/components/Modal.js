import styled from "styled-components";

const ModalComponent = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.6);
   display: ${({ show }) => (show ? "block" : "none")};
`;

const ModalMain = styled.div`
   position: fixed;
   background: white;
   width: 80%;
   height: auto;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;

export const Modal = ({ handleClose, show, children }) => {
   return (
      <ModalComponent show={show}>
         <ModalMain>
            {children}
            <button type="button" onClick={handleClose}>
               Close
            </button>
         </ModalMain>
      </ModalComponent>
   );
};
