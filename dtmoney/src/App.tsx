import { DashBoard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root'); //Questão de acessibilidade para o modal ficar dentro da root e não no body do html

export function App() {

  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setisNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setisNewTransactionModalOpen(false);
    }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <DashBoard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}


