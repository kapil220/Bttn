import React, { useRef } from "react";
import FileUpload from "../design/fileupload"; // Adjust the path as necessary

function Modal({ addFile }) {
  const fileUploadRef = useRef();

  const showModal = () => {
    const modal = document.getElementById("my_modal_1");
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_1");
    if (modal) {
      modal.close();
    }
    if (fileUploadRef.current) {
      fileUploadRef.current.resetFileUpload();
    }
  };

  return (
    <div>
      <button className="btn bg-blue-950 text-white" onClick={showModal}>
        Upload Records
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="grid gap-2">
            <div className="row-start-1">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-start-1">
                  <h3 className="font-bold text-lg">Upload Records</h3>
                </div>
                <div className="absolute right-10">
                  <form method="dialog">
                    <button type="button" onClick={closeModal}>
                      X
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <hr />
            <div className="row-start-6">
              <div>
                <FileUpload ref={fileUploadRef} addFile={addFile} />
                <div className="text-center">
                  <p className="mt-4 text-sm text-gray-500">
                    We currently support PDF, DOC, PNG, and JPEG formats. You
                    can upload up to 10 files at once, each up to 50MB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
