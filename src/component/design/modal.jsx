function Modal() {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-blue-950 text-white"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Upload Records
      </button>
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box">
          <div></div>
          <h3 className="font-bold text-lg ">Upload Records</h3>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">X</button>
            </form>
          </div>
          <input type="file" className="file-input w-full max-w-xs" />
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
