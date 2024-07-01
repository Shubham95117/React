import Header from "./components/Header";
import "./App.css";
import { useState } from "react";
import Modal from "./components/UI/Modal";
import StudentForm from "./components/StudentForm";

function App() {
  const [modalShown, setModalShown] = useState(false);

  const showModal = () => {
    setModalShown(true);
  };

  const hideModal = () => {
    setModalShown(false);
  };

  return (
    <div className="App">
      <Header onShow={showModal} />
      {modalShown && (
        <Modal onClose={hideModal}>
          <StudentForm hideModal={hideModal} />
        </Modal>
      )}
    </div>
  );
}

export default App;
