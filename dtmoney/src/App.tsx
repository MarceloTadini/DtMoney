import { DashBoard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";

export function App() {

  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setisNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setisNewTransactionModalOpen(false);
    }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <DashBoard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}


